// MODULE
let angularApp = angular.module('angularApp', []);

//CONTROLLERS
// Notice this controller is not using the array params for $scope and $log, this 
// will be missed in a minifier without that injections!
angularApp.controller('mainController', function ($scope, $log) {
    $scope.name = 'Uranka'
    console.log($scope)
});

// Correct
angularApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    $scope.name = 'Uranka'
    console.log($scope)
}]);
