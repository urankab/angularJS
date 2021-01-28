// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.handle = ''

    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle)
    }

    $scope.rules = [
      
        { content: "Must be 5 characters" },
        { content: "Must not be used elsewhere" },
        { content: "Must be cool" }
        
    ];
    
    console.log($scope.rules);

}]);
