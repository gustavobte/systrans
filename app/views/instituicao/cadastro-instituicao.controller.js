(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('CadastroInstituicaoController', CadastroInstituicaoController);

	/* @ngInject */
	function CadastroInstituicaoController(InstituicaoService) {
		var vm = this;
		vm.stService = InstituicaoService.getStService();
	}
})();