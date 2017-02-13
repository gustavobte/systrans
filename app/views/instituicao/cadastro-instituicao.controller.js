(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('CadastroInstituicaoController', CadastroInstituicaoController);

	/* @ngInject */
	function CadastroInstituicaoController() {
		var vm = this;

		vm.titulo = "Cadastro de instituição";
	}

})();

