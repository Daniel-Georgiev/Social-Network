app.controller('AppController', function($scope, authService){
    $scope.login = function (userData) {
        authService.login(userData);
        console.log(userData)
    };
    $scope.register = function(userData){
        authService.register(userData);
        console.log(userData);
    }
});