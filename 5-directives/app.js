// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.handle = ''

    console.log($scope)
}]);
