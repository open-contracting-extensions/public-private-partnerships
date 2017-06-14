Public Private Partnership Extension (Alpha)
-------------------------------------------

This repository stores documentation for OCDS for PPPs, built using Sphinx.

### Translation guide

```
mkdir build_locale
pybabel extract -F .babel_schema . -o build_locale/ppp-schema.pot

cd docs
sphinx-build -b gettext . ../build_locale/
cd ..

rm -r build_locale/_static/ocds-show build_locale/codelists/README.pot

sphinx-intl update-txconfig-resources --transifex-project-name ocds-for-ppps --pot-dir build_locale --locale-dir locale

```
