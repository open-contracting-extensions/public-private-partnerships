# This script will fetch the latest version of OCDS Show for PPPs
wget https://github.com/open-contracting/ocds-show-ppp/archive/gh-pages.zip -O docs/_static/ocds-show.zip
cd docs/_static/   
rm -rf ocds-show
unzip ocds-show.zip
mv ocds-show-* ocds-show
rm ocds-show.zip
