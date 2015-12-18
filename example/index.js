var output = require('../lib/index');

var messenger = 'example';

output.error(messenger,'this is an error message');
output.warning(messenger,'this is an warning message');
output.info(messenger,'this is an info message');