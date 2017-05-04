# Risk allocation

The [framework for disclosure in PPPs](http://pubdocs.worldbank.org/en/773541448296707678/Disclosure-in-PPPs-Framework.pdf) calls for individual risk allocation information.

The risk allocation extension is used to provide structured data on the risk allocations defined in a public private partnerships contract.

## Overview

Risk allocations can be represented using an array of [risk blocks](../../../schema/reference/#organization) in the ```riskAllocation``` field of the ```contract``` section of an OCDS release.

The risk category can be represented using the ```risk/category``` field using values from the [risk category codelist](../schema/codelists/#risk-category) based on the APMG PPP Certification Program.

The party retaining each risk should be represented using the ```risk/allocation``` field using values from the [risk allocation codelist](../schema/codelists/#risk-allocation).

The description of the risk should be provided as free text using the ```risk/description``` field and the mitigation for the risk should be provided as free text using the ```risk/mitigation``` field.

Additional free text information on the risk can be provided using the ```risk/notes``` field.