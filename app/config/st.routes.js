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

		const cadastroInstituicao = {
			name: 'cadastroInstituicao',
			url: '/cadastro-instituicao',
			templateUrl: 'app/views/instituicao/cadastro-instituicao.html',
			controller: 'CadastroInstituicaoController',
			controllerAs: 'vm'
		};

		$stateProvider
			.state('cadastroAluno', cadastroAluno)
			.state('cadastroInstituicao', cadastroInstituicao);

	}
})();