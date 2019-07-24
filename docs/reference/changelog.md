# Changelog

## [1.0.1] - yyyy-mm-dd

### Changed

* The core extensions have been upgraded to v1.1.4: Bid statistics and details, Location, Milestone documents, Process level title and description.
* The documentation pages of all extensions have been moved to the new [Extension Explorer](https://extensions.open-contracting.org/).
* A patched release package schema is now distributed with the profile.
* The build process for the documentation has been improved.
* A schema browser has been added.
* The documentType codelist has been updated:
  * 'contractSchedules' has been renamed to 'contractMilestones'.
  * the description of 'needsAsessment' has been updated to match the description from OC4IDS
  * the description of 'environmentalImpact' has been updated to march the description from OC4IDS

### Fixed

* The worked example JSON files have been updated:
  * Remove the `planning.budget.amount` field which is not referenced in the framework reference.
  * Remove trailing '.0' from strings comprised entirely of numeric characters.
  * Fix unresolvable organization references for shareholders.
  * Correct incorrect use of the `identifier.uri` field
