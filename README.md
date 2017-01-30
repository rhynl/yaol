# yaol

Yet another output log

[![build status](https://secure.travis-ci.org/rhynl/yaol.png)](http://travis-ci.org/rhynl/yaol)

## Installation

This module is installed via npm:

``` bash
$ npm install yaol
```

## Example Usage

```js
const yaol = require('yaol');
const logger = new yaol('yaol says');
logger.info('information');
logger.warn('warning');
logger.err('Error');
```

## Options

```js
const Obj = { 'name': 'foo', type: 'baz' };
logger.info(obj, {json: true});
```

More options commig soon.

## License
2017 [MIT](https://rhynl.mit-license.org)