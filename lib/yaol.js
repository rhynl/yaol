(function () {
	'use strict';

  /**
   * Module dependencies.
   */
	var chalk = require('chalk');

  /**
   * Helper function for console outputs, nothing special
   *
   * Options:
   *
   *  - messenger   messenger
   *
   * Examples:
   *
   *   yaol = yaol('Yaol');
   *   logger = new yaol('messenger');
   *   logger.info('message');
   *   logger.error('message');
   *   logger.warning('message');
   *
   * @param {string} messenger
   * @api public
   */
	function yaol(messenger) {
    /*jshint validthis:true */
		let _self = this;
		let message = chalk.white.dim;
    let msngr;

		/**
		 * display a message in error format
		 * @param {String} msg message to display
		*/
    _self.err = (msg) => {
			msngr = chalk.white.bgBlack.dim(messenger) + ' ';
			let err = msngr + ' ' + chalk.red.bgBlack('ERR!') + ' ';
			console.error(err + message(msg));
		};
		/**
		 * display a message in warning format
		 * @param {String} msg message to display
		*/
    _self.warn = (msg) => {
			msngr = chalk.white.bgBlack.dim(messenger) + ' ';
			let war = msngr + ' ' + chalk.black.bgYellow('WARN') + ' ';
			console.warn(war + message(msg));
		};
		/**
		 * display a message in info format
		 * @param {String} msg message to display
		*/
    _self.info = (msg) => {
			msngr = chalk.white.bgBlack.dim(messenger) + ' ';
			let inf = msngr + ' ' + chalk.white.bgBlue('Info') + ' ';
			console.info(inf + message(msg));
		};
	}

	/**
	 * expose `yaol`.
	*/
  module.exports = yaol;

  /**
   * yaol version.
   */
  exports.version = '0.0.2';

})();
