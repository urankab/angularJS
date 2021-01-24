// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log, $filter) {
    $scope.name = 'Uranka'
    
    // $filter is used to format data displayed to the user
    $scope.formattedName = $filter('uppercase')($scope.name)

    // $log is used to simplify debugging and troubleshooting
    $log.log('Hi!')
    $log.info($scope.name)
    $log.info($scope.formattedName)

    $scope.multiplyPlz = function(a, b) {
        let result = a * b

        if (result < 9000) {
            $log.info(result)
        } else {
            $log.warn('Over 9000!!!')
        }
    }

    // $scope.multiplyPlz(2, 1)
    // $scope.multiplyPlz(9000, 1)

    console.log($scope)
});


