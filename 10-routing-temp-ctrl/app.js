// MODULE
let angularApp = angular.module('angularApp', ['ngRoute']);


// ROUTES
angularApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })
 
    .when('/second', {
        templateUrl: 'second.html',
        controller: 'secondController'
    })
})


// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$location', 
function ($scope, $location) {
    console.log($location.path())
}]);

angularApp.controller('secondController', ['$scope', '$location', 
function ($scope, $location) {
    console.log($location.path())
}]);