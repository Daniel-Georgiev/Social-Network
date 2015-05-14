app.controller('AuthController', function($scope, $location, authService, $http){
    $scope.authService = authService;
    if(sessionStorage['currentUser'] != undefined) {
        $scope.accessToken = authService.getCurrentUser().access_token
        $scope.username = authService.getCurrentUser().userName;
        console.log($scope.username)
    }

    $scope.login = function (userData) {
        authService.login(userData)
            .then(function(){
                $http.defaults.headers.common.Authorization = 'Bearer ' + authService.getCurrentUser().access_token;
                $location.path('/home')
            })
        console.log(userData)
    };
    $scope.register = function(userData){
        authService.register(userData);
        console.log(userData);
    };
    $scope.logout = function(){
        authService.logout();
    }
});