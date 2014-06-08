'use strict';

angular
    .module('typesterApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'timer'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/typetest', {
                templateUrl: 'views/typetest.html',
                controller: 'TypetestCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
