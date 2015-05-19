app.controller('FeedController', function FeedController($scope, postServices) {

    postServices.getNewsFeed()
        .then(function(data){
            $scope.newsFeed = data;
        });

    //$scope.newsFeed = news;
});