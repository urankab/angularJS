// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    $scope.handle = ''

    $scope.lowerCaseHandle = function () {
        return $filter('lowercase')($scope.handle)
    }

    $http.get('http://localhost:5000/rules')
        .then(function (response) {
            $scope.rules = response.data
        }, function (response) {
            console.log('Something went wrong', response)
        });

    $scope.newRule = ''
    $scope.addRule = function () {
        $http.post('http://localhost:5000/rules', { content: $scope.newRule })
            .then(function (response) {
                location.reload()
            }, function (response) {
                console.log('Something went wrong', response)
            });
    }

}]);
