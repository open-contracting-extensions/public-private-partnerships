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

The extension introduces the following fields:

```eval_rst
.. extensiontable::
   :extension: budget_project
   :exclude_definitions:
```

## Guidance

Users of this extension should follow the additional guidance below on the usage of fields which are also part of the core OCDS schema. The field's description from the core OCDS schema v1.1.3 is included for convenience; please refer to the [standard's documentation](http://standard.open-contracting.org) for more recent descriptions.

```eval_rst
.. list-table::
    :header-rows: 1

    * - Field
      - OCDS schema description
      - Extension guidance
    * - ``planning/budget/id``
      - An identifier for the budget line item which provides funds for this contracting process. This identifier should be possible to cross-reference against the provided data source.
      - "provided data source" refers to formal budget documents.
    * - ``planning/budget/description``
      - A short free text description of the budget source. May be used to provide the title of the budget line, or the programme used to fund this project.
      - This field may also be used to provide information about the nature of the budget allocation, e.g. conditional, confirmed, or any official authorizations given to the allocation.
    * - ``planning/budget/amount``
      - The value reserved in the budget for this contracting process. A negative value indicates anticipated income to the budget as a result of this contracting process, rather than expenditure. Where the budget is drawn from multiple sources, the budget breakdown extension can be used.
      - Or, the value estimated for, or allocated to, this contracting process in a budget. This field should not be used to report the total value of the budget line funding this contracting process. The budget breakdown extension can be used for both multi-source and multi-year budgets.
    * - ``planning/budget/project``
      - The name of the project that through which this contracting process is funded (if applicable). Some organizations maintain a registry of projects, and the data should use the name by which the project is known in that registry. No translation option is offered for this string, as translated values can be provided in third-party data, linked from the data source above.
      - Detailed information about the project which funds this contracting process should be provided in the ``planning/project`` object.
    * - ``planning/budget/projectID``
      - An external identifier for the project that this contracting process forms part of, or is funded via (if applicable). Some organizations maintain a registry of projects, and the data should use the identifier from the relevant registry of projects.
      - This field is required for legacy compatibility with OCDS core.
    * - ``planning/budget/uri``
      - A URI pointing directly to a machine-readable record about the budget line-item or line-items that fund this contracting process. Information may be provided in a range of formats, including using IATI, the Open Fiscal Data Standard or any other standard which provides structured data on budget sources. Human readable documents can be included using the planning.documents block.
      - Where possible, this URI should return machine *and* human-readable representations of budget data.
```

## Changelog

### 2018-05-03

* Add guidance section based on schema descriptions moved in previous update

### 2017-12-29

* Remove repeated descriptions for fields in OCDS core from extension schema

### 2017-07-08

* Updated version to maintain conformance with OCDS 1.1, removing the properties in the extension that deleted `planning/budget/project` and `planning/budget/projectID`.

* Removing unnecessary mergeStrategy and pattern property schema elements

## Issues

Report issues for this extension in the [ocds-extensions repository](https://github.com/open-contracting/ocds-extensions/issues), putting the extension's name in the issue's title.
