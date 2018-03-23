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
CATALOGS_DIR=locale
# Directory in which to build documentation files.
BUILD_DIR=build
# Extra build files or directories.
EXTRA_BUILD_FILES=docs/_build docs/_static/codelists docs/_static/ppp-release-schema.json docs/extensions/codelists_translated locale/es/LC_MESSAGES/*.mo locale/es/LC_MESSAGES/reference/*.mo
# Files that are built and distributed (you may use Bash extended globbing).
DIST_FILES=compiledCodelists/*.csv docs/extensions/!(index|milestones).md docs/extensions/codelists/*.csv schema/ppp-extension.json schema/ppp-release-schema.json
# Directory in which to build .pot files.
LOCALE_DIR=$(BUILD_DIR)/locale
# Directory containing assets to copy to the build directory (no trailing slash).
ASSETS_DIR=

# Compile PO files for codelists and schema to MO files, so that translate_codelists and translate_schema succeed.
.PHONY: compile
compile:
	pybabel compile --use-fuzzy -d $(CATALOGS_DIR) -D ppp-schema
	pybabel compile --use-fuzzy -d $(CATALOGS_DIR) -D ppp-codelists
	pybabel compile --use-fuzzy -d $(CATALOGS_DIR) -D reference/codelists

# Put local targets below.
