app.controller('WallController', function WallController($scope, postServices, $location) {

    var username = $location.path().split('/users/')[1];
    postServices.getWall(username)
        .then(function (data) {
            $scope.friendsWall = data;
            console.log(data);
        })
    //TODO: figure out a way to fix the error
});