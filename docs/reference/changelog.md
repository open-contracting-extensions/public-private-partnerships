# Changelog

## [1.0.0.beta2] - yyyy-mm-dd

### Normative changes

* [#203](https://github.com/open-contracting-extensions/public-private-partnerships/pull/203) The core extensions have been upgraded to v1.1.4: Bid statistics and details, Location, Milestone documents, Process level title and description.
* [#205](https://github.com/open-contracting-extensions/public-private-partnerships/pull/205) The documentType codelist has been updated:
  * 'contractSchedules' has been renamed to 'contractMilestones'.
  * The description of 'needsAssessment' has been updated to match the description from OC4IDS.
  * The description of 'environmentalImpact' has been updated to match the description from OC4IDS.

## Non-normative changes

* [#195](https://github.com/open-contracting-extensions/public-private-partnerships/pull/195) The documentation pages of all extensions have been moved to the new [Extension Explorer](https://extensions.open-contracting.org/).
* [#212](https://github.com/open-contracting-extensions/public-private-partnerships/pull/212) The codelist reference page has been updated to:
  * Separate out codelists from OCDS which are reused without modification and those which are modified.
  * Add codelists which were present in the profile but missing from the documentation.
  * Add links to additional codelist documentation in OCDS core and the Extension Explorer.
* [#209](https://github.com/open-contracting-extensions/public-private-partnerships/pull/209) A schema browser has been added.
* The build process for the documentation has been improved.

### Fixes

* [#204](https://github.com/open-contracting-extensions/public-private-partnerships/pull/204) The worked example JSON files have been updated:
  * Remove the `planning.budget.amount` field which is not referenced in the framework reference.
  * Remove trailing '.0' from strings comprised entirely of numeric characters.
  * Fix unresolvable organization references for shareholders.
  * Correct incorrect use of the `identifier.uri` field.

## [1.0.0.beta] - 2018-08-16

This changelog entry indicates notable changes since the initial release of OCDS for PPPs, it is not intended to be a complete list of changes.

In addition to the specific changes below:

* [#121](https://github.com/open-contracting-extensions/public-private-partnerships/pull/121) Various fixes to codelist files (unquoted line breaks, blank rows etc.)
* [#121](https://github.com/open-contracting-extensions/public-private-partnerships/pull/121) Various fixes to broken links, typos, grammar and capitalization in the documentation, schema and codelists.

### Normative changes

* [#121](https://github.com/open-contracting-extensions/public-private-partnerships/pull/121) The core extensions were upgraded to v1.1.3.
* [#133](https://github.com/open-contracting-extensions/public-private-partnerships/pull/133) Descriptions were added for the 'financeArrangements' and 'guaranteeReports' codes in the documentType codelist.

### Non-normative changes

* [#164](https://github.com/open-contracting-extensions/public-private-partnerships/pull/164) A patched release package schema is now distributed with the profile.
* [#121](https://github.com/open-contracting-extensions/public-private-partnerships/pull/121) The build process for the documentation was aligned with the common profile build process.

### Fixes

* [#121](https://github.com/open-contracting-extensions/public-private-partnerships/pull/121) `tag` `enum` updated to reflect changes to the `releaseTag` codelist from OCDS core.
* [#136](https://github.com/open-contracting-extensions/public-private-partnerships/pull/136) Set `uniqueItems` and `wholeListMerge` to `true` for `planning.project.additionalClassifications` and `planning.project.locations`.