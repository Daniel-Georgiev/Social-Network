app.controller('FeedController', function FeedController($scope, postServices, FeedPosts) {
    $scope.feedPosts = new FeedPosts();

});