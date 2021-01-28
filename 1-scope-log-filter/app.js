// MODULE - add dependencies in the square brackets
let angularApp = angular.module('angularApp', []);

// CONTROLLER - controls and acts as a brain for the view 
angularApp.controller('mainController', function ($scope, $log, $filter) {
    /** $scope is a built-in object you can assign values/functions too ...
        properties made in the controller that can be referenced in the view */
    $scope.name = 'Everyone'
    
    // $filter is used to format data displayed to the user
    $scope.formattedName = $filter('uppercase')($scope.name)

    // $log is used to simplify debugging and troubleshooting, pretty much console.log
    $log.log('Hi!')
    $log.info($scope.name)
    $log.info($scope)

    $scope.multiplyPlz = function(a, b) {
        let result = a * b

        if (result < 9000) {
            $log.info(result)
        } else {
            $log.warn('Over 9000!!!')
        }
    }

    // $scope.multiplyPlz(2, 1)
    $scope.multiplyPlz(9000, 1)

    console.log($scope)
});


