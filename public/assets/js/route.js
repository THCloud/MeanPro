/**
 * public/assets/js/route.js
 *
 * @file   This used to control the FE route with angular.
 *         stateProvider may be better choice for a complex app.
 *
 * @author TH_Cloud
 *
 */


angular.module('myApp')
    .config([
        '$routeProvider',
        '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/',
                    controller: indexCtrl,
                })
                .when('/state1', {
                    templateUrl: '/state1',
                    controller: state1Ctrl,
                });

            $routeProvider.otherwise({redirectTo: '/'});
            $locationProvider.html5Mode(true);            
        }]);
