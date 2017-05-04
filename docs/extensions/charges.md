# Charges

The charges extension is used to record details of the **total** charges that are estimated or applied to users or government during the operation of a Public Private Partnership contract. 

This can be used to provide a breakdown of **government support** to a project, on a period-by-period basis.

## Overview

The Charges extension introduces a ```charges``` property to both ```Contract``` and ```Contract/Implementation```. 

This contains an array of ```Charge``` objects with properties for:

* ```title``` - a descriptive title of the charge;
* ```paidBy``` - either 'government' or 'user';
* ```period``` - the start and end-date of the period covered by the charge;
* ```estimatedValue``` - the predicated total value of this charge during the period;
* ```actualValue``` - the actual value (updated after the period has ended) of the charge during the period;
* ```notes``` - further information on the charge;



