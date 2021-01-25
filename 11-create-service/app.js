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
    
    $scope.name = nameService.name

    $log.log(nameService.name)
    $log.log(nameService.nameLength())
    
}]);

angularApp.controller('secondController', ['$scope', '$log', 'nameService', 
function ($scope, $log, nameService) {

    $scope.name = nameService.name

}]);

