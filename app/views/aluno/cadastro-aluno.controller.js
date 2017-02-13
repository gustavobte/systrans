(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('CadastroAlunoController', CadastroAlunoController);

	/* @ngInject */
	function CadastroAlunoController(AlunoService) {
		var vm = this;

		vm.stService = AlunoService.getStService();

		vm.stService.preSalvar = preSalvar;
		vm.stService.postSalvar = postSalvar;

		function preSalvar() {
			console.log('Faz alguma coisa antes de salvar')
		}

		function postSalvar() {
			console.log('Faz alguma coisa depois de salvar')
		}
	}

})();

