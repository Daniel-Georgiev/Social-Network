app.controller('UploadCtrl', function UploadCtrl($scope) {
    $scope.profilePicture = function(fileInputField) {

        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.ownData.profileImageData = reader.result;
                $("#uploadProfileImg").attr('src', reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.coverPicture = function(fileInputField) {
        delete $scope.ownData.coverImageData;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.ownData.coverImageData = reader.result;
                $("#uploadCoverImg").attr('src', reader.result)
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

});