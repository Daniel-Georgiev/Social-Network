app.controller('SearchController', function SearchController($scope, searchService) {
    $scope.searchByName = function(username){
        searchService.searchUsersByName(username)
            .then(function(data){
                $scope.searchResults = data;
            })
    }
});