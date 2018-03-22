# Budget and projects extension

In the core OCDS, project information is nested within the `budget` building block. However, in some cases, budget management, and project management systems are separate, and it may be important to separately specify:

* The amount reserved in the budget for a specific contracting process;

* The project the contract relates to, and the total value of that project;

This is particularly important in cases of Public Private Partnership projects, or large infrastructure projects, where users may wish to track all the contracting processes related to a large-scale project, and to understand the individual contracts in the context of their contracting process and overall project values.

This extension introduces a `project` object into the `planning` section.

In the OCDS for PPPs profile, this is further extended with sector and location classifications.

## Example

```json
{
  "planning": {
    "project": {
      "title": "Example PPP",
      "description": "The Example PPP project will guarantee the installation of a wholesale shared network that allows the provision of telecommunications services by current and future operators.",
      "id": "example_ppp",
      "uri": "http://communications.gov.example/projects/example_ppp",
      "totalValue": {
        "amount": 600000000,
        "currency": "USD"
      }
    }
  }
}
```

## Documentation

```eval_rst
.. extensiontable::
   :extension: budget_project
   :exclude_definitions:
```

## Changelog

### 2017-07-08

* Updated version to maintain conformance with OCDS 1.1, removing the properties in the extension that deleted `planning/budget/project` and `planning/budget/projectID`.

* Removing unnecessary mergeStrategy and pattern property schema elements

## Issues

Report issues for this extension in the [ocds-extensions repository](https://github.com/open-contracting/ocds-extensions/issues), putting the extension's name in the issue's title.
