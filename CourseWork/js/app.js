var app = angular.module('App', ['ngMaterial', 'ngRoute', 'ngResource', 'angular-loading-bar', 'infinite-scroll']);
app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(function ($routeProvider,cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = false;
    $routeProvider.when('/login', {
        templateUrl: 'templates/publicView.html',
        controller: 'AuthController'
    });
    $routeProvider.when('/me/edit', {
        templateUrl: 'templates/editProfileView.html',
        controller: 'UserController'
    });
    $routeProvider.when('/home', {
        templateUrl: 'templates/feedView.html',
        controller: 'AuthController'

    });
    $routeProvider.when('/me', {
        templateUrl: 'templates/ownWallView.html',
        controller: 'AppController'
    });
    $routeProvider.when('/users/:username',{
        templateUrl: 'templates/WallView.html',
        controller: 'AppController'
    });
    $routeProvider.when('/me/friends',{
        templateUrl: 'templates/friends.html',
        controller: 'AppController'
    });
    $routeProvider.when('/me/password',{
        templateUrl: 'templates/changePassView.html',
        controller: 'UserController'
    })


});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if (!authService.isLoggedIn()) {
            $location.path('/login');
        }
    })
})