/**
 * Top level module of the Policy Application.
 * 
 * @module PolicyApplication
 * @requires ngMaterial
 * @requires ngRoute
 */
(function(){
'use strict';	
angular.module('PolicyApplication',['ngMaterial','ui.router'])
.config(['$locationProvider','$stateProvider','$urlRouterProvider', 
	function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            views: {
                'header': {
                    templateUrl: '/pages/header.html'

                },
                'navbar': {
                    templateUrl: '/pages/navigation.html'

                }
            }
        });
    $stateProvider
        .state('app.permissions', {
            name: "permissions",
            url: "/permissions",
            views: {
                "content@": {
                    templateUrl: "/pages/permissions/permissions.html"
                }
            }
        });
    $stateProvider
        .state('app.applications', {
            name: "applications",
            url: "/applications",
            views: {

                "content@": {
                    templateUrl: "/pages/applications/applications.html"
                }
            }
        });
    $stateProvider
        .state('app.operations', {
            name: "operations",
            url: "/operations",
            views: {

                "content@": {
                    templateUrl: "/pages/operations/operations.html"
                }
            }
        });
    $stateProvider
        .state('app.rules', {
            name: "rules",
            url: "/rules",
            views: {

                "content@": {
                    templateUrl: "/pages/rules/rules.html"
                }
            }
        });
    $stateProvider
        .state('app.roles', {
            name: "roles",
            url: "/roles",
            views: {

                "content@": {
                    templateUrl: "/pages/roles/roles.html"
                }
            }
        });
    $urlRouterProvider.otherwise("/permissions");
}]);


}());