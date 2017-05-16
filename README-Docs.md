Public Private Partnership Extension (Alpha)
-------------------------------------------

This repository stores documentation for OCDS for PPPs, built using Sphinx.

### Translation guide

```
mkdir locale
pybabel extract -F .babel_schema . -o locale/ppp-schema.pot
pybabel extract -F .babel_codelists . -o locale/ppp-codelists.pot

cd docs

sphinx-build -b gettext . ../locale/

cd ..

sphinx-intl update-txconfig-resources --transifex-project-name ocds-for-ppps --pot-dir locale --locale-dir locale_info

```
