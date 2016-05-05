/**
 *  ./public/assets/js/controller/adminCtrl.js
 *
 *  @file    this controller is for admin login page.
 *
 *  @author  TH_Cloud
 *	
 */


myApp.controller('adminCtrl', [
		'$scope',
		'$rootScope',
		'$timeout',
		'$location',
		'AuthService',
		function($scope, $rootScope, $timeout, $location, AuthService){
			$scope.adminLogin = function (credentials) {
				console.log(credentials);

				AuthService.adminLogin(credentials)
						.then(function (data) {
							$rootScope.$broadcast('refresh');
							
							// 这里想想办法
							$location.path('/');
						}, function (data) {
							
							alert('登录失败');
						});
			};
	}]);