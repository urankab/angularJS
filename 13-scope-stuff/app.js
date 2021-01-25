// MODULE
let angularApp = angular.module('angularApp', ['ngRoute']);


// ROUTES
angularApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })
})

// CONTROLLERS
angularApp.controller('mainController', ['$scope', 
function ($scope) {

    $scope.person = {
        name: 'Uranka',
        address: '123 Main St'
    }
    
}]);


// DIRECTIVES
angularApp.directive("searchResult", function() {
    return {
        templateUrl: 'directives/searchResult.html',
        scope: {
            personName: "@",
            personAddress: "@"
        }
    }
})