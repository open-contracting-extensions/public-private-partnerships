import csv
import glob
import io
import json
import json_merge_patch
import os
import requests
import shutil
import sys
from collections import OrderedDict
from zipfile import ZipFile

docs_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), '..', 'docs')
sys.path.append(docs_path)

from conf import extension_registry_git_ref  # noqa

extensions_in_profile = [
    'bids',
    'budget',
    'budget_project',
    'charges',
    'documentation_details',
    'finance',
    'location',
    'metrics',
    'milestone_documents',
    'performance_failures',
    'ppp',
    'process_title',
    'qualification',
    'requirements',
    'risk_allocation',
    'shareholders',
    'signatories',
    'tariffs',
    'transaction_milestones',
]


def pluck_fieldnames(fieldnames, basename):
    """
    Normalizes the fieldnames in `compiledCodelists` to only include Code, Title, Description, Extension.
    """
    # Special case.
    if basename == 'documentType.csv':
        return fieldnames

    valid_fieldnames = ['Code', 'Title', 'Description', 'Extension']

    return [fieldname for fieldname in fieldnames if fieldname in valid_fieldnames]


def write_csv_file(path, fieldnames, rows):
    """
    Writes a CSV file.
    """
    with open(path, 'w') as f:
        # Since `pluck_fieldnames` reduces the number of fields, we ignore any extra fields.
        writer = csv.DictWriter(f, fieldnames=fieldnames, lineterminator='\n', extrasaction='ignore')
        writer.writeheader()
        writer.writerows(rows)


def process_codelist(basename, content, extension_name):
    """
    Modifies a base codelist by adding or removing codes if the codelist name in the extension starts with a plus or
    minus. Otherwise, copies the codelist and adds an Extension column.
    """
    if basename[0] in ('+', '-'):
        path = os.path.join(compiled_codelists, basename[1:])
        if not os.path.isfile(path):
            raise Exception('Base codelist for {} is missing'.format(basename))

        rows = []
        with open(path, 'r') as f, io.StringIO(content.decode()) as g:
            reader = csv.DictReader(f)

            if basename.startswith('+'):
                added = csv.DictReader(g)
                if pluck_fieldnames(reader.fieldnames, basename) != pluck_fieldnames(added.fieldnames, basename) + ['Extension']:
                    raise Exception('Codelist {} from {} has different fields than the base codelist'.format(
                        basename, extension_name))
                rows.extend(reader)
                rows.extend(add_extension_to_rows(added, extension_name, basename))

            elif basename.startswith('-'):
                removed = [row['Code'] for row in csv.DictReader(g)]
                for row in reader:
                    if row['Code'] in removed:
                        continue
                    else:
                        rows.append(row)

        write_csv_file(path, reader.fieldnames, rows)
    else:
        path = os.path.join(compiled_codelists, basename)
        with open(path, 'wb') as f:
            f.write(content)

        append_extension(path, extension_name, basename)


def add_extension_to_rows(reader, extension_name, basename):
    """
    Returns a list of rows, adding an Extension column.
    """
    rows = []
    for row in reader:
        if row.get('Deprecated'):
            print('... skipping deprecated code {} in {}'.format(row['Code'], basename))
        else:
            row['Extension'] = extension_name
            rows.append(row)
    return rows


def append_extension(path, extension_name, basename):
    """
    Rewrites a codelist CSV file, adding an Extension column.
    """
    with open(path) as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames + ['Extension']
        rows = add_extension_to_rows(reader, extension_name, basename)

    write_csv_file(path, pluck_fieldnames(fieldnames, basename), rows)


# This script compiles codelists into `compiledCodelists`. The other codelist directories are:
#
# * `codelists`: The profile's original codelists
# * `schema/base-codelists`: The standard's original codelists
# * `docs/extensions/codelists`: The extensions' original codelists, downloaded by this script
compiled_codelists = os.path.join('..', 'compiledCodelists')

# The base schema will be progressively merged with extensions' schema and this profile's schema.
with open('base-release-schema.json') as f:
    schema = json.load(f, object_pairs_hook=OrderedDict)

# This profile's extension will be progressively merged, as well.
profile_extension = {}

# Codelists with the same name should be identical across extensions.
codelists_seen = {}

# Start clean.
paths = [
    os.path.join(compiled_codelists, '*.csv'),
    os.path.join('..', 'docs', 'extensions', '*.md'),
    os.path.join('..', 'docs', 'extensions', 'codelists' '*.csv'),
    os.path.join('ppp-extension.json'),
    os.path.join('ppp-release-schema.json'),
]
for path in paths:
    for filename in glob.glob(path):
        if os.path.basename(filename) not in ('index.md', 'milestones.md'):
            os.remove(filename)

# Copy the base codelists to the compiled codelists, and add an Extension column.
for filename in glob.glob(os.path.join('base-codelists', '*.csv')):
    basename = os.path.basename(filename)
    path = os.path.join(compiled_codelists, basename)
    shutil.copy(filename, path)
    append_extension(path, 'OCDS Core', basename)

url = 'http://standard.open-contracting.org/extension_registry/{}/extensions.json'.format(extension_registry_git_ref)  # noqa
extension_json = requests.get(url).json()

for extension in extension_json['extensions']:
    slug = extension['slug']

    # If the extension is part of the profile, merge the patch and write the readme.
    if slug in extensions_in_profile:
        print('Merging {}'.format(slug))
        url = extension['url'].rstrip('/') + '/'
        patch = requests.get(url + 'release-schema.json').json()
        readme = requests.get(url + 'README.md').text

        schema = json_merge_patch.merge(schema, patch)
        profile_extension = json_merge_patch.merge(profile_extension, patch)
        with open(os.path.join('..', 'docs', 'extensions', '{}.md'.format(slug)), 'w') as f:
            f.write(readme)
    else:
        print('... skipping {}'.format(slug))
        continue

    # Skip this profile's codelist processing, as we process them locally.
    if slug == 'ppp':
        continue

    parts = extension['url'].rsplit('/', 3)
    url = 'https://github.com/open-contracting/{}/archive/{}.zip'.format(parts[-3], parts[-2])
    response = requests.get(url, stream=True)
    if response.ok:
        zipfile = ZipFile(io.BytesIO(response.content))
        for f in zipfile.filelist:
            filename = f.filename
            if 'codelist' in filename and os.path.splitext(filename)[1] == '.csv':
                basename = os.path.basename(filename)
                content = zipfile.read(filename)

                if basename in codelists_seen and codelists_seen[basename] != content:
                    raise Exception('codelist {} is different across extensions'.format(basename))
                codelists_seen[basename] = content
                with open(os.path.join('..', 'docs', 'extensions', 'codelists', basename), 'wb') as f:
                    f.write(content)

                print('    Processing {}'.format(basename))
                process_codelist(basename, content, extension['name']['en'])
    else:
        print('ERROR: Could not find release ZIP for {}'.format(slug))

# codelists belonging to ppp i.e this repo

print('Merging ppp')
for filename in glob.glob(os.path.join('..', 'codelists', '*.csv')):
    with open(filename, 'rb') as f:
        basename = os.path.basename(filename)
        content = f.read()

        print('Processing {}'.format(basename))
        process_codelist(basename, content, 'Public Private Partnership')

with open(os.path.join('..', 'release-schema.json')) as f:
    schema = json_merge_patch.merge(schema, json.load(f, object_pairs_hook=OrderedDict))

with open('ppp-release-schema.json', 'w') as f:
    json.dump(schema, f, indent=2, separators=(',', ': '))

with open('ppp-extension.json', 'w') as f:
    json.dump(profile_extension, f, indent=2, separators=(',', ': '))
