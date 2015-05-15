app.controller('PostsController', function UserController($scope, postServices, $location) {
    postServices.getNewsFeed()
        .then(function(data){
            $scope.newsFeed = data;
        });

    postServices.getPostComments(77)
        .then(function(data){
            $scope.comments = data;
        });

    $scope.addNewPost = function(data){
        postServices.addNewPost(data)
            .then(function(data){
                console.log('Post added' + data)
            })
    };

    var username = $location.path().split('/users/')[1];
    postServices.getWall(username)
        .then(function(data){
            $scope.friendsWall = data;
            console.log(data);
        })
    //TODO: figure out a way to fix the error
});