# Transactions - relatedMilestone Extension

## Background

In core OCDS `transactions` are a property of the `implementation` object.

Some contracts link payments against a contract to specific milestones for the delivery of the contract.

## Extension fields

This extension adds a `relatedImplementationMilestone` property to the `transaction` object.

The `relatedImplementationMilestone` property is a `MilestoneReference` object.

The `MilestoneReference` object is introduced by the [metrics extension](https://github.com/open-contracting/ocds_metrics_extension).

## Example

```json
"implementation": {
  "milestones": [
    {
      "id": "1234",
      "title": "Example milestone",
      "dueDate": "2017-01-01T17:00:00Z",
      "dateMet": "2016-12-28T17:00:00Z",
      "status": "met",
      "dateModified": "2016-12-28T17:00:00Z"
    }
  ],
  "transactions": [
    {
      "id": "ABC-123",
      "source": "http://www.example.com/budget/FY17",
      "date": "2017-01-05T13:00:00Z",
      "value": {
        "amount": 150000,
        "currency": "GBP"
      },
      "payer": {
        "id": "GB-GOV-00000000",
        "name": "Example ministry"
      },
      "payee": {
        "id": "GB-COH-99999999",
        "name": "Example consortium"
      },
      "relatedImplementationMilestone": {
        "id": "1234",
        "title": "Example milestone"
      }
    }
  ]
}
```

## Issues

Report issues for this extension in the [ocds-extensions repository](https://github.com/open-contracting/ocds-extensions/issues), putting the extension's name in the issue's title.
