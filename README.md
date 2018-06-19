## OCDS for Public Private Partnerships

The Open Contracting Data Standard for Public Private Partnerships profile provides an extended Open Contracting Data Standard schema, offering a structured data model for presenting information on Public Private Partnership Projects.

It is based on the [World Bank Framework for Disclosure in Public Private Patnership Projects](http://www.worldbank.org/en/topic/publicprivatepartnerships/brief/ppp-tools#T1) and was developed between May 2016 and May 2017 through a partnership between the [World Bank Open Contracting team](https://blogs.worldbank.org/category/tags/open-contracting), [PPP team](http://www.worldbank.org/en/topic/publicprivatepartnerships), [Open Contracting Partnership](http://open-contracting.org), and [Open Data Services Co-operative](http://www.opendataservices.coop). 

Full documentation of the profile is available at [http://standard.open-contracting.org/profiles/ppp/](http://standard.open-contracting.org/profiles/ppp/)

The consolidated OCDS for PPPs extension can be declared in [OCDS package metadata](http://standard.open-contracting.org/latest/en/schema/release_package/) using:

```json
{
    "extensions":["http://standard.open-contracting.org/profiles/ppp/latest/en/extension.json"],
    "releases":[]
}
```

## About PPP extensions 

OCDS for PPPs is constructed from [a number of different modular extensions to OCDS](http://standard.open-contracting.org/profiles/ppp/latest/en/extensions/), most of which can be used independently from the profile.

This repository contains one additional extensions that forms part of the OCDS for PPPs profile. This extension introduces a number of fields and building blocks that are specific to PPP disclosure against the World Bank Framework, as well as a set of modifications that should only apply in an OCDS Profile (e.g. removing standard fields that are not required in the profile). 

### PPP Specific extensions 

#### Project level information

Building on the [Budget and Projects extension](https://github.com/open-contracting/ocds_budget_projects_extension) this adds to project with:

* Sector classifications - using the [UN Classifications of the Functions of Government](http://unstats.un.org/unsd/cr/registry/regcst.asp?Cl=4)
* Additional classifications - allowing arbitrary additional project categorization
* Project location - with options for gazetteer or point location

An example is shown below:

```json
{
    "releases":[
        {
            "planning": {
                "project": {
                                    "sector": {
                                        "scheme": "COFOG",
                                        "description": "Road transportation",
                                        "id": "04.5.1"
                                    },
                                    "locations": [
                                        {
                                            "description": "Local Authority Area: Halton Borough Council",
                                            "gazetteer": {
                                                "scheme": "GEONAMES",
                                                "identifiers": "2647601.0"
                                            }
                                        }
                                    ]
                                }
                            }
                  }

        ]
}
```

#### Evaluation Indicators

The PPP disclosure framework calls for a number of different indicators to be reported relating to governments evaluation of a PPP project.

The `award/evaluationIndicators` section includes properties to express the **value** and supporting **free-text details** for each indicator:

* discountRate
* riskPremium
* netPresentValue

#### Finance Summary

The PPP disclosure framework calls for a number of different indicators relating to the financial model of a PPP project. Whilst some of these may be reported as metrics on an ongoing basis, some are simple single values.

The `contract/financeSummary` section includes properties to express the **value** and supporting **free-text details** for each indicator:

* debtEquityRatio
* shareCapital
* subsidyRatio
* projectIRR

#### Removals

A standard OCDS extension should not remove content from the OCDS schema. However, to allow us to generate a profile schema and reference pages that contain **only** fields that should be considered when publishing OCDS for PPPs data, the release-schema.json for this extension contains a number of `null` fields, which remove schema elements not used by OCDS for PPPs. 

This includes elements deprecated in OCDS 1.0, or procurement specific elements that don't apply in a PPP context. 