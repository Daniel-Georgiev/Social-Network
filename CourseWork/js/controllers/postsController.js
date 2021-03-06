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

    $scope.editPost = function(post){
        postServices.editPost(post)
            .then(function(data){
                post.postContent = data;
            })
    }

    $scope.deletePost = function(post){
        postServices.deletePost(post)
            .then(function(data){
               var index = $scope.wallPosts.wallPosts.indexOf(post);
                if(index >=0 && index != -1) {
                    $scope.wallPosts.wallPosts.splice(index, 1);
                }
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

    $scope.deleteComment = function(post, comment){
        postServices.deleteComment(post,comment)
            .then(function(data){
                var index = post.comments.indexOf(comment);
                post.comments.splice(index,1);
            })
    }

});