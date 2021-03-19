# Documents

There are many documents that should be disclosed at points during a PPP process.

The OCDS for PPPs documentType codelist includes a description of each document or element of information referenced in the World Bank PPP Disclosure Framework. 

## Representation

Each document can be represented using a `Document` object. This can contain:

* A documentType code;
* A short summary of the information required;
* A direct link to the exact place where the further information is found;

The full set of fields for representing a document are shown below

```{jsonschema} ../_static/patched/release-schema.json
:pointer: /definitions/Document
:collapse:
:nocrossref:
```

## Types

The full list of document types, and where they should appear, is given below.

```{csv-table-no-translate}
:header-rows: 1
:file: ../_static/patched/codelists/documentType.csv
```

