app.controller('WallController', function WallController($scope, postServices, $location, WallPosts) {


    $scope.isMyFriend = false;

    var username = $location.path().split('/users/')[1];
    $scope.wallPosts = new WallPosts(username);




//TODO: figure out a way to fix the error
});