app.controller('AuthController', function AuthController($scope, $location, authService, $http, notifyService){
    $scope.authService = authService;
    if(sessionStorage['currentUser'] != undefined) {
        $scope.accessToken = authService.getCurrentUser().access_token
        $scope.username = authService.getCurrentUser().userName;
        console.log($scope.username)
    }

    $scope.login = function (userData) {
        authService.login(userData)
            .then(function(){
                $location.path('/home')
            },function(error){
                notifyService.showError(error.error_description);
            })

    };
    $scope.register = function(userData){
        authService.register(userData)
            .then(function(){
                $location.path('/home')
                console.log(userData);
            },function(error){
                console.log(error);
                notifyService.showError(error.message)
            })

    };
    $scope.logout = function(){
        authService.logout()
            .then(function(){
                delete  $http.defaults.headers.common.Authorization;
                $location.path('/login')
            })
    }

    if(sessionStorage['currentUser'] != undefined){
        $http.defaults.headers.common.Authorization = 'Bearer ' + authService.getCurrentUser().access_token;

    }
});