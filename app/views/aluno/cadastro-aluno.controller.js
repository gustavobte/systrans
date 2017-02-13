(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('CadastroAlunoController', CadastroAlunoController);

	/* @ngInject */
	function CadastroAlunoController() {
		var vm = this;

		vm.titulo = "Cadastro de aluno";
	}

})();

