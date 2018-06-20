This directory contains the following files and subdirectories:

1. `base-release-schema.json` - copy of the schema from the version of the core OCDS standard used to build the PPP profile
1. `base-codelists/` - copy of the codelists from the version of the core OCDS standard used to build the PPP profile
1. `consolidatedExtension/` - a single consolidated extension which brings together all the schema and codelist changes from the individual extensions which make up the PPP profile
1. `ppp-release-schema.json` - the full schema for the PPP profile, e.g. the base schema patched with the consolidated extension
1. `apply-extensions.py` - script to generate 3 and 4
