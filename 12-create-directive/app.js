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
        address: '13 Banana St'
    }
    
}]);


// DIRECTIVES
angularApp.directive("searchResult", function() {
    return {
        template: '<a href="#" class="list-group-item">' +
        '<h4 class="list-group-item-heading">Doe, John</h4>' +
        '<p class="list-group-item-text">123 Main St. NY</p></a>'
    }
})