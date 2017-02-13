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

		const pesquisaAluno = {
			name: 'pesquisaAluno',
			url: '/pesquisa-aluno',
			templateUrl: 'app/views/aluno/pesquisa-aluno.html',
			controller: 'PesquisaAlunoController',
			controllerAs: 'vm'
		};

		const cadastroInstituicao = {
			name: 'cadastroInstituicao',
			url: '/cadastro-instituicao',
			templateUrl: 'app/views/instituicao/cadastro-instituicao.html',
			controller: 'CadastroInstituicaoController',
			controllerAs: 'vm'
		};

		const pesquisaInstituicao = {
			name: 'pesquisaInstituicao',
			url: '/pesquisa-instituicao',
			templateUrl: 'app/views/instituicao/pesquisa-instituicao.html',
			controller: 'PesquisaInstituicaoController',
			controllerAs: 'vm'
		};

		$stateProvider
			.state('cadastroAluno', cadastroAluno)
			.state('pesquisaAluno', pesquisaAluno)
			.state('cadastroInstituicao', cadastroInstituicao)
			.state('pesquisaInstituicao', pesquisaInstituicao);

	}
})();