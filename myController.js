const app = angular.module('myApp', []);
app.controller("mainController", ["$scope", "$http", function($scope, $http){
    
    sampleCodeDoc = 'sampleCode/';
    codes = ['helloWorld.c', 'variables.c', 'inputOutput.c', 'if.c', 'switch.c', 'for.c' ];


    $http.get('cProgram.json').then(function (response){
        $scope.cProgram = response.data;
        console.log($scope.cProgram);
	}, function (err){
        console.log(err);
    });
    for(let i = 0 ; i < codes.length ; i++){
        $http.get(sampleCodeDoc + codes[i]).then(function (response){
            $scope.cProgram.cardsInfo[i].code = response.data
        }, function(err){
            console.log(err);
        });
    }
}]);