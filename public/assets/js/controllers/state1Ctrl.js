/**
 *  ./public/assets/js/controller/state1Ctrl.js
 *
 *  @file    this controller is for error page.
 *
 *  @author  TH_Cloud
 *	
 */

angular.module('myApp')
	.controller('state1Ctrl', [
		'$scope',
		'$timeout',
		function($scope, $timeout){
		
		var init = function() {
			console.log('kawayi, what the fuck');
		};

		init();

	}]);