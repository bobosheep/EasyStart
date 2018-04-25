angular.module('myApp').directive('cBeginInfo', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/c-begin-info.html',
    };
}).directive('menu', function(){
    return {
        templateUrl: 'templates/menu/menu.html',
    };
}).directive('cBasis', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/menu/c-basis.html',
    };
}).directive('cPractice', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/menu/c-practice.html',
    };
}).directive('cProblems', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/menu/c-problems.html',
    };
}).directive('cBasisDetails', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/c-basis-details.html',
    };
});
