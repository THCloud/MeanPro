/**
 *  ./public/assets/js/controller/indexCtrl.js
 *
 *  @file    this controller is for index page.
 *
 *  @author  TH_Cloud
 *	
 */

angular.module('myApp')
	.controller('indexCtrl', [
		'$scope',
		'$timeout',
		function($scope, $timeout){
		
		var init = function() {
			console.log('wakaka, test');
		};

		init();

	}]);