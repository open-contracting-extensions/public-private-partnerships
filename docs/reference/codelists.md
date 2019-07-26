# Codelists

Some schema fields refer to codelists, to limit and standardize the possible values of the fields, in order to promote data interoperability.

Codelists can either be open or closed. **Closed codelists** are intended to be comprehensive; for example, the [currency](http://standard.open-contracting.org/latest/en/schema/codelists/#currency) codelist covers all currencies in the world. **Open codelists** are intended to be representative, but not comprehensive.

Publishers must use the codes in the codelists, unless no code is appropriate. If no code is appropriate and the codelist is **open**, then a publisher may use a new code outside those in the codelist. If no code is appropriate and the codelist is **closed**, then a publisher should instead create an issue in the [OCDS for PPPs GitHub repository](https://github.com/open-contracting-extensions/public-private-partnerships/issues).

```eval_rst
.. admonition:: Extending open codelists
    :class: Tip

    .. markdown::

      If you use new codes outside those in an open codelist, please create an issue in the [OCDS for PPPs GitHub repository](https://github.com/open-contracting-extensions/public-private-partnerships/issues), so that the codes can be considered for inclusion in the codelist.

```

For more information on open and closed codelists, refer to the Open Contracting Data Standard [codelists documentation](http://standard.open-contracting.org/latest/en/schema/codelists/).

## OCDS codelists

OCDS for PPPs reuses some codelists from the Open Contracting Data Standard, without modification. Refer to the core OCDS documentation for details of these codelists:

### Closed codelists

* [Award status](http://standard.open-contracting.org/latest/en/schema/codelists/#award-status)
* [Contract status](http://standard.open-contracting.org/latest/en/schema/codelists/#contract-status)
* [Currency](http://standard.open-contracting.org/latest/en/schema/codelists/#currency)
* [Procurement method](http://standard.open-contracting.org/latest/en/schema/codelists/#method)
* [Milestone status](http://standard.open-contracting.org/latest/en/schema/codelists/#milestone-status)
* [Procurement category](http://standard.open-contracting.org/latest/en/schema/codelists/#procurement-category)
* [Tender status](http://standard.open-contracting.org/latest/en/schema/codelists/#tender-status)

### Open Codelists

* [Award criteria](http://standard.open-contracting.org/latest/en/schema/codelists/#award-criteria)
* [Extended procurement category](http://standard.open-contracting.org/latest/en/schema/codelists/#extended-procurement-category)
* [Item classification scheme](http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme)
* [Organization identifier scheme](http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme)
* [Related process](http://standard.open-contracting.org/latest/en/schema/codelists/#related-process)
* [Related process scheme](http://standard.open-contracting.org/latest/en/schema/codelists/#related-process)
* [Submission method](http://standard.open-contracting.org/latest/en/schema/codelists/#submission-method)
* [Unit classification scheme](http://standard.open-contracting.org/latest/en/schema/codelists/#unit-classification-scheme)

## OCDS for PPPs codelists

OCDS for PPPs also modifies some codelists from OCDS core and uses codelists from individual extensions and the PPP extension itself. The 'extension' column in the table display below indicates where each code originates from.

### Closed codelists

#### bidStatus

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/bidStatus.csv
```

#### dataType

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/dataType.csv
```

#### financeCategory

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/financeCategory.csv
```

#### initiationType

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/initiationType.csv
```

#### preQualificationStatus

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/preQualificationStatus.csv
```

#### relatesTo

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/relatesTo.csv
```

#### releaseTag

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/releaseTag.csv
```

#### responseSource

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/responseSource.csv
```

#### riskAllocation

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/riskAllocation.csv
```

#### votingRights

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/votingRights.csv
```

### Open codelists

#### bidStatistics

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/bidStatistics.csv
```

#### documentType

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/documentType.csv
```

#### milestoneCode

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/milestoneCode.csv
```

#### milestoneType

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/milestoneType.csv
```

#### partyRole

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/partyRole.csv
```

#### riskCategory

```eval_rst
.. csv-table-no-translate::
   :header-rows: 1
   :file: ../_static/patched/codelists/riskCategory.csv
```
