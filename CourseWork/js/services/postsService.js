app.factory('postServices', function($http, baseServiceUrl, $q) {

    function addNewPost(postContent){
        var deferred = $q.defer();

        $http.post(baseServiceUrl+ 'posts', postContent)
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getPostById(id){
        var deferred = $q.defer();
        $http.get(baseServiceUrl+ 'Posts/'+id)
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }
    function likePost(id){
        var deferred = $q.defer();
        $http.post(baseServiceUrl+ 'posts/' + id +'/likes')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function dislikePost(id){
        var deferred = $q.defer();
        $http.delete(baseServiceUrl+ 'posts/' + id +'/likes')
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

    function editPost(post){
        var deferred = $q.defer();
        $http.put(baseServiceUrl+ 'posts/' + post.id, post.postContent)
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function deletePost(post){
        var deferred = $q.defer();
        $http.delete(baseServiceUrl+ 'posts/' + post.id)
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function postComment(id, data){
        var deferred = $q.defer();
        $http.post(baseServiceUrl+ 'posts/' + id +'/comments', data)
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function likeComment(post,comment){
        var deferred = $q.defer();
        $http.post(baseServiceUrl+ 'posts/'+post.id+'/comments/'+ comment.id +'/likes')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function dislikeComment(post, comment){
        var deferred = $q.defer();
        $http.delete(baseServiceUrl+ 'posts/'+post.id+'/comments/'+ comment.id +'/likes')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }


    function getWall(username){
        var deferred = $q.defer();
        $http.get(baseServiceUrl+ 'users/'+ username +'/wall?StartPostId=&PageSize=5')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }



    return{
        addNewPost: addNewPost,
        postComment: postComment,
        getPostComments: getPostComments,
        likePost: likePost,
        dislikePost: dislikePost,
        editPost: editPost,
        deletePost: deletePost,
        likeComment: likeComment,
        dislikeComment: dislikeComment,
        getPostById: getPostById,
        getWall: getWall
    }
});
