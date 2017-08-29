# ToDo: Replace requests JSON get with ordered dictionary
# Get process to make it's own backup and switch this back in at the end.

import requests
import io
import os
import json
import json_merge_patch
from collections import OrderedDict
from zipfile import ZipFile
import glob
import shutil
import csv


extensions_to_merge = ['process_title', 'location', 'requirements', 'budget', 'budget_project',
                       'documentation_details', 'metrics', 'risk_allocation', 'shareholders', 'finance',
                       'qualification', 'tariffs', 'performance_failures', 'signatories', 'charges',
                       'transaction_milestones', 'bids', 'milestone_documents', 'ppp']

GIT_REF = "ppp"
location = "http://standard.open-contracting.org/extension_registry/{}/extensions.json".format(GIT_REF)
extension_json = requests.get(location).json()

with open('base-release-schema.json') as schema_file:
    schema = json.load(schema_file, object_pairs_hook=OrderedDict)

def pick_fieldnames(fieldnames, codelist):
    # Special case document type to ignore fieldname selection.
    accepted_fieldnames = ['code', 'title', 'description', 'extension']
    if codelist == 'documentType.csv':
        return fieldnames
    if codelist == 'currency.csv':
        accepted_fieldnames = ['code', 'title', 'extension', 'name']
    new_fieldnames = []
    for fieldname in fieldnames:
        for accepted_fieldname in accepted_fieldnames:
            if accepted_fieldname in fieldname.lower():
                new_fieldnames.append(fieldname)
                break
    return new_fieldnames


def add_codes(codelist_name, codelist_data, extension):
    codelist_destination = '../compiledCodelists/' + codelist_name[1:]

    new_codelist_data = []
    with open(codelist_destination, 'r') as current_codelist_file, io.StringIO(codelist_data.decode()) as new_codes:

        current_codelist = csv.DictReader(current_codelist_file)
        additional_codes = csv.DictReader(new_codes)

        if pick_fieldnames(current_codelist.fieldnames, codelist_name) != pick_fieldnames(additional_codes.fieldnames, codelist_name) + ['Extension']:
            print("WARNING: Codelist {} from extension {} has different fields as the base codelist".format(codelist_name, extension['name']['en']))
            #raise Exception("Codelist {} from extension {} can not be applied as it has different fields as the base codelist".format(codelist_name, extension['name']['en']))
        new_codelist_data.extend(current_codelist)
        for code in additional_codes:
            code['Extension'] = extension['name']['en']
            new_codelist_data.append(code)

    with open(codelist_destination, 'w+') as new_codelist_file:
        writer = csv.DictWriter(f=new_codelist_file, fieldnames=current_codelist.fieldnames, extrasaction='ignore')
        writer.writeheader()
        for row in new_codelist_data:
            writer.writerow(row)

def remove_codes(codelist_name, codelist_data, extension):
    codelist_destination = '../compiledCodelists/' + codelist_name[1:]
    removed_codes_list = []
    new_codelist_data = []
    with open(codelist_destination, 'r') as current_codelist_file, io.StringIO(codelist_data.decode()) as deleted_codes:
        current_codelist = csv.DictReader(current_codelist_file)
        removed_codes = csv.DictReader(deleted_codes)
        for code_data in removed_codes:
            code = code_data.get("Code", code_data.get("code"))
            if code:
                removed_codes_list.append(code)
            else:
                print("WARNING: Codelist {} from extension {} has missing code data".format(codelist_name, extension['name']['en']))

        for code_data in current_codelist:
            code = code_data.get("Code", code_data.get("code"))
            if code in removed_codes_list:
                continue
            else:
                new_codelist_data.append(code_data)

    with open(codelist_destination, 'w+') as new_codelist_file:
        writer = csv.DictWriter(new_codelist_file, fieldnames=current_codelist.fieldnames, extrasaction='ignore')
        writer.writeheader()
        for row in new_codelist_data:
            writer.writerow(row)


def append_extension(codelist_destination, extension, codelist_name):
    new_codelist_data = []
    with open(codelist_destination, 'r') as current_codelist_file:
        current_codelist = csv.DictReader(current_codelist_file)
        for code_data in current_codelist:
            code_data['Extension'] = extension['name']['en']
            new_codelist_data.append(code_data)

    with open(codelist_destination, 'w+') as new_codelist_file:
        if 'Extension' in current_codelist.fieldnames:
            fieldnames = current_codelist.fieldnames
        else:
            fieldnames = current_codelist.fieldnames + ['Extension']
        fieldnames = pick_fieldnames(fieldnames, codelist_name)

        writer = csv.DictWriter(new_codelist_file, 
                                fieldnames=fieldnames,
                                extrasaction='ignore')
        writer.writeheader()
        for row in new_codelist_data:
            writer.writerow(row)



def process_codelist(codelist_name, codelist_data, extension):
    codelist_location = '../compiledCodelists/' + codelist_name
    if codelist_name[0] in ['+', '-']:
        codelist_location = '../compiledCodelists/' + codelist_name[1:]
        if not os.path.exists(codelist_location):
            raise Exception("Codelist {} can not be applied as there is no base codelist".format(codelist_name))
        if codelist_name.startswith('+'):
            add_codes(codelist_name, codelist_data, extension)
        if codelist_name.startswith('-'):
            remove_codes(codelist_name, codelist_data, extension)
    else:
        with open(codelist_location, 'wb') as fp:
            fp.write(codelist_data)
        append_extension(codelist_location, extension, codelist_name)



ppp_extension = {}
codelists = set()

for codelist in glob.glob('../compiledCodelists/*.csv'):
    os.remove(codelist)

for codelist in glob.glob('base-codelists/*.csv'):
    codelist_location = '../compiledCodelists/' + codelist.split('/')[-1]
    shutil.copy(codelist, codelist_location)
    append_extension(codelist_location, {'name': {'en': 'OCDS Core'}}, codelist.split('/')[-1])

for extension in extension_json['extensions']:
    try:
        if extension['slug'] in extensions_to_merge:
            print("Merging " + extension['slug'])
            extension_patch = requests.get(extension['url'].rstrip("/") + "/" + "release-schema.json").json()
            schema = json_merge_patch.merge(schema, extension_patch)
            ppp_extension = json_merge_patch.merge(ppp_extension, extension_patch)

            extension_readme = requests.get(extension['url'].rstrip("/") + "/" + "README.md")
            with open('../docs/extensions/' + extension['slug'] + '.md', 'w') as readme:
                readme.write(extension_readme.text)
        else:
            print("Missing {}".format(extension['slug']))
            continue
    except KeyError:
        continue

    #skip codelists for ppp as we get these locally.
    if extension['slug'] == 'ppp':
        continue

    blob_index = extension['documentation_url'].find('/blob')
    docs_url = extension['documentation_url']
    if blob_index != -1:
        docs_url = docs_url[:blob_index]

    EXT_REF = extension['url'].split('/')[-2]

    repo_zip = requests.get('https://github.com/open-contracting/' + extension['url'].split('/')[-3] + '/archive/{}.zip'.format(EXT_REF), stream=True)
    if repo_zip.ok:
        zip_file = ZipFile(io.BytesIO(repo_zip.content))
        for f in zip_file.filelist:
            filename = f.filename
            if 'codelist' in filename and filename[-3:] == 'csv':
                codelist_content = zip_file.read(f.filename)
                index = filename.rfind('/')
                csv_filename = filename[index+1:]
                if csv_filename in codelists:
                    raise Exception("specifying codelist {} twice".format(csv_filename))
                codelists.add(csv_filename)
                with open('../docs/extensions/codelists/' + csv_filename, 'wb') as fp:
                    fp.write(codelist_content)

                print('{} {} for extension {}'.format('Adding codelist', filename[index + 1:], extension['name']['en']))
                process_codelist(csv_filename, codelist_content, extension)
    else:
        print('could not find release zip for ' + extension['slug'])            

### codelists belonging to ppp i.e this repo

for codelist in glob.glob("../codelists/*.csv"):
    with open(codelist, 'rb') as ppp_codelist_file:
        codelist_content = ppp_codelist_file.read()
        csv_filename = codelist.split("/")[-1]
        print('{} {} for extension {}'.format('Adding codelist', csv_filename, "Public Private Partnership"))
        process_codelist(csv_filename, codelist_content, {"name": {"en": "Public Private Partnership"}})



with open("../release-schema.json") as local_patch:
    local_json = json.load(local_patch, object_pairs_hook=OrderedDict)
    schema = json_merge_patch.merge(schema, local_json)

with open('ppp-release-schema.json', 'w') as schema_file:
    json.dump(schema, schema_file, indent=4)

with open('ppp-extension.json', 'w') as extension_file:
    json.dump(ppp_extension, extension_file, indent=4)
