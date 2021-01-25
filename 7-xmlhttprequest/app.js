// MODULE
let angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

    $scope.handle = ''

    $scope.lowerCaseHandle = function () {
        return $filter('lowercase')($scope.handle)
    }

    $scope.characters = 5

    /**The $scope.$apply() function takes a function as parameter which is executed,
     and after that $scope.$digest() is called internally. That makes it easier for you 
     to make sure that all watches are checked, and thus all data bindings refreshed. */
     
    let rulesRequest = new XMLHttpRequest()

    rulesRequest.open("GET", "http://localhost:5000/rules", true)

    rulesRequest.onreadystatechange = function () {
        $scope.$apply(function () {
            if (rulesRequest.readyState == 4 && rulesRequest.status == 200) {
                $scope.rules = JSON.parse(rulesRequest.responseText)
            }
        })
    }
    rulesRequest.send()

}])
