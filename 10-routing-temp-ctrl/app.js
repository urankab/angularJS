// MODULE
let angularApp = angular.module('angularApp');


// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$location', 
function ($scope, $log, $location) {
    console.log($location.path())
    
}]);



