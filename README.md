## OCDS for Public Private Partnerships

The Open Contracting Data Standard for Public Private Partnerships profile is constructed from a number of different extensions to OCDS.

Full documentation of the profile is available at [http://standard.open-contracting.org/profiles/ppp/latest/en/](http://standard.open-contracting.org/profiles/ppp/latest/en/)

The extension in this repository is one of the extensions which makes up the OCDS for PPPs profile and introduces a number of fields and building blocks that are currently seen as specific to PPP disclosure against the World Bank PPP Disclosure Framework.

### Project level information

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

### Evaluation Indicators

The PPP disclosure framework calls for a number of different indicators to be reported relating to governments evaluation of a PPP project.

The `award/evaluationIndicators` section includes properties to express the **value** and supporting **free-text details** for each indicator:

* discountRate
* riskPremium
* netPresentValue

### Finance Summary

The PPP disclosure framework calls for a number of different indicators relating to the financial model of a PPP project. Whilst some of these may be reported as metrics on an ongoing basis, some are simple single values.

The `contract/financeSummary` section includes properties to express the **value** and supporting **free-text details** for each indicator:

* debtEquityRatio
* shareCapital
* subsidyRatio
* projectIRR
