app.controller('UserController', function UserController($scope, userServices) {
    userServices.getOwnFriends()
        .then(function (data) {
            $scope.ownFriends = data;

        })


    userServices.getNewsFeed()
        .then(function(data){
            $scope.newsFeed = data;
        })

});