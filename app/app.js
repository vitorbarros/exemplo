window.app = angular.module('exemplo', [
    'ngRoute',
    'ngFileUpload',
    'ui.grid',
    'ui.grid.pagination',
    'ngTouch',
    'ui.calendar',
    'ui.bootstrap'
], function ($interpolateProvider) {
});

window.app.config(function ($locationProvider, $routeProvider) {
    //routes
    $routeProvider
        .when('/', {
            controller: 'IndexController',
            templateUrl: '/app/views/index-controller/index.html'
        })
        .when('/grid',{
            controller: 'GridController',
            templateUrl: '/app/views/grid-controller/index.html'
        })
        .when('/calendar',{
            controller: 'CalendarController',
            templateUrl: '/app/views/calendar-controller/index.html'
        });

    //options para friendly url
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});