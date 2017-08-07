# Worked Example

OCDS for PPPs can be used to build up a clear record of all the stages of a Public Private Partnership project over time. 

Fully implemented, it will bring together, in a structured form, key documents and data. 

This allows different stakeholders to understand how a project has developed.

## Details

```eval_rst
.. image:: _assets/ocds_show.png
   :target: ../_static/ocds-show/?load=../full.json
```

Based on our pilot work with the Red Compartida programme, we have created a fictional example PPP.

We used the [spreadsheet template](spreadsheet.md) to prepare a series of releases of data, representing different stages of the procurement process.

This was exported as an Excel file, and converted into JSON using the [OCDS Convert, Validate and Explore tool](http://standard.open-contracting.org/validator/)

The release were then compiled into a record, and are available to browse using the [open source OCDS Show framework](https://github.com/open-contracting/ocds-show/tree/ppp) which provides:

* A templating engine for displaying OCDS releases and records;
* Alerts to changed fields between different releases;
* Example visualization of data; 

## Explore the example

View the [OCDS releases in JSON format here](../_static/full.json).

View the [OCDS record in JSON format here](../_static/full_record_package.json).

View the [data in OCDS show here](../_static/ocds-show/?load=../full_record_package.json).

In the record within OCDS show:

* The circles along the top represent new 'releases' of information;
* The sections down to side reflect stages of the contracting process;
* The record 'builds up' as information is provided, and highlights what has changed at each point;

Use the 'text input' button to see (and adapt) the JSON data which generates this view.

Using the open source [OCDS Show framework](https://github.com/open-contracting/ocds-show/tree/ppp) alternative presentations of data can be prepared.

