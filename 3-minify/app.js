// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log) {
    $log.info($scope)
    $scope.name = 'Uranka'
});

