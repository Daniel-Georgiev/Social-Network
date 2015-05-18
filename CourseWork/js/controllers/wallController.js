app.controller('WallController', function UserController($scope, postServices, $location) {

    app.directive('backImg', function () {
        return function (scope, element, attrs) {
            var url = 'data:image/jpeg;base64,'+ attrs.backImg;
            element.css({
                'background-image': 'url(' + url + ')',
                'background-size': 'cover'
            });
        };
    });

    var username = $location.path().split('/users/')[1];
    postServices.getWall(username)
        .then(function (data) {
            $scope.friendsWall = data;
            console.log(data);
        })
    //TODO: figure out a way to fix the error
});