(function () {
	'use strict';

	angular
		.module('stApp')
		.service('StStorageService', StStorageService);

	/* @ngInject */
	function StStorageService(localStorageService) {

		this.isNavegadorSuportaStorage = isNavegadorSuportaStorage;
		this.set = set;
		this.get = get;
		this.remover = remover;
		this.removerTodos = removerTodos;

		function isNavegadorSuportaStorage() {
			return localStorageService.isSupported;
		}

		function set(key, value) {
			localStorageService.set(key, value);
		}

		function get(key) {
			return localStorageService.get(key);
		}

		function remover(key) {
			return localStorageService.remove(key);
		}

		function removerTodos(key) {
			return localStorageService.removeAll(key);
		}
	}
})();