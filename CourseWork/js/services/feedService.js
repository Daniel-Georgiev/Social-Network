// Reddit constructor function to encapsulate HTTP and pagination logic
app.factory('FeedPosts', function($http, baseServiceUrl) {

    var FeedPosts = function() {
        this.feedPosts = [];
        this.busy = false;
        this.lastIndex = '';
        this.loadingMessage= 'Loading posts....';
    };

    FeedPosts.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;
        var url = baseServiceUrl+ 'me/feed?StartPostId=' + this.lastIndex + '&PageSize=5';

        $http.get(url).success(function(data) {

            for (var i = 0; i < data.length; i++) {
                this.feedPosts.push(data[i]);
            }

            if (data.length == 0) {
                this.loadingMessage = 'No more posts.';
                return;
            }

            this.lastIndex = this.feedPosts[this.feedPosts.length-1].id;
            this.busy = false;
        }.bind(this));

    };

    return FeedPosts;
});