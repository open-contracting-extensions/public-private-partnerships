Public Private Partnership Extension (Alpha)
-------------------------------------------

This repository stores documentation for OCDS for PPPs, built using Sphinx.

## Readthedocs

The master branch of the repo get automatically built and deployed to:
https://ocds-for-ppps.readthedocs.io/en/latest/

## Installation

```
# Make sure you have python3 venv, e.g. for Ubuntu
# If you're not sure, try creating a venv, and see if it errors
sudo apt-get install python3-venv

# Create a venv
python3 -m venv .ve    
# Enter the venv, needs to be run for every new shell
source .ve/bin/activate
# Install requirements
pip install -r requirements.txt
```

## Build the docs locally

First follow the steps under Installation, then:

```
cd docs
make dirhtml
```

Built docs are in `docs/_build/dirhtml`.


Viewing the docs:
```
cd _build/dirhtml
python -m http.server
```

Then go to http://localhost:8000/ in a browser.


## Translation guide

### Pushing text to transifex

First, run the Installation as described above.

Extracting strings that need translating:
```
rm -r build_locale
mkdir build_locale
pybabel extract -F .babel_schema . -o build_locale/ppp-schema.pot

cd docs
sphinx-build -b gettext . ../build_locale/
cd ..

rm -r build_locale/_static/ocds-show
```

Pushing extracted strings to transifex:
```
rm .tx/config
sphinx-intl create-txconfig
sphinx-intl update-txconfig-resources --transifex-project-name ocds-for-ppps --pot-dir build_locale --locale-dir locale
tx push -s
```


### Pulling translations from transifex

First, run the Installation as described above.

Pull translations from transifex:
```
tx pull -a -f
```

These should be commited and pushed, which will trigger a build of the ReadTheDocs Spanish site - https://ocds-for-ppps.readthedocs.io/es/latest/

To build the Spanish docs locally, follow the "Build the docs locally" instructions above, but instead of `make dirhtml`, run:
```
make -e SPHINXOPTS="-D language='es'" html
```
