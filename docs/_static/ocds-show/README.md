# OCDS SHOW

A tool for displaying OCDS releases and records.

* This tool will try and convert a record/release in HTML (in progress)
* Create a javascript widget using this HTML.


## Intallation

Clone this repository and run

`npm install .`

## Development

In order to complile the templates ready to use in the broser run

`node build-frontend.js -w`

The -w will watch the files so that any change in the templates will regenerate the templates.

A test file can be found in example/release_input.html.
