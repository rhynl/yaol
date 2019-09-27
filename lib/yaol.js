/**
* Module dependencies.
*/
const chalk = require('chalk');

/**
 * Helper function for console outputs, nothing special
 *
 * Options:
 *
 *  - messenger   messenger
 *
 * Examples:
 *
 *   Yaol = require('Yaol');
 *   logger = new Yaol('messenger');
 *   logger.info('message');
 *   logger.err('message');
 *   logger.warn('message');
 *
 * @param {string} messenger
 * @api public
 */
function Yaol(messenger = '') {
  if (!(this instanceof Yaol)) { return new Yaol(messenger); }
  this.messenger = messenger;
}
/**
* display a message in error format
* @param {String} msg message to display
*/
Yaol.prototype.err = function err(msg, options = {}) {
  let message = msg;
  if (options.json) {
    message = JSON.stringify(msg, null, 2);
  }
  process.stdout.write(`${chalk.white.bgBlack.dim(this.messenger)} ${chalk.red.bgBlack('ERR!')} ${chalk.white.dim(message)}\n`);
  return this;
};
/**
* display a message in info format
* @param {String} msg message to display
*/
Yaol.prototype.info = function info(msg, options = {}) {
  let message = msg;
  if (options.json) {
    message = JSON.stringify(msg, null, 2);
  }
  process.stdout.write(`${chalk.white.bgBlack.dim(this.messenger)} ${chalk.white.bgBlue('Info')} ${chalk.white.dim(message)}\n`);
  return this;
};
/**
* display a message in warning format
* @param {String} msg message to display
*/
Yaol.prototype.warn = function warn(msg, options = {}) {
  let message = msg;
  if (options.json) {
    message = JSON.stringify(msg, null, 2);
  }
  process.stdout.write(`${chalk.white.bgBlack.dim(this.messenger)} ${chalk.black.bgYellow('WARN')} ${chalk.white.dim(message)}\n`);
  return this;
};

Yaol.prototype.changeMessenger = function changeMsgr(msgr) {
  this.messenger = msgr;
  return this;
};

/**
 * expose `yaol`.
*/
module.exports = Yaol;

/**
 * yaol version.
 */
exports.version = '0.0.4';
