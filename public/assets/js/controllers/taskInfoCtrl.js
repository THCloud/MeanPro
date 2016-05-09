/**
 *  ./public/assets/js/controller/taskInfoCtrl.js
 *
 *  @file    this controller is for taskInfo page.
 *
 *  @author  TH_Cloud
 *	
 */


myApp.controller('taskInfoCtrl', [
		'$scope',
		'$http',
		'Session',
		'$route',
		'$location',
		'$timeout',
		function($scope, $http, Session, $route, $location, $timeout){
			$scope.task = {};
			$scope.userRole = Session.userRole;
			var path = "";

			$scope.pushTask = function () {
				$http.post(path, {})
					.then(function (res) {
						alert('success');
						$scope.task = res.data;
					}, errorCallback);
			};

			$scope.deleteTask = function () {
				$http.delete(path)
					.then(function (res) {
						alert('success');
						$location.path('/');
					}, errorCallback);				
			};

			$scope.editTask = function () {
				$location.path('/task/edit/' + $route.current.params.id);
			};

			function fetchTaskInfo() {	
				$http.get('/task/edit/5730351cd44e69d30ad1f3b1')
					.then(function (res) {
						$scope.task = res.data;
					}, errorCallback);
			}

			function errorCallback(res) {
				alert('network failed.');
			}

			function _init() { 
				console.log("init taskInfo.");
				fetchTaskInfo();
			}

			_init();
		
		}]);