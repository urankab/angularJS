// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    
    $scope.handle = ''

    // $filter is used to format data displayed to the user
    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle)
    }

    // $watch creates a watch of some variable ... 
    $scope.$watch('handle', function (newValue, oldValue) {
        console.log('Changed!')
        console.log('New: ', newValue)
        console.log('Old: ', oldValue)
    })

}]);
