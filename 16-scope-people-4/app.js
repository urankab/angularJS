// MODULE
let angularApp = angular.module('angularApp', []);


// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$http',
    function ($scope, $log, $http) {
        $scope.formattedAddress = function (person) {
            return person.address + ', ' + person.city + ', ' + person.province +
                ', ' + person.postal_code
        }

        $http.get('http://localhost:5000/people')
            .then(function (response) {
                $scope.people = response.data
            }, function (response) {
                console.log('Something went wrong', response)
            });
    }
]);


// DIRECTIVES
angularApp.directive("searchResult", function () {
    return {
        templateUrl: 'directives/searchResult.html',
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        }
    }
})