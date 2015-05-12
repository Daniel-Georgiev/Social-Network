app.factory('authService', function($http){
    //var user = {
    //    username: 'tsarKiro',
    //    password: 'password'
    //};

    return {
        login: function (userData) {
            $http.post('http://softuni-social-network.azurewebsites.net/api/users/login', userData)
                .success(function(data, status, headers, config){
                    console.log(data, status);
                })
        }
    }
});