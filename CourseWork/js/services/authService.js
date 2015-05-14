app.factory('authService', function ($http, baseServiceUrl, $q) {
    function login(userData) {
        var deferred = $q.defer();

        $http.post(baseServiceUrl + 'users/login', userData)
            .success(function (data, status, headers, config) {
                console.log('Logged in');
                sessionStorage.currentUser = JSON.stringify(data)
                deferred.resolve(data, status, headers, config)
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data, status, headers, config)
            });

        return deferred.promise;
    }
    function register(userData) {
        var deferred = $q.defer();

        $http.post(baseServiceUrl + 'users/register', userData)
            .success(function (data, status, headers, config) {
                deferred.resolve(data, status, headers, config)
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data, status, headers, config)
            });
        return deferred.promise;
    }
    function logout() {
        var deferred = $q.defer();
        $http.post(baseServiceUrl +  'users/logout')
            .success(function (data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
                console.log('Logged Out');
                delete sessionStorage['currentUser'];
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data, status, headers, config)
            });

        return deferred.promise;
    }

    function isLoggedIn() {
        return sessionStorage['currentUser'] != undefined;
    }

    function getCurrentUser () {
        var userObject = sessionStorage['currentUser'];
        if (userObject) {
            return JSON.parse(sessionStorage['currentUser']);
        }
    }

    return {
        login: login,
        register: register,
        logout: logout,
        isLoggedIn: isLoggedIn,
        getCurrentUser: getCurrentUser
    }
});