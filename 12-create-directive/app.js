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

// CUSTOM SERVICE
angularApp.service('nameService', function() {
    let self = this

    this.name = 'Uranka B'
    this.nameLength = function() {
        return self.name.length
    }
})

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', 'nameService', 
function ($scope, $log, nameService) {
    $scope.person = {
        name: 'Uranka',
        address: '13 Banana St'
    }
    
}]);


angularApp.controller('secondController', ['$scope', '$log', 'nameService', 
function ($scope, $log, nameService) {

    
}]);

// DIRECTIVES
angularApp.directive("searchResult", function() {
    return {
        template: '<a href="#" class="list-group-item">' +
        '<h4 class="list-group-item-heading">Doe, John</h4>' +
        '<p class="list-group-item-text">123 Main St. NY</p></a>'
    }
})