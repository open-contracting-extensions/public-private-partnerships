<style><!--
.wy-table-responsive table td {
    white-space: normal !important;
}
--></style>

Framework Reference
===================



## I. Basic Project Information 

### I.1. Name, location and sector 

Project name, location and sector

Disclosure timing:

<div style="float:right">

```eval_rst 
==  ==  ==  ==  ==  ==
PP  P   A   CC  I   R
==  ==  ==  ==  ==  ==
>>  >   >   >   >   >
==  ==  ==  ==  ==  ==
```

</div>

#### I.1.1. Project name and description 

These titles and descriptions can be used by applications in summary lists, so should be kept concise and jargon free.

We recommend keeping descriptions to one paragraph or less. 

**Schema** 

The information can be provided within the following sections.

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: title,description
    :collapse: 
```

**JSON Example**

```eval_rst
.. jsoninclude:: examples/full.json
  :jsonpointer: /releases/0/planning/project
```

**Tabular example**

```eval_rst
.. jsoninclude-flat:: examples/full.json
  :jsonpointer: /releases/0/planning/project
```



"
#### I.1.2. Project sector 

 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/project/sector
    :collapse: 

```

Projects should be classified using the UN Classification of the Functions of Government Scheme (COFOG).

This can be cross-walked to most other PPP clasification schemes in use, and so provides a common framework for understanding the sectoral focus of investments.#### I.1.2. Project sector 

 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/project/additionalClassification
    :collapse: 

```

Additional classificaiton schemes can also be provided, such as project classification against the Sustainable Development Goals (SDGs), or against national frameworks.#### I.1.3. Project location 

The locations where a project is taking place can be specified using:

* **A gazeteer entry**. For example, the GeoNames code of the administrative division where activity is taking place.
* **A GeoJSON object**. Describing the boundary, or extent, of where activity will take place.

There are a range of tools available to generate GeoJSON data, such as http://geojson.io/ 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/project/locations
    :collapse: 

```

### I.2. Sponsoring agency/department 

The sponsoring agency or department’s details should be included in the parties section, with the ```parties/0/role``` field array including the value '```sponsor```'. 


### I.2. Sponsoring agency/department 

The sponsoring agency or department’s details should be included in the parties section, with the ```parties/0/role``` field array including the value '```sponsor```'. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: parties/0/additionalIdentifiers,parties/0/shareholders,parties/0/beneficialOwners,parties/0/shareholders

```


### I.3. Project value 

The value of a project can be specified at a number of points in time. ### I.3. Project value 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     R         R       R                  R           
====  ========  ======  ======  ==========  ============

```

 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/project/totalValue
    :collapse: 

```

### I.3. Project value 

 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/value
    :collapse: 

```

### I.3. Project value 

 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: award/value
    :collapse: 

```

### I.3. Project value 

 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/value
    :collapse: 

```

### I.4. Project economic and social benefits 

Project need: benefits provided, economic and social (including specific information on the public interest aspect)

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P                                                  
====  ========  ======  ======  ==========  ============

```

Information on the project need, benefits provided, and economic and social impact should be provided through:

* A short summary text
* A link to one or more documents that provide additional information

These documents should be tagged with a ```documentType``` value of 'needsAssessment' in the ```planning/documents``` array.  

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/documents
    :collapse: 

```

### I.5. Project technical description 

Technical description of the physical infrastructure

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P                                                  
====  ========  ======  ======  ==========  ============

```

A technical description of the physical infrastructure should be provided through:

* A short summary text
* A link to one or more documents that provide additional information

These documents should be tagged with a ```documentType``` value of 'technicalSpecifications' in the ```tender/documents``` array.  

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/documents
    :collapse: 

```

### I.6. Project high level description 

High-level description of the services

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P                                                  
====  ========  ======  ======  ==========  ============

```

A high-level description of the services should be provided through:

* A short summary text
* A link to one or more documents that provide additional information

These documents should be tagged with a ```documentType``` value of 'serviceDescription' in the ```tender/documents``` array.  

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/documents
    :collapse: 

```

### I.7. Estimated project demand 

Estimated demand to be served annually#### I.7.1. Structured information on estimated demand 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P                                                  
====  ========  ======  ======  ==========  ============

```

Structured data about estimated demand should be provided in the ```planning/forecast``` section of an OCDS release, using an array of metrics building blocks.

A metric with the ```id``` 'demand' should be given, with a series of forecast ```observations``` that capture the estimated demand for a given period.

These estimates can be disaggregated by any number of dimensions contained as simple fields within the ```observation/dimensions``` object. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/forecasts
    :collapse: 

```

#### I.7.2. Estimated demand documentation 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P                                                  
====  ========  ======  ======  ==========  ============

```

Non-structured data relating to estimated demand can be provided through:

* A short summary text
* A link to one or more documents that provide additional information

These documents should be tagged with a ```documentType``` value of 'estimatedDemand' in the ```planning/documents``` array. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/documents
    :collapse: 

```

### I.8. Project additionality 

Project additionality

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P                                                  
====  ========  ======  ======  ==========  ============

```

Information on the project additionality should be provided through planning documents containing:

* A short summary text
* A link to one or more documents that provide additional information

Descriptions should be provided for both:

* The additionality of the project;
* The additionality of the finance method used;

These documents should be tagged with a ```documentType``` value of 'projectAdditionality' or 'financeAdditionality' in the ```planning/documents``` array.  

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/documents
    :collapse: 

```

### I.9. Reasons for selection of PPP mode (general) 

Reason for selection of PPP mode and type in brief

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P                                                  
====  ========  ======  ======  ==========  ============

```

A short summary of the reason for the PPP selection mode should be provided through:

* A short summary text
* A link to one or more documents that provide additional information

These documents should be tagged with a ```documentType``` value of 'pppModeRationale' in the ```planning/documents``` array.  

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/documents
    :collapse: 

```

### I.10. Project approval dates 

Dates of various approvals

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P                                                  
====  ========  ======  ======  ==========  ============

```

This information can be provided using the [milestones extension](../../extensions/milestones/).

Each approval during the planning stage should be included in the ```planning/milestones``` array with a ```type``` of 'approval', the date the approval is scheduled for (```dueDate```), the status of the approval (```scheduled``` or ```met```) and the date the approval was given (```dateMet```).

Documentation associated with the approval can be given in the associated milestones documents block. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: planning/milestones
    :collapse: 

```

### I.11. Contract milestones - Date of commercial close 

Contract Milestones (Estimated and Actual) - Date of commercial close

> In a financing, the point at which the commercial documentation has been executed but before conditions precedent have been satisfied or waived; before financial close. ([Source](https://pppknowledgelab.org/glossary#Commercial_Close))

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U                             
====  ========  ======  ======  ==========  ============

```

This information can be provided using the [milestones extension](../../extensions/milestones/).

To indicate the date of commercial close, a milestone should be added to the ```contract/milestones``` (the contract may have a ```status``` of 'pending' up until it is signed). 

The milestone should have a ```type``` of 'financing', a ```code``` of 'commercialClose' and a status of either ```scheduled``` or ```met``` with either the date that this milestone was achieved in ```dateMet```, or the scheduled date in ```dueDate```.

Additional documentation, or links to documentation, can be provided using the documents block for the milestone. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/milestones
    :collapse: 

```

### I.12. Contract milestones - Date of financial close 

Contract Milestones (Estimated and Actual) - Date of financial close

> In a financing, the point at which the documentation has been executed and conditions precedent have been satisfied or waived. Drawdowns become permissible after this point. ([Source](https://pppknowledgelab.org/glossary#Financial_Close))

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U                             
====  ========  ======  ======  ==========  ============

```

This information can be provided using the [milestones extension](../../extensions/milestones/).

To indicate the date of commercial close, a milestone should be added to the ```contract/milestones``` (the contract may have a ```status``` of 'pending' up until it is signed). 

The milestone should have a ```type``` of 'financing', a ```code``` of 'financialClose' and a status of either ```scheduled``` or ```met``` with either the date that this milestone was achieved in ```dateMet```, or the scheduled date in ```dueDate```.

Additional documentation, or links to documentation, can be provided using the documents block for the milestone. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/milestones
    :collapse: 

```

### I.13. Contract milestones - Date of commencement of construction or development 

Contract Milestones (Estimated and Actual) - Date of commencement of construction or development

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U                      
====  ========  ======  ======  ==========  ============

```

This information can be provided using the [milestones extension](../../extensions/milestones/).

To indicate the date that construction starts, a milestone should be added to the ```contract/implementation/milestones```.

The milestone should have a ```type``` of 'delivery', a ```code``` of 'developmentStarted' or 'constructionStarted' and a status of either ```scheduled``` or ```met``` with either the date that this milestone was achieved in ```dateMet```, or the scheduled date in ```dueDate```.

Additional documentation, or links to documentation, can be provided using the documents block for the milestone. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/milestones
    :collapse: 

```

### I.14. Contract milestones - Date of completion of construction or development 

Contract Milestones (Estimated and Actual) - Date of completion of construction or development

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U                      
====  ========  ======  ======  ==========  ============

```

This information can be provided using the [milestones extension](../../extensions/milestones/).

To indicate the date that construction or development is completed, a milestone should be added to the ```contract/implementation/milestones```.

The milestone should have a ```type``` of 'delivery', a ```code``` of 'developmentComplete' or 'constructionComplete' and a status of either ```scheduled``` or ```met``` with either the date that this milestone was achieved in ```dateMet```, or the scheduled date in ```dueDate```.

Additional documentation, or links to documentation, can be provided using the documents block for the milestone. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/milestones
    :collapse: 

```

### I.15. Contract milestones - Date of commissioning 

Contract Milestones (Estimated and Actual) - Date of commissioning

> The testing and inspection of the completed works to verify that the works are ready for commercial operation. ([Source](https://pppknowledgelab.org/glossary#Commissioning))

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U                      
====  ========  ======  ======  ==========  ============

```

This information can be provided using the [milestones extension](../../extensions/milestones/).

To indicate the date of commissioning, a milestone should be added to the ```contract/implementation/milestones```.

The milestone should have a ```type``` of 'delivery', a ```code``` of 'commissioning' and a status of either ```scheduled``` or ```met``` with either the date that this milestone was achieved in ```dateMet```, or the scheduled date in ```dueDate```.

Additional documentation, or links to documentation, can be provided using the documents block for the milestone. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/milestones
    :collapse: 

```

### I.16. Contract milestones - Date of contract expiry 

Contract Milestones (Estimated and Actual) - Date of contract expiry

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U           U           
====  ========  ======  ======  ==========  ============

```

This information can be provided using ```contractPeriod``` field in the ```tender``` section of an OCDS release. OCDS provides a [period building block](../schema/reference/#period) for disclosure of information on time periods.

This expected date of contract expiry can be entered into the ```contractPeriod/endDate``` field. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/contractPeriod/endDate
    :collapse: 

```

### I.17. Contract documents 

Links to all contract documents

Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U           U           
====  ========  ======  ======  ==========  ============

```

Links to contract documents can be provided using the ```documents``` field in the ```contract``` section of an OCDS release (the contract may have a ```status``` of 'pending' up until it is signed). OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents which has [a number of available extensions for PPP use cases](../../extensions/documentation_details/)

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

### I.18. Contract parties - public authority 

Public authority: name of authority, name of representative, address, telephone, fax, e-mail

> The unit/body/department within a government that is tendering and contracting the project. The public counterpart in the PPP contract. ([Source](https://ppp-certification.com/ppp-certification-guide/glossary))#### I.18.1. Organization details 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U           U           
====  ========  ======  ======  ==========  ============

```

Details of the public authority, including name and contact details, should be provided in the ```parties``` section of an OCDS release. OCDS provides an [organization building block](../schema/reference/#organization) for disclosure of information about organizations and their roles.

The ```organization/roles``` field should be set to ```publicAuthority``` and the ```organization/contactPoint``` field can be used to provide details of a named representative. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: parties/additionalIdentifiers,parties/shareholders,parties/beneficialOwnership

```

#### I.18.2. Organization reference 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U           U           
====  ========  ======  ======  ==========  ============

```

The ```publicAuthority``` section of an OCDS release should be used to reference the entry for the public authority in the ```parties``` section. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: publicAuthority
    :collapse: 

```

#### I.18.3. Other signatories 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U           U           
====  ========  ======  ======  ==========  ============

```

The ```contracts``` section of an OCDS release should be used to reference the entries in the ```parties``` section for any other public entites which are signatories to the contract. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/signatories
    :collapse: 

```

### I.19. Contract parties - private party 

Private party: name of company or consortium, name of representative, address, telephone, fax, e-mail

> The counter party of the procuring authority in the PPP contract. A private entity which has been granted the contract to construct and operate a government asset, and which is usually created under the form of a Special Purpose Vehicle or SPV. ([Source](https://ppp-certification.com/ppp-certification-guide/glossary))
#### I.19.1. Organization details 

Details of the private party, including name and contact details, should be provided in the ```parties``` section of an OCDS release. OCDS provides an [organization building block](../schema/reference/#organization) for disclosure of information about organizations and their roles.

The ```organization/roles``` field should be set to ```privateParty``` and the ```organization/contactPoint``` field can be used to provide details of a named representative. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: parties/additionalIdentifiers

```

#### I.19.2. Organization reference 

The ```awards``` section of an OCDS release should be used to reference the entry for the private party in the ```parties``` section. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: award/preferredBidders
    :collapse: 

```

### I.20. Contract parties - financiers 

Financiers: name of Lead FI, other FIs, name of representative of lead FI, address, telephone, fax, e-mail#### I.20.1. Organization details 

Details of the financiers, including name and contact details, should be provided in the ```parties``` section of an OCDS release. OCDS provides an [organization building block](../schema/reference/#organization) for disclosure of information about organizations and their roles.

The ```organization/roles``` field should be set to ```leadBank``` or ```lender``` as appropriate and the ```organization/contactPoint``` field can be used to provide details of a named representative. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: parties/additionalIdentifiers,parties/shareholders,parties/beneficialOwnership

```

#### I.20.2. Organization reference 

The ```contracts``` section of an OCDS release should be used to reference the entries in the ```parties``` section for any financiers which are signatories to the contract. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/signatories
    :collapse: 

```

## II. Procurement Information 

### II.1. Timeline, final feasibility study, independent auditor's report 

Dates and summary details, links to all procurement documents, final feasibility study, including land acquisition, social, environmental, and rehabilitation related information, reports of independent procurement auditors (if any)#### II.1.1. Dates - Tender period 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U                                             
====  ========  ======  ======  ==========  ============

```

The ```tender/tenderPeriod``` field should be used to provide the period during which the tender is open for submissions, ```tenderPeriod.endDate``` should contain the closing date for tender submissions. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/tenderPeriod
    :collapse: 

```

#### II.1.2. Dates - Enquiry period 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U                                             
====  ========  ======  ======  ==========  ============

```

The ```tender/enquiryPeriod```field should be used to provide the period during which enquiries may be made and answered. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/enquiryPeriod
    :collapse: 

```

Some PPP procurement processes have more than one enquiry period during the tender stage of the procurement. In such cases:

* The ```tender/enquiryPeriod``` field should be used to provide the **next** period during which enquiries may be made and answered, if there are no further enquiry periods scheduled the field should be used to provide the **most recent** period during which enquiries may be made and answered. Where an OCDS release is published during an enquiry period the ```tender/enquiryPeriod``` field should be used to provide the start and end dates of the **current** enquiry period.
* The ```tender/milestones``` block should be used to provide details of any subsequent enquiry periods beyond the next period during which enquiries may be made and answered.

The above guidance should also be followed for processes with multiple enquiry periods during the pre-qualification stage of the procurement, in such cases the same approach should be applied to the equivalent fields from the ```prequalification``` section of an OCDS release.#### II.1.3. Dates - Award period 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U                                             
====  ========  ======  ======  ==========  ============

```

The ```tender/awardPeriod``` field should be used to provide the period during which an award is expected to be made. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/awardPeriod
    :collapse: 

```

#### II.1.4. Dates - Contract period 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U         U       U       U           U           
====  ========  ======  ======  ==========  ============

```

The ```tender/contractPeriod``` field should be used to provide the expected start and end dates for the contract. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/contractPeriod
    :collapse: 

```

#### II.1.5. Summary details - Procurement method 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U                                             
====  ========  ======  ======  ==========  ============

```

Information on the procurement method used should be provided using the following fields in the ```tender``` section of an OCDS release: 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/procurementMethod,tender/procurementMethodDetails,tender/procurementMethodRationale
    :collapse: 

```

#### II.1.6. Summary details - Submission method 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U                                             
====  ========  ======  ======  ==========  ============

```

Information on the submission method for bids should be provided using the following fields in the ```tender``` section of an OCDS release: 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/submissionMethod,tender/submissionMethodDetails
    :collapse: 

```

#### II.1.7. Summary details - Eligibility criteria 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U                                             
====  ========  ======  ======  ==========  ============

```

Information on the eligibility criteria for bidders can be provided using the ```eligibilityCriteria``` field in the ```tender``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/eligibilityCriteria
    :collapse: 

```

#### II.1.8. Documents 



Disclosure timing:

```eval_rst 
====  ========  ======  ======  ==========  ============
Pre   Procure   Award   Close   Implement   Renegotiate 
====  ========  ======  ======  ==========  ============
P     U                                             
====  ========  ======  ======  ==========  ============

```

Links to procurement documents, feasibility studies, including land acquisition, social, environmental, and rehabilitation related information and reports of independent procurement auditors should be provided using the [document building block](../schema/reference/#document) in the ```tender/documents``` array. A short summary text for each document can also be provided using the ```document/description``` field.

Each document should be tagged with an appropriate ```documentType``` value from the [document type codelist](../schema/codelists/#document-type). 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/documents
    :collapse: 

```

### II.2. RFQ documents 

RFQ documents

> The set of documents issued by the procuring authority that constitute the basis of the qualification and potentially the pre-selection of candidates (the short list). Qualified (or short-listed candidates) will then be invited to submit a proposal (or to enter into a new phase prior to bid submission, such as a dialogue phase or interactive phase). ([Source](https://ppp-certification.com/ppp-certification-guide/glossary))Links to RFQ documents can be provided using the ```documents``` field in the ```prequalification``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: preQualification/documents
    :collapse: 

```

### II.3. List of pre-qualified suppliers 

Pre-qualification or shortlistOCDS provides an [organization building block](../schema/reference/#organization) which can be used for disclosure of information about bidders and their roles:

* Information about the bidders which have been shortlisted or invited to submit a proposal following the pre-qualification process should be provided using an entry in the ```parties``` section of an OCDS release with the ```organization/role``` field set to ```qualifiedBidder```.

* Information about the bidders which were not shortlisted or invited to submit a proposal follow the pre-qualification process can be provided using an entry in the ```parties``` section of an OCDS release with the ```organization/role``` field set to ```disqualifiedBidder```. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: 

```

### II.4. RFP documents 

RFP documents

> The set of documents issued by the procuring authority that set out:
>
> * The basis or requirements for submitting the proposal (which documents and in which format and contents the bidder has to submit)
> * The basis of the evaluation criteria  for selecting the preferred bidder or awardee
> * The PPP contract that will be signed with the successful bidder and other annexed information such as forms, templates, complementary information for reference purposes, and so on.
< ([Source](https://ppp-certification.com/ppp-certification-guide/glossary))Links to RFP documents can be provided using the ```documents``` field in the ```tender``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/documents
    :collapse: 

```

### II.5. Evaluation criteria 

Evaluation criteria: brief description with weightage#### II.5.1. Structured evaluation criteria 

Structured information on evaluation criteria can be provided using the ```criteria``` field in the ```tender``` section of an OCDS release. OCDS provides a [criteria, requirements, responses model](../schema/reference/#requirements) for disclosure of structured information on evaluation criteria and bidder responses.  

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/criteria
    :collapse: 

```

#### II.5.2. Evaluation criteria documentation 

This information can be provided in a document, or documents, using the ```documents``` field in the ```tender``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

The ```document/documentType``` field should be set to ```evaluationCriteria``` (from the [document type codelist](../schema/codelists/#document-type)) to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/documents
    :collapse: 

```

### II.6. Evaluation committee information 

Brief information on constitution of the evaluation committeesThis information can be provided in a document, or documents, using the ```documents``` field in the ```tender``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/documents
    :collapse: 

```

### II.7. Negotiation parameters 

Negotiation parameters: brief description of the parameters for negotiation with preferred proponentThis information can be provided in a document, or documents, using the ```documents``` field in the ```tender``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) of ```negotiationParameters``` should be entered into the ```document/documentType``` field to identify the type of document being disclosed.
 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/documents
    :collapse: 

```

### II.8. Pre-bid meeting minutes 

Minutes of pre-bid meetingsThis information can be provided in a document, or documents, using the ```documents``` field in the ```tender``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) of ```minutes``` should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: tender/documents
    :collapse: 

```

### II.9. Contract award 

#### II.9.1. Organization details 

Details of the preferred bidder, including name and contact details, should be provided in the ```parties``` section of an OCDS release. OCDS provides an [organization building block](../schema/reference/#organization) for disclosure of information about organizations and their roles.

The ```organization/roles``` field should be set to ```preferredBidder``` and the ```organization/contactPoint``` field can be used to provide details of a named representative. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: parties/additionalIdentifiers

```

#### II.9.2. Organization reference 

The ```award``` section of an OCDS release should be used to reference the entry for the preferred bidder in the ```parties``` section. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: award/preferredBidders
    :collapse: 

```

## III. Risk 

### III.1. Individual risk allocation information 

Listing of risks with information on who bears the risk. Countries, sectors, and individual projects may use different categorizations. Several risks can be further broken down into components or listed together. If within a large category of risk subcategories are allocated to different parties, it makes sense to show the subcategories clearly.

> The allocation of the consequences of each risk to one of the parties in the contract, or agreeing to deal with the risk through a specified mechanism which may involve sharing the risk. ([Source](https://ppp-certification.com/ppp-certification-guide/glossary))#### III.1.1. Structured risk allocation information 

Structured information on the risk allocation should be provided using the ```contract/riskAllocation``` section of an OCDS release.

The following information should be provided for each risk:

* Risk category
* Description
* Allocation

Additional free text information on each risk allocation, for example the rationale for the allocation, can also be provided.
 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/riskAllocation
    :collapse: 

```

#### III.1.2. Additional financial modelling for risks 

Additional financial modelling for risks can also be linked to or provided in a document. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

## IV. Evaluation of PPP option 

### IV.1. Evaluation report 

Link to evaluation report (value for money or other)This information can be provided in a document, or documents, using the ```documents``` field in the ```award``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) of ```evaluationReports``` should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: award/documents
    :collapse: 

```

### IV.2. Summary data 

#### IV.2.1. Rationale for project as PPP (specific) 

State the rationale for doing the project as a PPP, including any qualitative or quantitative value-for-money or other analysis that might have been used. If nonfinancial benefits have been quantified or considered, these could be stated

*Note: Choice of methodology affects the costs to the public and it is important to assure them that the PPP mode selected is the best possible in terms of cost, given equal standards of service in all modes tested.*This information can be provided in a document, or documents, using the ```documents``` field in the ```award``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: award/documents
    :collapse: 

```

##### IV.2.2.1. Discount rate and risk premium - structured data. 

The discount rates used should be specified in the diclosure along with the risk premium used, if any, and an explanation for the rate of risk premium used, referring to guidance, if any available in this regard or describing project-specific circumstances that justify the risk premium rate used.Structured information and supporting details about the discount rate and risk premium used by government to evaluate the PPP should be provided in the ```award/evaluationIndicators``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/evaluationIndicators
    :collapse: 

```

##### IV.2.2.2. Discount rate and risk premium - supporting documentation 

Supporting documentation about the discount rate and risk premium used by government to evaluate the PPP can be provided in a document, or documents, using the ```documents``` field in the ```award``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: award/documents
    :collapse: 

```

#### IV.2.3. Risk comparison 

Risk comparison of other financing mechanisms should be specified.This information can be provided in a document, or documents, using the ```documents``` field in the ```award``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: award/documents
    :collapse: 

```

## V. Financial Information 

### V.1. Debt-equity ratio 

Debt-equity ratioStructured information and supporting details about the debt-equity ratio for the PPP should be provided in the ```contract/financeSummary``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/financeSummary
    :collapse: 

```

### V.2. Share capital 

Share capitalStructured information and supporting details about the share capital of the PPP should be provided in the ```contract/financeSummary``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/financeSummary
    :collapse: 

```

### V.3. Shareholders with proportion held and voting rights 

Shareholders with proportion held and voting rights#### V.3.1. Shareholder organization details 

Details of the shareholders should be provided in the ```parties``` section of an OCDS release. OCDS provides an [organization building block](../schema/reference/#organization) for disclosure of information about organizations and their roles.

The ```organization/roles``` field should be set to ```shareholder```. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: parties/additionalIdentifiers,parties/shareholders

```

#### V.3.1. Proportion held and voting rights 

Structured information about each shareholder on the proportion of shares held and voting rights should be provided in the entry in the ```parties/shareholders``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties/shareholders
    :collapse: 

```

### V.4. Equity transfer caps 

Equity transfer caps

*Note: Certain contracts provide for caps on equity transfer in different stages of the contract, especially during the construction stage and for a few years thereafter. Give details of any such provisions.*#### V.4.1. Documentation of equity transfer caps 

This information can be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

#### V.4.2. Individual shareholder lock in arrangements 

Information on equity transfer caps or lock in arrangements applicable to a particular shareholder can be provided in the ```parties/shareholders/notes``` field. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties/shareholders/notes
    :collapse: 

```

### V.5. Lender and investor information 

Commercial lenders, institutional investors, bilateral or multilateral lenders, public issue of bonds, supplier credit, other#### V.5.1. Organization information 

Details of lenders and investors should be provided in the ```parties``` section of an OCDS release. OCDS provides an [organization building block](../schema/reference/#organization) for disclosure of information about organizations and their roles.

The ```organization/roles``` field should be set to ```lender``` or ```equityInvestor``` as appropriate. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: 

```

#### V.5.2. Financing information 

Details of the type of finance provided by each lender or investor should be provided in the ```contract/finance``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/finance
    :collapse: 

```

### V.6. Debt information 

Categorize senior debit, mezzanine debit, otherDetails of all debt financing should be provided in the ```contract/finance``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/finance
    :collapse: 

```

### V.7. Rate information 

Amount and tenor of each, fixed or floating rateDetails of interest rates relating to each finance arrangement should be provided in the ```contract/finance``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/finance
    :collapse: 

```

### V.8. Security information 

Security and step in arrangements#### V.8.1. Structured security and step in information 

Details of security and step in rights relating to each financing arrangement should be provided in the ```contract/finance/description``` field, whilst the ```contract/finance/stepInRights``` flag should be set for each financing arrangement to indicate whether step in rights apply. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/finance
    :collapse: 

```

#### V.8.2. Security and step in documentation 

This information can be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

### V.9. Forecast IRR 

Forecast IRRStructured information and supporting details about the forecast IRR of the PPP should be provided in the ```contract/financeSummary``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/financeSummary
    :collapse: 

```

## VI. Government Support 

### VI.1. Guarantee information 

Detail the type and exact details of the guarantees provided - both explicit and contingent guarantees - such as minimum revenue guarantee, exchange rate guarantee, debit repayment guarantee and other guarantees. Provide links to fiscal commitments and contingent liablities disclosure reports, if any.#### VI.1.1. Structured information on guarantees 

Structured information about financial guarantees can be provided in the contract ```finance``` block, with a ```financeCategory``` code of 'guarantee'. This allows information about the party providing the guarantee, the total value, and any period it covers, to be represented. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contracts/finance
    :collapse: contract/finance/interestRate,contract/finance/repaymentFrequency

```

#### VI.1.2.. Guarantee documentation 

Documentation of each guarantee should be provided using one or more ```documentation``` blocks (one for each guarantee), with each one giving a clear title, description, and link out to further documentation or reports on the guarantee.  

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contracts/documents
    :collapse: 

```

### VI.2. Grant/Subsidy information 

"


"### VI.3. Service payment information 

"



"### VI.4. Land leases, asset transfers information 

"




"### VI.5. Revenue share information 

"


"## VII. Tariffs 

### VII.1. Tariffs and pricing 

Tariffs and pricing

This information will be required only where the infrastructure is financed partly or fully through the levy of user charges#### VII.1.1. Structured tariff and pricing information 

Structured information on the tariffs defined in the contract and subsequent revisions to tariffs can be provided in the ```implementation/tariffs``` section of an OCDS release.  

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/tariffs
    :collapse: 

```

#### VII.1.2. Tariff and pricing documentation 

Tariffs and pricing schedules can also be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

### VII.2. Tariff setting methodology 

Methodology for tariff setting/pricingThis information should be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

### VII.3. Tariff review mechanism 

This information should be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

### VII.4. Tariff change illustrations 

This information should be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field can be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

## VIII. Contract Termination 

### VIII.1. Events of default and termination payments 

Describe key events of default under two major categories: concessionaires events of default and public authority's evnts of default. State the terminaiation payments against each, stating clearly the methodolgy used for total payments. The following format may be used:Provision for contract termination should be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field should be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

### VIII.2. Handover information 

State details of hand over of assets back to state, condition of assets, and any other conditions relating to hand voer. Include details of provision for contintuty of serviceThis information should be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field should be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

## IX. Renegotiations 

### IX.1. Contract variation details 

State variations to contract, if any, after signing of the original contract detailing each change against original provisions. State in addition the details of renegotiations and circumstances leading to renegotiations. State specifically any change due to the renegotiated clauses in the following: roles and responsibilities relating to the project, risk allocation, fiscal exposure, that is, any change in fiscal commitments and contingent liabilities with a rationale for agreeing to the change.The amended contract should be provided using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field should be used to provide a free text summary of the content of the variations to the contract to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

#### IX.1.2.  

Nature of VariationA description of the nature of the variation should be provided in the ```amendment/description``` field. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/amendments/description
    :collapse: 

```

#### IX.1.3.  

Rationale for variationA rationale for the variation should be provided in the ```amendment/rationale``` field. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/amendments/rationale
    :collapse: 

```

#### IX.1.4.  

Change in roles and responsibilities of the parties due to the variation, if anyStructured information on changes to the roles and responsibilities of the parties due to the variation should be provided by updating the ```parties``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: parties
    :collapse: 

```

#### IX.1.5.  

Change in original risk allocation due to the variation, if anyStructured information on changes to the original risk allocation due to the variation should be provided by updating the ```contract/riskAllocation``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/riskAllocation
    :collapse: 

```

#### IX.1.6.  

Change in original fiscal commitments or contingent liabilities of government due to the variation, if anyThis information should be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field should be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

#### IX.1.6.  

Change in capital or operational costs due to the variation, if anyThis information should be provided in a document, or documents, using the ```documents``` field in the ```contract``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field should be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/documents
    :collapse: 

```

#### IX.1.7.  

Change in tariffs or service levels due to the variation, if anyStructured information on changes to the tariffs should be provided by updating the ```contract/implementation/tariffs``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/tariffs
    :collapse: 

```

#### IX.1.8.  

Structured information on changes to services levels should be provided by updating the ```contract/agreedMetrics``` section of an OCDS release. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/agreedMetrics
    :collapse: 

```

#### IX.1.9.  

Date of variationThe date of the variation should be provded using the ```amendment/date``` field. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/amendment/date
    :collapse: 

```

## X. Performance Information 

### X.1. Actual annual demand 

State the actual annual measured levels of demand or stated levels of demand in the providers report or contract managers report. Use the following formatStructured data about estimated demand should be provided in the ```contract/implementation/metrics``` section of an OCDS release, using an array of metrics building blocks.

A metric with the ```id``` 'demand' should be given, with a series of forecast ```observations``` that capture the actual demand for a given period.

These estimates can be disaggregated by any number of dimensions contained as simple fields within the ```observation/dimensions``` object. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/metrics
    :collapse: 

```

### X.2. Actual annual revenue 

Recommended only where revenue share clasuses or other related clasuses such as MRGs are present in the contract.
#### X.2.1. Structured information on annual revenues 


State the actual annual total revenues reported in the financial statements and reports.Structured data about aggregated annual revenues can be provided in the ```contract/implementation/metrics``` section of an OCDS release, using an array of metrics building blocks.

A metric with the ```id``` 'revenue' should be given, with a series of forecast ```observations``` that capture the revenue for a given period.

These estimates can be disaggregated by any number of dimensions contained as simple fields within the ```observation/dimensions``` object. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/metrics
    :collapse: 

```

#### X.2.2. Financial statements 

Provide links to audited financial statements of the provider company.This information should be provided in a document, or documents, using the ```documents``` field in the ```implementation``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/documents
    :collapse: 

```

### X.3. Actual IRR 

Recommended only where there is government equity investment or other form of government support that is substantialStructured data about actual IRR can be provided in the ```contract/implementation/metrics``` section of an OCDS release, using an array of metrics building blocks.

A metric with the ```id``` 'revenue' should be given, with a series of forecast ```observations``` that capture the revenue for a given period.

These estimates can be disaggregated by any number of dimensions contained as simple fields within the ```observation/dimensions``` object. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/metrics
    :collapse: 

```

### X.4. Actual KPI performance 

State actual year-wise performance here against each of 10-12 identified key performance indicatorsStructured data about actual performance against KPIs can be provided in the ```contract/implementation/metrics``` section of an OCDS release, using an array of metrics building blocks.

These estimates can be disaggregated by any number of dimensions contained as simple fields within the ```observation/dimensions``` object. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/metrics
    :collapse: 

```

### X.5. Performance failure information 

State instances of performance failure during the year and the penalty or abatement. Provide information on the provision of the contract as well as the actual penalties imposed.Structured data about actual performance failures, penalties and abatments and those provided for in the contract can be provided in the ```contract/implementation/performanceFailures``` section of an OCDS release.
 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/performanceFailures
    :collapse: 

```

### X.6. Performance assessment reports 

Provide links to audit report, independent performance assessments of the the independent engineer and any other performance reports available for the project.This information should be provided in a document, or documents, using the ```documents``` field in the ```implementation``` section of an OCDS release. OCDS provides a [document building block](../schema/reference/#document) for disclosure of documents.

The ```document/description``` field should be used to provide a free text summary of the content of the document to enable this information to be displayed in applications consuming OCDS data.

A value from the [document type codelist](../schema/codelists/#document-type) should be entered into the ```document/documentType``` field to identify the type of document being disclosed. 

```eval_rst
.. jsonschema:: ../schema/ppp-release-schema.json
    :include: contract/implementation/documents
    :collapse: 

```

"