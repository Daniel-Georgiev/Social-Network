// Reddit constructor function to encapsulate HTTP and pagination logic
app.factory('SocialNetworkPosts', function($http, baseServiceUrl) {
    var SocialNetworkPosts = function() {
        this.posts = [];
        this.busy = false;
        this.lastIndex = '';
    };

    SocialNetworkPosts.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;
        var url = baseServiceUrl+ 'me/feed?StartPostId=' + this.lastIndex + '&PageSize=7';

        $http.get(url).success(function(data) {
            console.log(data);
            var posts = data;
            for (var i = 0; i < posts.length; i++) {
                this.posts.push(posts[i]);
            }
            this.lastIndex = this.posts[this.posts.length-1].id;
            this.busy = false;
        }.bind(this));

    };

    return SocialNetworkPosts;
});