// MODULE
let angularApp = angular.module('angularApp', []);


// ROUTES

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
            personObject: '='
        }
    }
})