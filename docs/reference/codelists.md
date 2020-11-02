# Codelists

Some schema fields refer to codelists, to limit and standardize the possible values of the fields, in order to promote data interoperability.

Codelists can either be open or closed. **Closed codelists** are intended to be comprehensive; for example, the [currency](https://standard.open-contracting.org/latest/en/schema/codelists/#currency) codelist covers all currencies in the world. **Open codelists** are intended to be representative, but not comprehensive.

Publishers must use the codes in the codelists, unless no code is appropriate. If no code is appropriate and the codelist is **open**, then a publisher may use a new code outside those in the codelist. If no code is appropriate and the codelist is **closed**, then a publisher should instead create an issue in the [OCDS for PPPs GitHub repository](https://github.com/open-contracting-extensions/public-private-partnerships/issues).

```eval_rst
.. admonition:: Extending open codelists
    :class: Tip

    .. markdown::

      If you use new codes outside those in an open codelist, please create an issue in the [OCDS for PPPs GitHub repository](https://github.com/open-contracting-extensions/public-private-partnerships/issues), so that the codes can be considered for inclusion in the codelist.

```

For more information on open and closed codelists, refer to the Open Contracting Data Standard [codelists documentation](https://standard.open-contracting.org/latest/en/schema/codelists/).

## OCDS codelists

OCDS for PPPs reuses some codelists from the Open Contracting Data Standard, without modification. Refer to the OCDS documentation for details of these codelists:

### Closed codelists

* [Award status](https://standard.open-contracting.org/latest/en/schema/codelists/#award-status)
* [Contract status](https://standard.open-contracting.org/latest/en/schema/codelists/#contract-status)
* [Currency](https://standard.open-contracting.org/latest/en/schema/codelists/#currency)
* [Procurement method](https://standard.open-contracting.org/latest/en/schema/codelists/#method)
* [Milestone status](https://standard.open-contracting.org/latest/en/schema/codelists/#milestone-status)
* [Procurement category](https://standard.open-contracting.org/latest/en/schema/codelists/#procurement-category)
* [Tender status](https://standard.open-contracting.org/latest/en/schema/codelists/#tender-status)

### Open codelists

* [Award criteria](https://standard.open-contracting.org/latest/en/schema/codelists/#award-criteria)
* [Extended procurement category](https://standard.open-contracting.org/latest/en/schema/codelists/#extended-procurement-category)
* [Item classification scheme](https://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme)
* [Related process](https://standard.open-contracting.org/latest/en/schema/codelists/#related-process)
* [Related process scheme](https://standard.open-contracting.org/latest/en/schema/codelists/#related-process-scheme)
* [Submission method](https://standard.open-contracting.org/latest/en/schema/codelists/#submission-method)
* [Unit classification scheme](https://standard.open-contracting.org/latest/en/schema/codelists/#unit-classification-scheme)

## OCDS for PPPs codelists

OCDS for PPPs modifies some codelists from OCDS and reuses codelists from extensions, without modification. The 'Extension' column in the tables below indicates where each code originates from.

### Closed codelists

#### bidStatus

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/bidStatus.csv
```

For additional guidance on using this codelist, refer to the [Bid statistics and details extension documentation](https://extensions.open-contracting.org/en/extensions/bids/v1.1.5/).

#### dataType

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/dataType.csv
```

For additional guidance on using this codelist, refer to the [Requirements extension documentation](https://extensions.open-contracting.org/en/extensions/requirements/master/).

#### financeCategory

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/financeCategory.csv
```

For additional guidance on using this codelist, refer to the [Financing extension documentation](https://extensions.open-contracting.org/en/extensions/finance/master/).

#### initiationType

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/initiationType.csv
```

For additional guidance on using this codelist, refer to the [OCDS initiation type codelist documentation](https://standard.open-contracting.org/latest/en/schema/codelists/#initiation-type).

#### preQualificationStatus

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/preQualificationStatus.csv
```

For additional guidance on using this codelist, refer to the [Qualification extension documentation](https://extensions.open-contracting.org/en/extensions/qualification/master/).

#### relatesTo

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/relatesTo.csv
```

For additional guidance on using this codelist, refer to the [Requirements extension documentation](https://extensions.open-contracting.org/en/extensions/requirements/master/).

#### releaseTag

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/releaseTag.csv
```

For additional guidance on using this codelist, refer to the [OCDS release tag codelist documentation](https://standard.open-contracting.org/latest/en/schema/codelists/#release-tag).

#### responseSource

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/responseSource.csv
```

For additional guidance on using this codelist, refer to the [Requirements extension documentation](https://extensions.open-contracting.org/en/extensions/requirements/master/).

#### riskAllocation

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/riskAllocation.csv
```

For additional guidance on using this codelist, refer to the [Risk allocation extension documentation](https://extensions.open-contracting.org/en/extensions/risk_allocation/master/).

#### votingRights

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/votingRights.csv
```

For additional guidance on using this codelist, refer to the [Shareholders extension documentation](https://extensions.open-contracting.org/en/extensions/shareholders/master/).

### Open codelists

#### bidStatistics

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/bidStatistics.csv
```

For additional guidance on using this codelist, refer to the [Bid statistics and details extension documentation](https://extensions.open-contracting.org/en/extensions/bids/v1.1.5/).

#### documentType

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/documentType.csv
```

For additional guidance on using this codelist, refer to the [OCDS document type codelist documentation](https://standard.open-contracting.org/latest/en/schema/codelists/#document-type).

#### milestoneCode

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/milestoneCode.csv
```

For additional guidance on using this codelist, refer to the [OCDS for PPPs extension documentation](https://extensions.open-contracting.org/en/extensions/ppp/master/).

#### milestoneType

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/milestoneType.csv
```

For additional guidance on using this codelist, refer to the [OCDS milestone type codelist documentation](https://standard.open-contracting.org/latest/en/schema/codelists/#milestone-type).

#### partyRole

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/partyRole.csv
```

For additional guidance on using this codelist, refer to the [OCDS party role codelist documentation](https://standard.open-contracting.org/latest/en/schema/codelists/#party-role).

#### riskCategory

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/riskCategory.csv
```

For additional guidance on using this codelist, refer to the [Risk allocation extension documentation](https://extensions.open-contracting.org/en/extensions/risk_allocation/master/).
