(function () {
	'use strict';

	angular
		.module('stApp')
		.service('StService', StService);

	/* @ngInject */
	function StService(StAlertService, StStorageService) {

		return function () {
			var self = this;

			self.entidade = {};
			self.entidades = [];
			self.metodoSalvar = 'salvar';
			self.metodoRemover = 'remover';

			self.salvar = salvar;
			self.remover = remover;
			self.listar = listar;
			self.limpar = limpar;

			function salvar() {
				executaFuncao(self.preSalvar);
				self.entidades.push(self.entidade);
				StStorageService.set(self.nomeKey, self.entidades);
				StAlertService.showSuccess("Registro salvo com sucesso !");
				self.limpar();
				executaFuncao(self.postSalvar);
			}

			function executaFuncao(funcao) {
				if (typeof funcao === "function") {
					funcao();
				}
			}

			function remover() {
				StAlertService.showSuccess('Registro excluido com sucesso!');
			}

			function listar() {
				self.entidades = StStorageService.get(self.nomeKey);
			}

			function limpar() {
				self.entidade = {};
			}

		};
	}

})();

