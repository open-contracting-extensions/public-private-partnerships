# Metrics Extension

The metrics extension provides a common building block for reporting structured performance information on contracts.

Metrics are structured like an [OLAP data cube](https://en.wikipedia.org/wiki/OLAP_cube) with each instance of `Metric` representing a single **observation**, categorized by a number of **dimensions**.

The metrics extension can be used at:

* The `planning` stage for forecasts for the contracting process (e.g. forecast demand levels)
* The `tender` stage for targets for the contracting process (e.g. target availability levels or KPIs)
* The `award` and `contract` stages for targets agreed with the successful supplier (e.g. availability levels or KPIs)
* The `implementation` stage for actual performance information (e.g. actual demand, availability, KPIs etc.)

Where the metrics extension is used to model targets for a contracting process, the `description` field can be used to start whether the target is a minimum or recommended target.

## Example - Forecasts

```json
{
  "forecasts":[
    {
      "id":"annualDemand",
      "title":"Annual Demand",
      "description":"The annual demand",
      "observations":[
        {
          "period":{
            "startDate":"2015-01-01T00:00:00Z",
            "endDate":"2015-12-31T23:59:59Z"
          },
          "quantity":"10000",
          "dimensions":{
            "vehicleType":"Car"
          }
        },
        {
          "period":{
            "startDate":"2015-01-01T00:00:00Z",
            "endDate":"2015-12-31T23:59:59Z"
          },
          "quantity":"1000",
          "dimensions":{
            "vehicleType":"Trucks"
          },
          "note":"Simple note"
        }
      ]
    }
  ]
}
```

## Example - Physical progress

The metrics extension can also be used to report on the physical progress of a contract. The following JSON snippet shows how the metrics extension could be used to report on progress for the construction of a highway, both by percent completion and number of kilometres constructed:

```json
{
  "implementation": {
    "metrics": [
      {
        "id": "completionPercent",
        "title": "Construction progress (percent)",
        "description": "Percent completion of the construction of example highway",
        "observations": [
          {
            "id": "completionPercent-2016-Q1",
            "period": {
              "startDate": "2016-03-31T23:59:59Z",
              "endDate": "2016-03-31T23:59:59Z"
            },
            "measure": "25",
            "unit": {
              "name": "percent",
              "id": "P1",
              "scheme": "UNCEFACT"
            }
          }
        ]
      },
      {
        "id": "completionKilometres",
        "title": "Construction progress (kilometres)",
        "description": "Progress of construction of example highway measured in kilometres",
        "observations": [
          {
            "id": "completionKilometres-2016-Q1",
            "period": {
              "startDate": "2016-03-31T23:59:59Z",
              "endDate": "2016-03-31T23:59:59Z"
            },
            "measure": "15",
            "unit": {
              "name": "kilometre",
              "id": "KMT",
              "scheme": "UNCEFACT"
            }
          }
        ]
      }
    ]
  }
}
```

## Use with requirements

Metrics can be used along with the **requirements extension** which will add a 'relatedRequirementID' property to metrics.

With the requirements extension, bids, awards and contracts can include a `RequirementResponse` indicating the values against each metric that a supplier intends to meet.

This can allow a degree of comparison between performance anticipated at bid, award, contract and implementation phases.

## To Do

* [ ] Check oneOf schema syntax for value **or** quantity
* [ ] Add relatedRequirementID to requirements extension
* [ ] Validate schema updates

## Issues

Report issues for this extension in the [ocds-extensions repository](https://github.com/open-contracting/ocds-extensions/issues), putting the extension's name in the issue's title.
