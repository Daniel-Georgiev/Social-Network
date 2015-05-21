app.controller('PostsController', function PostsController($scope, postServices) {
    $scope.addNewPost = function(data, username){
        var postContent = {
            postContent: data,
            username: username
        }
        postServices.addNewPost(postContent)
            .then(function(data){

                $scope.wallPosts.wallPosts.unshift(data);
                $('#newPost > input').val('');
            })
    };

    $scope.addCommentToPost = function(post, data){
        var postContent ={
            'commentContent': data
        };
        postServices.postComment(post.id, postContent)
            .then(function(data){
               post.comments.push(data);
                $('.newComment > input').val('');
            })
    }

    $scope.getAllPostComments = function(post){
        postServices.getPostComments(post.id)
            .then(function(data){
                post.comments = data;
            })
    }

    $scope.likePost = function(post){

        postServices.likePost(post.id)
            .then(function(data){
                post.liked = true;
                post.likesCount++;
            })
    }

    $scope.dislikePost = function(post){
        postServices.dislikePost(post.id)
            .then(function(data){
                post.liked = false;
                post.likesCount--;
            })


    }

    $scope.likeComment = function(post, comment){
        postServices.likeComment(post, comment)
            .then(function(data){
                comment.liked = true;
                comment.likesCount++;
            })
    }

    $scope.dislikeComment = function(post, comment){
        postServices.dislikeComment(post, comment)
            .then(function(data){
                comment.liked = false;
                comment.likesCount--;
            })
    }

});