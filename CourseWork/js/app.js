var app = angular.module('App', ['ngMaterial', 'ngRoute', 'ngResource']);
app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'templates/publicView.html',
        controller: 'AuthController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'templates/homeView.html',
        controller: 'AppController'
    });
    $routeProvider.otherwise(
        {redirectTo: '/'}
    );
})

app.run(function ($rootScope, $location, authService) {
    $location.path('/login');

})