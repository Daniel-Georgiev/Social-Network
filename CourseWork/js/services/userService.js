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
        editProfile: editProfile,
        editPassword: editPassword,
        getOwnFriends: getOwnFriends
    }

})