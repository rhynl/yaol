(function () {
	'use strict';

	var chalk = require('chalk');
	
	/**
	 * Helper function for console outputs, nothing special
	*/
	function Output() {
		let op = this;
		let message = chalk.white.dim;
		
		/**
		 * display a message in error format
		 * @param {String} messenger console messenger.
		 * @param {String} msg message to display
		*/
		op.error = function (messenger, msg) {
			let msngr = chalk.white.bgBlack.dim(messenger) + ' ';
			let err = msngr + ' ' + chalk.red.bgBlack('ERR!') + ' ';
			console.error(err + message(msg));
		};
		/**
		 * display a message in warning format
		 * @param {String} messenger console messenger.
		 * @param {String} msg message to display
		*/
		op.warning = function (messenger, msg) {
			let msngr = chalk.white.bgBlack.dim(messenger) + ' ';
			let war = msngr + ' ' + chalk.black.bgYellow('WARN') + ' ';
			console.warn(war + message(msg));
		};
		/**
		 * display a message in info format
		 * @param {String} messenger console messenger.
		 * @param {String} msg message to display
		*/
		op.info = function (messenger, msg) {
			let msngr = chalk.white.bgBlack.dim(messenger) + ' ';
			let inf = msngr + ' ' + chalk.white.bgBlue('Info') + ' ';
			console.info(inf + message(msg));
		};
	};
	
	/**
	 * expose Output
	*/
	module.exports = new Output();

})();