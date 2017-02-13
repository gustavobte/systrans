(function () {
	'use strict';

	angular
		.module('stApp')
		.directive('stInputText', pdInputText);

	/* @ngInject */
	function pdInputText() {
		var directive = {
			restrict: 'E',
			require: '^form',
			templateUrl: 'arquitetura/directives/st-input-text/st-input-text.template.html',
			link: link,
			scope: {
				label: '@',
				tamanhoMaximo: '@',
				ngModel: '=',
				ngRequired: '='
			}
		};
		return directive;

		function link($scope, element, attrs, formCtrl) {
			$scope.formCtrl = formCtrl;
			$scope.templateInputName = 'stInputText' + $scope.$id;
			$scope.templateLabel = $scope.label;
			$scope.templateRequired = $scope.ngRequired;
			$scope.templateTamanhoMaximo = $scope.tamanhoMaximo || '10';
		}
	}

})();
