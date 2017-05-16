Public Private Partnership Extension (Alpha)
-------------------------------------------

This repository stores documentation for OCDS for PPPs, built using Sphinx.

### Translation guide

```
cd schema

pybabel extract -F .babel_schema . -o ../locale/schema.pot

cd ../docs

sphinx-build -b gettext . ../locale/

cd ..

sphinx-intl update-txconfig-resources --transifex-project-name ocds-for-ppps --pot-dir locale --locale-dir locale_info

```