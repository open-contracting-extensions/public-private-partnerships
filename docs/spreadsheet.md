# Spreadsheet template

In most cases, OCDS for PPPs data will be created and analyzed using customized tools.

However, as a proof-of-concept - and to demonstrate the flattened serialization of the data model - we have prepared a spreadsheet template that can be used to provide detailed disclosures for a PPP project.

The template is available to [view via Google Sheets](https://docs.google.com/spreadsheets/d/1f9Icp13Ak4UmaqsMUpT_HmmBTtkzZCgpefni0Pfmrn0/view) or [you can make a copy to edit](https://docs.google.com/spreadsheets/d/1f9Icp13Ak4UmaqsMUpT_HmmBTtkzZCgpefni0Pfmrn0/copy).

```{image} _static/images/spreadsheet_template.png
:target: https://docs.google.com/spreadsheets/d/1f9Icp13Ak4UmaqsMUpT_HmmBTtkzZCgpefni0Pfmrn0/view
```

Unlike the [framework reference](framework.md) which reflects the ordering of properties required by the World Bank PPP Disclosure Framework, the spreadsheet template is structured around the stages of a **contracting process**.

This means it can also be a useful tool for implementers to think about the points in time at which information will become available.

The table structures and validation in the template can also be used to construct smaller data collection tools: for example, monthly metrics reporting sheets.

Advanced users may wish to consult the [flatten tool spreadsheet designers guide](https://flatten-tool.readthedocs.io/en/latest/unflatten/) which explains the syntax used in column headings (row 5) to map between the structured JSON model of OCDS for PPPs, and tabular data.
