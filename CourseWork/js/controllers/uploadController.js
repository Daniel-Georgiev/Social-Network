app.controller('UploadCtrl', function UploadCtrl($scope) {
    $scope.profilePicture = function(fileInputField) {

        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.ownData.profileImageData = reader.result;
                $(".profileImage").html("<img src='" + reader.result + "' id='uploadProfileImg'>");
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
                $(".coverImage").html("<img src='" + reader.result + "' id='uploadCoverImg'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

});