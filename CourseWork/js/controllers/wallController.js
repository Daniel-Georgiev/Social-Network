app.controller('WallController', function WallController($scope, postServices, $location) {

    $scope.isMyFriend = false;

    var username = $location.path().split('/users/')[1];
    postServices.getWall(username)
        .then(function (data) {
            $scope.friendsWall = data;
            $scope.isMyFriend = true;
        });



    //TODO: figure out a way to fix the error
});