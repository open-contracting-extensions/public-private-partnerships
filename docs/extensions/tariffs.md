# Tariffs

## Introduction

Some contracts, particularly Public Private Partnership contracts, include agreements about the user fees to be charged for use of the infrastructure or services the contract relates to.

For example, a Public Private Partnership project to build a bridge may set out the tolls for cars and other vehicles cross the bridge.

The tariff extension allows a structured list of these charges to be set out.

It also includes an additional codelist entries for the documentType codelist for:

* tariffs
* tariffMethod
* tariffReview
* tariffIllustration

## Tariff modelling

The tariff model builds upon the metrics extension, allowing an array of tariff items, each with an identifier, title, period, value, units and an arbitrary set of dimensions.

For example, if the toll for a road bridge varies based on (a) the type of vehicle; and (b) the time of day; an implementation of the tariff extension may create new fields for `dimension/vehicleType` and `dimension/timeOfDay`, populating these according to local codelists. In PPP cases, these additional dimensions may mirror those used in the estimated demand and other metrics sections.

### Worked example

The example below shows a very simply tariff table, without periods or units, but with two dimensions. Tariffs which relate to a particular set of dates could have a `period` block. Those which relate to a particular unit (e.g. tonnes) could have this indicated using a `unit` block.

```json
"tariffs": [
          {
            "id": "1.0",
            "title": "Standard Toll",
            "dimensions": {
              "vehicleType": "Class 1",
              "registration": "No registration"
            },
            "value": {
              "amount": "0.0",
              "currency": "GBP"
            }
          },
          {
            "id": "2.0",
            "title": "Standard Toll",
            "dimensions": {
              "vehicleType": "Class 2",
              "registration": "No registration"
            },
            "value": {
              "amount": "2.0",
              "currency": "GBP"
            }
          },
          {
            "id": "3.0",
            "title": "Standard Toll",
            "dimensions": {
              "vehicleType": "Class 3",
              "registration": "No registration"
            },
            "value": {
              "amount": "6.0",
              "currency": "GBP"
            }
          },
          {
            "id": "4.0",
            "title": "Standard Toll",
            "dimensions": {
              "vehicleType": "Class 4",
              "registration": "No registration"
            },
            "value": {
              "amount": "8.0",
              "currency": "GBP"
            }
          }
      ]
```

## Codelist entries

The following document types are introduced by the tariff extension

* tariffs - For providing tariff and pricing schedules.
* tariffMethod - For summarizing the method by which tariffs are set, and linking to detailed documentation of the methods for setting tariffs. This may include written documentation, and spreadsheets providing the models used to calculate tariffs.
* tariffReview - For summarizing the arrangements for the review and regulation of tariffs, and linking to detailed documentation that covers how tariffs are regulated. This is important to explain to users why they are paying what they are paying, and the scope for changes to payment structures.
* tariffIllustration - For linking to graphs and reports on the change over time in tariff prices. Use the relevant image media type when linking to PNG, JPEG or GIF graphs to allow applications to directly display this content.

## Issues

Report issues for this extension in the [ocds-extensions repository](https://github.com/open-contracting/ocds-extensions/issues), putting the extension's name in the issue's title.

## Changelog

2018-05-08 - Make `tariff/id` required to support revision tracking and [list merging](http://standard.open-contracting.org/latest/en/schema/merging/#lists).
