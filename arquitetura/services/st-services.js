(function () {
	'use strict';

	angular
		.module('stApp')
		.service('StService', StService);

	/* @ngInject */
	function StService($http, StAlertService) {

		return function (controller) {
			var self = this;

			self.controller = controller;

			self.entidade = {};
			self.metodoSalvar = 'salvar';
			self.metodoRemover = 'remover';

			self.salvar = salvar;
			self.remover = remover;
			self.limpar = limpar;

			function salvar() {
				StAlertService.showSuccess("Registro salvo com sucesso !");
			}

			function remover() {
				StAlertService.showSuccess('Registro excluido com sucesso!');
			}

			function limpar() {
				self.entidade = {};
			}

		};
	}

})();

