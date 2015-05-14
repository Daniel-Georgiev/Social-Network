app.controller('PostsController', function UserController($scope, postServices) {
    postServices.getNewsFeed()
        .then(function(data){
            $scope.newsFeed = data;
        })
    postServices.getPostComments(77)
        .then(function(data){
            $scope.comments = data;
        })
})