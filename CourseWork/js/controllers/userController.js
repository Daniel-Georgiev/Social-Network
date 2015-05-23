app.controller('UserController', function UserController($scope, userServices, $location) {
    userServices.getOwnFriends()
        .then(function (data) {
            $scope.ownFriends = data;

        })
    $scope.sendFriendRequest = function(userFulldata){
        userServices.sendFriendRequest(userFulldata.username)
            .then(function(data){
                userFulldata.hasPendingRequest = true;
            })
    }
    userServices.getFriendRequests()
        .then(function(data){
        $scope.friendRequests = data;
    })

    $scope.acceptFriendRequest = function(id){
        userServices.acceptFriendRequest(id)
            .then(function(data){
                $scope.ownFriends.push(data);
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
        userServices.getUserFullData(username)
            .then(function (data) {
                $scope.userFullData = data;
            })
        if( $scope.username != username) {
            userServices.getFriendFriends(username)
                .then(function (data) {
                    $scope.friendFriends = data;
                })

            userServices.getFriendFriendsPreview(username)
                .then(function (data) {
                    $scope.friendFriendsPreview = data;
                })
        }

    }



    $scope.editProfile = function(data){
        userServices.editProfile(data)
            .then(function(data){
                $location.path('#/home')
            })
        
    };

    userServices.getOwnData()
        .then(function(data){
            $scope.ownData = data;
        })

    $scope.changePassword = function(data){
        userServices.changePassword(data)
            .then(function(data){
                console.log(data);
                $location.path('#/home')
            })
    }


});