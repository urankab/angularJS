// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http', 
    function ($scope, $filter, $http) {
    $scope.handle = ''

    $scope.lowerCaseHandle = function () {
        return $filter('lowercase')($scope.handle)
    }

    $scope.characters = 5

    let rulesRequest = new XMLHttpRequest()
    rulesRequest.onreadystatechange = function () {
        $scope.$apply(function () {
            if (rulesRequest.readyState == 4 && rulesRequest.status == 200) {
                $scope.rules = JSON.parse(rulesRequest.responseText)
            }
        })
    }

    rulesRequest.open("GET", "http://localhost:5000/rules", true)
    rulesRequest.send()

}]);
