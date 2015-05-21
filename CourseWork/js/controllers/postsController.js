app.controller('PostsController', function PostsController($scope, postServices, SocialNetworkPosts) {

    $scope.posts = new SocialNetworkPosts();

    $scope.addNewPost = function(data, username){
        var postContent = {
            postContent: data,
            username: username
        }
        postServices.addNewPost(postContent)
            .then(function(data){
                console.log(data)
            })
    };

    $scope.addCommentToPost = function(postId, data){
        var postContent ={
            'commentContent': data
        };
        postServices.postComment(postId, postContent)
            .then(function(data){
                //postServices.getPostComments(postId)
                //    .then(function(data){
                //        $scope.comments = data;
                //    });
            })
    }

});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});