const app = angular.module('myApp', []);
app.controller("mainController", ["$scope", "$http", function($scope, $http){
    
    
    $http.get('cProgram.json').then(function (data){
        $scope.cProgram = data;
        console.log($scope.cProgram);
	}, function (err){
        console.log(err);
    });
}]);