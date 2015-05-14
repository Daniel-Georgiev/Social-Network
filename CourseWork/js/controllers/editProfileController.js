app.controller('EditProfileController',  function EditProfileController($scope, userServices){
    var imageHtml = document.getElementById('adImageData').getElementsByTagName('img')[0];
    console.log(imageHtml)
    //$scope.editData.imageDataUrl = imageHtml ? imageHtml.currentSrc : "";
    $scope.editProfile = function(editData){
        userServices.editProfile(editData)
        console.log(editData)
    }
})