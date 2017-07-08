## ToDo: Replace requests JSON get with ordered dictionary
## Get process to make it's own backup and switch this back in at the end.

import requests
import json
import json_merge_patch
from collections import OrderedDict

extensions_to_merge = ['ppp','process_title','location','requirements','budget','budget_project','documentation_details','metrics','risk_allocation','shareholders','finance','qualification','tariffs','performance_failures','signatories','charges','transaction_milestones','bids','milestone_documents']

GIT_REF = "master"
location = "http://standard.open-contracting.org/extension_registry/{}/extensions.json".format(GIT_REF)
extension_json = requests.get(location).json()

with open('base-release-schema.json') as schema_file:
    schema = json.load(schema_file,object_pairs_hook=OrderedDict)

ppp_extension = {}

for extension in extension_json['extensions']:
    try:
        if extension['slug'] in extensions_to_merge:
            print("Merging " + extension['slug'] )
            extension_data = requests.get(extension['url'].rstrip("/") + "/" + "release-schema.json")
            extension_patch = extension_data.json()
            schema = json_merge_patch.merge(schema, extension_patch)

            # We need to replace the nulls before merging for the PPP extension, else these get knocked out of the merged extension...
            ppp_extension_patch = json.loads(extension_data.text.replace(":null",":\"REPLACE_WITH_NULL\"").replace(": null",":\"REPLACE_WITH_NULL\""))
            ppp_extension = json_merge_patch.merge(ppp_extension, ppp_extension_patch)


            extension_readme = requests.get(extension['url'].rstrip("/") + "/" + "README.md")

            with open('../docs/extensions/' + extension['slug'] + '.md','w') as readme:
                readme.write(extension_readme.text)

    except KeyError:
        print("Nothing")
        pass

with open("../release-schema.json") as local_patch:
    local_json = json.load(local_patch,object_pairs_hook=OrderedDict)
    schema = json_merge_patch.merge(schema, local_json)

with open('ppp-release-schema.json','w') as schema_file:
    json.dump(schema,schema_file,indent=4)

with open('ppp-extension.json','w') as extension_file:
    extension_file.write(json.dumps(ppp_extension,indent=4).replace("\"REPLACE_WITH_NULL\"","null"))
