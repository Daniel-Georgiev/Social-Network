// Reddit constructor function to encapsulate HTTP and pagination logic
app.factory('SocialNetworkPosts', function($http, baseServiceUrl) {
    var SocialNetworkPosts = function() {
        this.socialNetWorkPosts = [];
        this.busy = false;
        this.lastIndex = '';
        this.loadingMessage= 'Loading posts....';
    };

    SocialNetworkPosts.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;
        var url = baseServiceUrl+ 'me/feed?StartPostId=' + this.lastIndex + '&PageSize=5';

        $http.get(url).success(function(data) {

            for (var i = 0; i < data.length; i++) {
                this.socialNetWorkPosts.push(data[i]);
            }

            if (data.length == 0) {
                this.loadingMessage = 'No more posts.';
                return;
            }

            this.lastIndex = this.socialNetWorkPosts[this.socialNetWorkPosts.length-1].id;
            this.busy = false;
        }.bind(this));

    };

    return SocialNetworkPosts;
});