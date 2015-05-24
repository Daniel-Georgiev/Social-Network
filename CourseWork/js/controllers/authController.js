app.controller('AuthController', function AuthController($scope, $location, authService, $http, notifyService){
    $scope.authService = authService;
    if(sessionStorage['currentUser'] != undefined) {
        $scope.accessToken = $scope.authService.getCurrentUser().access_token;
        $scope.username = $scope.authService.getCurrentUser().userName;
    }


    $scope.login = function (userData) {
        authService.login(userData)
            .then(function(data){
                sessionStorage.currentUser = JSON.stringify(data)
                $scope.username = $scope.authService.getCurrentUser().userName;
                $location.path('/home')
            },function(error){
                notifyService.showError(error.error_description);
            })

    };
    $scope.register = function(userData){
        authService.register(userData)
            .then(function(data){
                sessionStorage.currentUser = JSON.stringify(data)
                $location.path('/home')
            },function(error){
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