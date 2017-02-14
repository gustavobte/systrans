(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('IndexController', IndexController);

	/* @ngInject */
	function IndexController($state,$mdSidenav) {

		var vm = this;

        vm.openSideNavPanel = openSideNavPanel;
        vm.closeSideNavPanel = closeSideNavPanel;
        vm.showMobileMainHeader = true;
		vm.alterarRota = alterarRota;

		init('dashboardApp');

		function init(rota) {
			$state.go(rota);
		}

		function alterarRota(rota) {
			$state.go(rota);
            closeSideNavPanel();
		}

        function openSideNavPanel() {
            $mdSidenav('left').open();
        }

        function closeSideNavPanel() {
            $mdSidenav('left').close();
        }
	}

})();

