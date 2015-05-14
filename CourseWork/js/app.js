var app = angular.module('App', ['ngMaterial', 'ngRoute', 'ngResource']);
app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'templates/publicView.html',
        controller: 'AuthController'
    });
    $routeProvider.when('/me/edit', {
        templateUrl: 'templates/editProfileView.html',
        controller: 'AppController'
    });
    $routeProvider.when('/home', {
        templateUrl: 'templates/homeView.html',
        controller: 'UserController'
    });
    $routeProvider.when('/me', {
        templateUrl: 'templates/ownWallView.html',
        controller: 'UserController'
    })
    $routeProvider.otherwise(
        {redirectTo: '/login'}
    );

});

//app.run(function ($rootScope, $location, authService) {
//    $location.path('/login');
//
//})