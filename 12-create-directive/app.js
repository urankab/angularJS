// MODULE
let angularApp = angular.module('angularApp', []);


// CONTROLLERS
angularApp.controller('mainController', ['$scope', 
function ($scope) {

    
}]);


//DIRECTIVES
angularApp.directive("searchResult", function() {
    return {
        template: '<a href="#" class="list-group-item">' +
        '<h4 class="list-group-item-heading">Doe, John</h4>' +
        '<p class="list-group-item-text">123 Main St. NY</p></a>'
    }
})