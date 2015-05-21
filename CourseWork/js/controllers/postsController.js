app.controller('PostsController', function PostsController($scope, postServices) {

    //$scope.posts = new SocialNetworkPosts();

    $scope.addNewPost = function(data, username){
        var postContent = {
            postContent: data,
            username: username
        }
        postServices.addNewPost(postContent)
            .then(function(data){
                //$scope.feedPosts.feedPosts.unshift(data);

                $scope.wallPosts.wallPosts.unshift(data);
                $('#newPost > input').val('');
            })
    };

    $scope.addCommentToPost = function(postId, data){
        var postContent ={
            'commentContent': data
        };
        postServices.postComment(postId, postContent)
            .then(function(data){
                //postServices.getPostComments(postId)
                //    .then(function(data){
                //        $scope.comments = data;
                //    });
            })
    }

    $scope.likePost = function(postId){
        postServices.likePost(postId)
            .then(function(data){
                console.log('liked post')
            })
    }

    $scope.dislikePost = function(postId){
        postServices.dislikePost(postId)
            .then(function(data){
                console.log('post disliked');
            })


    }

});