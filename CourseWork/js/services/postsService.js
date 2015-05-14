app.factory('postServices', function($http, baseServiceUrl, $q) {

    function getNewsFeed(){
        var deferred = $q.defer();
        $http.get(baseServiceUrl+ 'me/feed?StartPostId&PageSize=7')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function postComment(id, data){
        $http.get(baseServiceUrl+ 'posts/' + id +'/comments', data)
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getPostComments(id){
        var deferred = $q.defer();
        $http.get(baseServiceUrl+ '/posts/'+ id+ '/comments')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    return{
        getNewsFeed: getNewsFeed,
        postComment: postComment,
        getPostComments: getNewsFeed
    }
})
