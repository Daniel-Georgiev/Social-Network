app.controller('UserController', function UserController($scope, userServices, $location) {
    userServices.getOwnFriends()
        .then(function (data) {
            $scope.ownFriends = data;

        })

    var username = $location.path().split('/users/')[1];
    userServices.getFriendFriends(username)
        .then(function(data){
            $scope.friendFriends = data;
        })
    //TODO: figure out a way to fix the error




});