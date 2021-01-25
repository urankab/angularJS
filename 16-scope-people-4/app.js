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
angularApp.service('nameService', function () {
    let self = this

    this.name = 'Uranka B'
    this.nameLength = function () {
        return self.name.length
    }
})

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


angularApp.controller('secondController', ['$scope', '$log', 'nameService',
    function ($scope, $log, nameService) {


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