app.controller('AuthController', function($scope, $location, authService){
    $scope.authService = authService;
    if(sessionStorage['currentUser'] != undefined) {
        $scope.accessToken = authService.getCurrentUser().access_token
    }

    $scope.login = function (userData) {
        authService.login(userData)
            .then(function(){
                $location.path('/home')
            })
        console.log(userData)
    };
    $scope.register = function(userData){
        authService.register(userData);
        console.log(userData);
    };
    $scope.logout = function(accessToken){
        authService.logout(accessToken);
    }
});