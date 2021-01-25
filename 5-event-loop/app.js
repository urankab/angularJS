// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    
    $scope.handle = ''

    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle)
    }

    // Creates a watch of some variable
    $scope.$watch('handle', function (oldValue, newValue) {
        console.log('Changed!')
        console.log('Old: ', oldValue)
        console.log('New: ', newValue)
    })

}]);
