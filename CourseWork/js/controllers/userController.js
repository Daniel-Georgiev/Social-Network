app.controller('UserController', function($scope, userServices){
    $scope.getOwnFriends = function(){
        userServices.getOwnFriends()
            .then(function(data){
                console.log(data);
            })
    }
})