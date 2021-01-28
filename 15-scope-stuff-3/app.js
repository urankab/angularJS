// MODULE
let angularApp = angular.module('angularApp', []);


// CONTROLLERS
angularApp.controller('mainController', ['$scope', 
function ($scope) {
    
    $scope.person = {
        name: 'Uranka',
        address: '123 Tomato St',
        city: 'Calgary',
        province: 'Alberta',
        postal_code: '123123'
    }

    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.province +
        ', ' + person.postal_code
    }
    
}]);


// DIRECTIVES
angularApp.directive("searchResult", function() {
    return {
        templateUrl: 'directives/searchResult.html',
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        }
    }
})