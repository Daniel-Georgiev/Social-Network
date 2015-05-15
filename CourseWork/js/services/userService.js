app.factory('userServices', function($http, baseServiceUrl, $q){
    function editProfile(editData){
        $http.put(baseServiceUrl + 'me', editData)
            .success(function (data, status, headers, config) {
                console.log(data);
            })
            .error(function (data, status, headers, config) {
            });
    }

    function editPassword(editData){
        //todo
    }
    function getOwnData(){
        var deferred = $q.defer();
        $http.get(baseServiceUrl + 'me')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });
        return deferred.promise;
    }

    function getFriendRequests(){
        var deferred = $q.defer();
        $http.get(baseServiceUrl+ 'me/requests')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getOwnFriends(){
        var deferred = $q.defer();
        $http.get(baseServiceUrl+ 'me/friends')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }



    return{
        getOwnFriends: getOwnFriends,
        editProfile: editProfile,
        editPassword: editPassword,
        getOwnData: getOwnData,
        getFriendRequests: getFriendRequests,

    }

})