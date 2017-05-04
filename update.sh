wget http://standard.open-contracting.org/1.1-dev/en/release-schema.json -O schema/base-release-schema.json
wget https://github.com/open-contracting/ocds-show/archive/ppp-ajax.zip -O docs/_static/ocds-show.zip
cd docs/_static/   
unzip ocds-show.zip
mv ocds-show-* ocds-show
rm ocds-show.zip
