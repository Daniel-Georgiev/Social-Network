// Reddit constructor function to encapsulate HTTP and pagination logic
app.factory('SocialNetwork', function($http, baseServiceUrl, $q) {
    var SocialNetwork = function() {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    SocialNetwork.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;
        //var url = baseServiceUrl+ 'me/feed?StartPostId='+this.after+'&PageSize=7';
        var url = baseServiceUrl+ 'me/feed?StartPostId=&PageSize=7';

        $http.get(url).success(function(data) {
            this.items = data;
            this.after = this.items[this.items.length-1].id;
            //console.log(this.after)
            this.busy = false;
        }.bind(this));

    };

    return SocialNetwork;
});