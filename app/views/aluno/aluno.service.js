(function () {
	'use strict';

	angular
		.module('stApp')
		.service('AlunoService', AlunoService);

	/* @ngInject */
	function AlunoService(StService) {
		this.getStService = getStService;

		function getStService() {
			var ps = new StService('CadastroAlunoController');

			return ps;
		}


	}

})();

