// MODULE
let angularApp = angular.module('angularApp', []);


// CONTROLLERS
angularApp.controller('mainController', ['$scope', 
function ($scope) {

    $scope.person = {
        name: 'Uranka',
        address: '123 Main St'
    }
    
}]);


// DIRECTIVES
// It is nice to create a different folder to keep directives organized!
// Specify the path in templateUrl
angularApp.directive("searchResult", function() {
    return {
        templateUrl: 'directives/searchResult.html',
        scope: {
            personName: "@",
            personAddress: "@"
        }
    }
})