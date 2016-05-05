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
                .when('/', {
                    templateUrl: '/',
                    resolve: {
                        tasks: ['MultiTaskLoader', function(MultiTaskLoader) {
                            return function(params){return MultiTaskLoader(params);};
                        }]
                    },
                    controller: 'indexCtrl'
                })
                .when('/error', {
                    templateUrl: '/error',
                    controller: 'errorCtrl'
                })
                .when('/admin', {
                    templateUrl: '/admin',
                    controller: 'adminCtrl'
                })
                .when('/task/:id', {
                    templateUrl: '/taskInfo',
                    controller: 'taskInfoCtrl'
                })
                .when('/taskEdit', {
                    templateUrl: '/taskEdit',
                    resolve: {
                        Pattern: [function () {
                            return 'add';
                        }]
                    },
                    controller: 'taskAddCtrl'
                })
                .when('/taskEdit/:id', {
                    templateUrl: '/taskEdit',
                    resolve: {
                        Pattern: [function () {
                            return 'edit';
                        }]
                    },
                    controller: 'taskEditCtrl'
                })
                .when('/userEdit', {
                    templateUrl: '/userEdit',
                    controller: 'userAddCtrl'
                })
                .when('/userEdit:id', {
                    templateUrl: '/userEdit:id',
                    controller: 'userEditCtrl'
                })
                .when('/tagEdit', {
                    templateUrl: '/tagEdit',
                    controller: 'tagAddCtrl'
                })                
                .when('/tagEdit:id', {
                    templateUrl: '/tagEdit:id',
                    controller: 'tagEditCtrl'
                })
                .otherwise({
                    redirectTo: '/error'
                });
        }]);
