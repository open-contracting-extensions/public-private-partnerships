# Performance Failures Extension

## Background

The [Framework for disclosure in Public Private Partnerships](http://pubdocs.worldbank.org/en/773541448296707678/Disclosure-in-PPPs-Framework.pdf) requires disclosure of instances of performance failures during the the life of a contract, along with the penalties or abatements defined, imposed and paid in relation to each category of performance failures.

## Extension Fields

This extension introduces the `performanceFailures` property to the `implementation` section of an OCDS release.

The new property is an array of `PerformanceFailure` objects. The `PerformanceFailure` object has the following properties:

* `period` - an OCDS `period` object defining the reporting period to applicable to the performance failures being reported
* `category` - a free text field used to describe the category of performance failures being reported
* `events` - a number field used to state the number of performance failure events in the period and category being reported
* `penaltyContracted` - a free text field used to describe the penalty or abatement defined in the contract for the number, category and period of performance failures being reported
* `penaltyImposed` - a free text field used to describe the penalty or abatement actually imposed for the number, category and period of performance failures being reported
* `penaltyPaid` - a boolean field indicating whether the penalty imposed has been paid. A value of `true` indicates that the penalty has been paid

## Example

The following JSON snippet models the performance failures reported for a single period and category.

```json
"implementation": {
  "performanceFailures": [
    {
      "period": {
        "startDate": "2016-01-01T00:00:00Z",
        "endDate": "2016-12-31T23:59:59Z"
      },
      "category": "Daily average journey time exceeds 10 minutes",
      "events": 73,
      "penaltyContracted": "If the daily average journey time exceeds 10 minutes on more than 52 days per calendar year the project company will be subject to a penalty charge equal to (days - 52) * avgToll. Where days is the total number of days where the average journey time exceeded 10 minutes and avgToll is the average daily toll revenue to the project company over the calendar year in which the failures occurred.",
      "penaltyImposed": "A penalty of £3,360,000 was imposed",
      "penaltyPaid": true
    }
  ]
}
```

## Usage Notes

## To do

* Add a `relatedTransactions` reference to the performance failure object?

## Issues

Report issues for this extension in the [ocds-extensions repository](https://github.com/open-contracting/ocds-extensions/issues), putting the extension's name in the issue's title.

## Changelog

2018-05-08 - Make `performanceFailure/id` required to support revision tracking and [list merging](http://standard.open-contracting.org/latest/en/schema/merging/#lists).
