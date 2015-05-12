var app = angular.module('App', ['ngMaterial', 'ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'templates/publicView.html',
        controller: 'AppController'
    });
    $routeProvider.otherwise(
        {redirectTo: '/'}
    );
})

app.run(function ($rootScope, $location, authService) {
            $location.path('/login');
    })