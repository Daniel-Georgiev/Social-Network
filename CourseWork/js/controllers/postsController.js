app.controller('PostsController', function PostsController($scope, postServices) {


    $scope.addNewPost = function(data){
        postServices.addNewPost(data)
            .then(function(data){
                console.log(data)
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

});