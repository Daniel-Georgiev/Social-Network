app.controller('PostsController', function PostsController($scope, postServices) {
    postServices.getPostComments(77)
        .then(function(data){
            $scope.comments = data;
        });

    $scope.addNewPost = function(data){
        postServices.addNewPost(data)
            .then(function(data){
                console.log(data)
            })
    };

})