app.controller('EditProfileController', function($scope, userServices){

    $scope.editProfile = function(editData){
        userServices.editProfile(editData)
        console.log(editData)
    }
})