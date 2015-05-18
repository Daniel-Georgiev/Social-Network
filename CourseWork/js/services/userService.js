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
    function acceptFriendRequest(id){
        var deferred = $q.defer();
        $http.put(baseServiceUrl+ 'me/requests/'+ id +'?status=approved')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function declineFriendRequest(id){
        var deferred = $q.defer();
        $http.put(baseServiceUrl+ 'me/requests/'+ id +'?status=rejected')
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

    function getFriendFriends(username){
        var deferred = $q.defer();
        $http.get(baseServiceUrl+ 'users/'+ username +'/friends')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getUserFullData(username){
        var deferred = $q.defer();
        $http.get(baseServiceUrl+ 'users/'+ username )
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
        acceptFriendRequest: acceptFriendRequest,
        declineFriendRequest: declineFriendRequest,
        getFriendFriends: getFriendFriends,
        getUserFullData: getUserFullData


    }

})