(function () {
	angular.module('stApp')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {

		const cadastroAluno = {
			name: 'cadastroAluno',
			url: '/cadastro-aluno',
			templateUrl: 'app/views/aluno/cadastro-aluno.html',
			controller: 'CadastroAlunoController',
			controllerAs: 'vm'
		};

		$stateProvider
			.state('cadastroAluno', cadastroAluno);

	}
})();