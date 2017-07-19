# ToDo: Replace requests JSON get with ordered dictionary
# Get process to make it's own backup and switch this back in at the end.

import requests
import io
import json
import json_merge_patch
from collections import OrderedDict
from zipfile import ZipFile


extensions_to_merge = ['process_title', 'location', 'requirements', 'budget', 'budget_project',
                       'documentation_details', 'metrics', 'risk_allocation', 'shareholders', 'finance',
                       'qualification', 'tariffs', 'performance_failures', 'signatories', 'charges',
                       'transaction_milestones', 'bids', 'milestone_documents', 'ppp']

GIT_REF = "master"
location = "http://standard.open-contracting.org/extension_registry/{}/extensions.json".format(GIT_REF)
extension_json = requests.get(location).json()

with open('base-release-schema.json') as schema_file:
    schema = json.load(schema_file, object_pairs_hook=OrderedDict)

ppp_extension = {}

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

    except KeyError:
        pass

    blob_index = extension['documentation_url'].find('/blob')
    docs_url = extension['documentation_url']
    if blob_index != -1:
        docs_url = docs_url[:blob_index]

    repo_zip = requests.get(docs_url + '/archive/master.zip', stream=True)
    if repo_zip.ok:
        zip_file = ZipFile(io.BytesIO(repo_zip.content))
        for f in zip_file.filelist:
            filename = f.filename
            if 'codelist' in filename and filename[-3:] == 'csv':
                index = filename.rfind('/')
                csv_filename = '../codelists' + filename[index:]
                with open(csv_filename, 'wb') as fp:
                    fp.write(zip_file.read(f.filename))
                print('{} {} for extension {}'.format('Adding codelist', filename[index + 1:], extension.get('name')))

with open("../release-schema.json") as local_patch:
    local_json = json.load(local_patch, object_pairs_hook=OrderedDict)
    schema = json_merge_patch.merge(schema, local_json)

with open('ppp-release-schema.json', 'w') as schema_file:
    json.dump(schema, schema_file, indent=4)

with open('ppp-extension.json', 'w') as extension_file:
    json.dump(ppp_extension, extension_file, indent=4)
