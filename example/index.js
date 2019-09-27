const Yaol = require('../');

const logger = new Yaol('logger 1');

logger
  .err('error')
  .changeMessenger('logger 2')
  .info('info')
  .warn('warning');
