(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('IndexController', IndexController);

	/* @ngInject */
	function IndexController($state) {

		var vm = this;

		vm.alterarRota = alterarRota;

		function alterarRota(rota) {
			$state.go(rota);
		}
	}

})();

