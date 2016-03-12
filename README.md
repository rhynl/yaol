# yaol

Yet another output log

[![build status](https://secure.travis-ci.org/rhaynel-parra/yaol.png)](http://travis-ci.org/rhaynel-parra/yaol)

## Installation

This module is installed via npm:

``` bash
$ npm install yaol
```

## Example Usage

``` js
var yaol = require('yaol');
var logger = yaol('yaol says');
logger.info('information');
logger.warn('warning');
logger.err('Error');
```
