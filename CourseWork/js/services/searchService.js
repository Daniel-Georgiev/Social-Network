app.factory('searchService', function($http, baseServiceUrl, $q) {
    function searchUsersByName(name){
        var deferred = $q.defer();
        $http.get(baseServiceUrl + 'users/search?searchTerm='+ name)
            .success(function (data, status, headers, config) {
               deferred.resolve(data);

            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });
        return deferred.promise;
    }

    return {
        searchUsersByName: searchUsersByName
    }
})