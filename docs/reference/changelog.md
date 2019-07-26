# Changelog

## [1.0.0.beta2] - yyyy-mm-dd

### Normative changes

* The core extensions have been upgraded to v1.1.4: Bid statistics and details, Location, Milestone documents, Process level title and description.
* The documentType codelist has been updated:
  * 'contractSchedules' has been renamed to 'contractMilestones'.
  * The description of 'needsAssessment' has been updated to match the description from OC4IDS.
  * The description of 'environmentalImpact' has been updated to match the description from OC4IDS.

## Non-normative changes

* The documentation pages of all extensions have been moved to the new [Extension Explorer](https://extensions.open-contracting.org/).
* The codelist reference page has been updated to:
  * Separate out codelists from OCDS which are reused without modification and those which are modified.
  * Add codelists which were present in the profile but missing from the documentation.
  * Add links to additional codelist documentation in OCDS core and the Extension Explorer.
* A schema browser has been added.
* The build process for the documentation has been improved.

### Fixes

* The worked example JSON files have been updated:
  * Remove the `planning.budget.amount` field which is not referenced in the framework reference.
  * Remove trailing '.0' from strings comprised entirely of numeric characters.
  * Fix unresolvable organization references for shareholders.
  * Correct incorrect use of the `identifier.uri` field.

## [1.0.0.beta] - 2018-08-16

This changelog entry indicates notable changes since the initial release of OCDS for PPPs, it is not intended to be a complete list of changes.

In addition to the specific changes below:

* Various fixes to codelist files (unquoted line breaks, blank rows etc.)
* Various fixes to broken links, typos, grammar and capitalization in the documentation, schema and codelists.

### Normative changes

* The core extensions were upgraded to v1.1.3.
* Descriptions were added for the 'financeArrangements' and 'guaranteeReports' codes in the documentType codelist.

### Non-normative changes

* A patched release package schema is now distributed with the profile.
* The build process for the documentation was aligned with the common profile build process.

### Fixes

* `tag` `enum` updated to reflect changes to the `releaseTag` codelist from OCDS core.
* Set `uniqueItems` and `wholeListMerge` to `true` for `planning.project.additionalClassifications` and `planning.project.locations`.
