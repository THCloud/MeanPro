/**
 * public/assets/js/route.js
 *
 * @file   This used to control the FE route with angular.
 *         stateProvider may be better choice for a complex app.
 *
 * @author TH_Cloud
 *
 */


myApp.config([
        '$routeProvider',
        '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/main', {
                    templateUrl: '/main',
                    controller: 'indexCtrl'
                })
                // .when('/error', {
                //     templateUrl: '/error',
                //     controller: 'errorCtrl'
                // })
                .when('/admin', {
                    templateUrl: '/admin',
                    controller: 'adminCtrl'
                })
                .when('/task/:id', {
                    templateUrl: '/task/:id',
                    controller: 'taskInfoCtrl'
                })
                .when('/task/edit', {
                    templateUrl: '/task/edit',
                    resolve: {
                        Pattern: [function () {
                            return 'add';
                        }]
                    },
                    controller: 'taskAddCtrl'
                })
                .when('/task/edit/:id', {
                    templateUrl: '/task/edit',
                    resolve: {
                        Pattern: [function () {
                            return 'edit';
                        }]
                    },
                    controller: 'taskEditCtrl'
                })
                .when('/user/edit', {
                    templateUrl: '/user/edit',
                    controller: 'userAddCtrl'
                })
                .when('/user/edit/:id', {
                    templateUrl: '/user/edit',
                    controller: 'userEditCtrl'
                })
                .when('/tag/edit', {
                    templateUrl: '/tag/edit',
                    controller: 'tagAddCtrl'
                })                
                .when('/tag/edit/:id', {
                    templateUrl: '/tag/edit',
                    controller: 'tagEditCtrl'
                })
                .otherwise({
                    redirectTo: '/main'
                });
        }]);
