(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('CadastroInstituicaoController', CadastroInstituicaoController);

	/* @ngInject */
	function CadastroInstituicaoController(InstituicaoService) {
		var vm = this;

		vm.titulo = "Cadastro de instituição";

		vm.stService = InstituicaoService.getStService();

	}

})();

