# Risk allocation

The [framework for disclosure in PPPs](http://pubdocs.worldbank.org/en/773541448296707678/Disclosure-in-PPPs-Framework.pdf) calls for individual risk allocation information.

The risk allocation extension is used to provide structured data on the risk allocations defined in a public private partnership's contract.

## Overview

Risk allocations can be represented using an array of `Risk` objects in the `riskAllocation` field of the `contract` section of an OCDS release.

The risk category can be represented using the `risk/category` field using values from the `riskCategory.csv` codelist based on the APMG PPP Certification Program. The codelist's Category column indicates the stage or aspect of the contracting process to which the risk category applies.

The party retaining each risk should be represented using the `risk/allocation` field using values from the `riskAllocation.csv` codelist.

The description of the risk should be provided as free text using the `risk/description` field and the mitigation for the risk should be provided as free text using the `risk/mitigation` field.

Additional free text information on the risk can be provided using the `risk/notes` field.

## Issues

Report issues for this extension in the [ocds-extensions repository](https://github.com/open-contracting/ocds-extensions/issues), putting the extension's name in the issue's title.

## Changelog

2018-05-08 - Make `risk/id` required to support revision tracking and [list merging](http://standard.open-contracting.org/latest/en/schema/merging/#lists).
