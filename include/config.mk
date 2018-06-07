# Compare this file to:
# https://github.com/open-contracting/standard_profile_template/blob/master/config.mk

# Edit these variables as appropriate.

# The space-separated, period-prefixed translations to build (for easier substitutions).
TRANSLATIONS=.es
# The source language and translations to build.
LANGUAGES=.en $(TRANSLATIONS)

# Directory of documentation files to build with Sphinx.
DOCS_DIR=docs
# Directory of catalog files.
LOCALE_DIR=locale
# Directory in which to build documentation files.
BUILD_DIR=build
# Extra build files or directories.
EXTRA_BUILD_FILES=docs/_build docs/_static/codelists docs/_static/ppp-release-schema.json docs/extensions/codelists_translated locale/es/LC_MESSAGES/*.mo locale/es/LC_MESSAGES/reference/*.mo
# Files that are built and distributed (you may use Bash extended globbing).
DIST_FILES=compiledCodelists/*.csv docs/extensions/!(index|milestones).md docs/extensions/codelists/*.csv schema/ppp-release-schema.json consolidatedExtension/codelists/*.csv consolidatedExtension/release-schema.json
# Directory in which to build .pot files.
POT_DIR=$(BUILD_DIR)/locale
# The prefix, if any, to the schema and codelists domains.
DOMAIN_PREFIX=ppp-
# Directory containing assets to copy to the build directory (no trailing slash).
ASSETS_DIR=
# The Transifex project name.
TRANSIFEX_PROJECT=ocds-for-ppps

# Compile PO files for codelists and schema to MO files, so that translate_codelists and translate_schema succeed.
.PHONY: compile
compile:
	pybabel compile --use-fuzzy -d $(LOCALE_DIR) -D ppp-schema
	pybabel compile --use-fuzzy -d $(LOCALE_DIR) -D ppp-codelists
	pybabel compile --use-fuzzy -d $(LOCALE_DIR) -D reference/codelists

# Put local targets below.

OCDS_TAG=1__1__2

# Update OCDS Show for PPPs.
.PHONY: update_ocds_show
update_ocds_show:
	curl -Ss -O https://codeload.github.com/open-contracting/ocds-show-ppp/zip/gh-pages
	unzip -q gh-pages
	rm -f gh-pages
	rm -rf docs/_static/ocds-show
	# Delete these files, which will otherwise be caught by `sphinx-build -b gettext`.
	rm -f ocds-show-ppp-gh-pages/CONTRIBUTING.md
	rm -f ocds-show-ppp-gh-pages/README.md
	mv ocds-show-ppp-gh-pages docs/_static/ocds-show

# Update base schema and codelists.
.PHONY: update_base_files
update_base_files:
	curl -Ss -o standard.zip https://codeload.github.com/open-contracting/standard/zip/$(OCDS_TAG)
	unzip -q standard.zip
	rm -f standard.zip
	rm -f schema/base-release-schema.json
	rm -f schema/base-codelists/*.csv
	mv standard-$(OCDS_TAG)/standard/schema/release-schema.json schema/base-release-schema.json
	mv standard-$(OCDS_TAG)/standard/schema/codelists/*.csv schema/base-codelists
	rm -rf standard-$(OCDS_TAG)
