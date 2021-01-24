// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    $scope.name = 'Main'


}]);

angularApp.controller('secondController', ['$scope', function ($scope) {
    $scope.name = 'Second'

}]);