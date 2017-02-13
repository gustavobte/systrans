(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('CadastroAlunoController', CadastroAlunoController);

	/* @ngInject */
	function CadastroAlunoController(AlunoService) {
		var vm = this;

		vm.titulo = "Cadastro de aluno";

		vm.stService = AlunoService.getStService();
	}

})();

