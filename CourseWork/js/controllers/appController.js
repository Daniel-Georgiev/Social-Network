app.controller('AppController',function AppController($scope, $http, authService){
    if(sessionStorage['currentUser'] != undefined){
        $http.defaults.headers.common.Authorization = 'Bearer ' + authService.getCurrentUser().access_token;
    }
})