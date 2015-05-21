// Reddit constructor function to encapsulate HTTP and pagination logic
app.factory('WallPosts', function($http, baseServiceUrl) {

    var WallPosts = function(username) {
        this.wallPosts = [];
        this.busy = false;
        this.lastIndex = '';
        this.loadingMessage= 'Loading posts....';
        this._username = username;

    };

    WallPosts.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;

        var url = baseServiceUrl+ 'users/'+ this._username +'/wall?StartPostId='+ this.lastIndex +'&PageSize=5';


        $http.get(url).success(function(data) {

            for (var i = 0; i < data.length; i++) {
                this.wallPosts.push(data[i]);
            }

            if (data.length == 0) {
                this.loadingMessage = 'No more posts.';
                return;
            }

            this.lastIndex = this.wallPosts[this.wallPosts.length-1].id;
            this.busy = false;
        }.bind(this));

    };

    return WallPosts;
});