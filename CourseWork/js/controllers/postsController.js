app.controller('PostsController', function UserController($scope, postServices) {
    postServices.getNewsFeed()
        .then(function(data){
            $scope.newsFeed = data;
        })
    postServices.getPostComments(77)
        .then(function(data){
            $scope.comments = data;
        })
    $scope.addNewPost = function(data){
        postServices.addNewPost(data)
            .then(function(data){
                console.log('Post added' + data)
            })
    }
})