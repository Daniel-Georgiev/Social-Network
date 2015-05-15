app.controller('UserController', function UserController($scope, userServices) {
    userServices.getOwnFriends()
        .then(function (data) {
            $scope.ownFriends = data;
            console.log(data);

        })




});