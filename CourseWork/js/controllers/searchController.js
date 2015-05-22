app.controller('SearchController', function SearchController($scope, searchService, $timeout) {
    $scope.searchByName = function(username){
        searchService.searchUsersByName(username)
            .then(function(data){
                $scope.searchResults = data;
            })
    }

    $scope.hideResults = function(){
        $timeout(function(){
            $scope.showSearchResults = !$scope.showSearchResults;
        }, 500)
    }
});