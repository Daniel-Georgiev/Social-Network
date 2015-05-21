app.controller('UserController', function UserController($scope, userServices, $location) {
    userServices.getOwnFriends()
        .then(function (data) {
            $scope.ownFriends = data;

        })
    $scope.sendFriendRequest = function(name){
        userServices.sendFriendRequest(name)
            .then(function(data){
                console.log(data);
            })
    }
    userServices.getFriendRequests()
        .then(function(data){
        $scope.friendRequests = data;
    })

    $scope.acceptFriendRequest = function(id){
        userServices.acceptFriendRequest(id)
            .then(function(data){
                console.log(data);
            })
    }

    $scope.declineFriendRequest = function(id){
        userServices.declineFriendRequest(id)
            .then(function(data){
                console.log(data);
            })
    }


    var username = $location.path().split('/users/')[1];
    if(username != undefined) {
        userServices.getFriendFriends(username)
            .then(function (data) {
                $scope.friendFriends = data;
            })

        userServices.getUserFullData(username)
            .then(function (data) {
                $scope.userFullData = data;
            })

    }

    $scope.editProfile = function(data){
        userServices.editProfile(data)
        
    };

    userServices.getOwnData()
        .then(function(data){
            $scope.ownData = data;
        })


});