app.factory('authService', function($http){
    function login(userData) {
        $http.post('http://softuni-social-network.azurewebsites.net/api/users/login', userData)
            .success(function(data, status, headers, config){
                console.log(data, status);
            })
            .error(function(data,status,headers,config){
                console.log(data,status)
            });
        }
    function register (userData){
        $http.post('http://softuni-social-network.azurewebsites.net/api/users/register', userData)
            .success(function(data, status, headers, config){
                console.log(data, status);
            })
            .error(function(data,status,headers,config){
                console.log(data,status)
            });

    }

    return {
        login: login,
        register: register
        }
});