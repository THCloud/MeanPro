/**
 * public/assets/js/route.js
 *
 * @file   This used to control the FE route with angular.
 *         stateProvider is used but not routeProvider, for routeProvider is strict with Url. 
 *         In stateProvider, you can only keep mind with state. 
 *         If url changed, just change the config.
 *         It's better for a complex app.
 *
 * @author TH_Cloud
 *
 */


angular.module("myApp")
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('state1', {
                    url: "/state1",
                    templateUrl: "",
                    controller: "state1Ctrl"
                })
                .state('/state2', {
                    url: "/state2",
                    templateUrl: "",
                    controller: "state2Ctrl"
                })
                .state('/state3', {
                    url: "/state3",
                    templateUrl: "",
                    controller: "state3Ctrl"
                });

            // default state.
            // the default state must be defined on a state.
            $urlRouterProvider.otherwise('/state1');
        }
    ]);
