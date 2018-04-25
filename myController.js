const app = angular.module('myApp', []); 
app.controller("mainController", ["$scope", "$http", function($scope, $http){
    
    let sampleCodeDoc = 'sampleCode/';
    let codes = ['helloWorld.c', 'variables.c', 'inputOutput.c', 'if.c', 'switch.c', 'for.c', 'while.c' ];
    let instructionsDoc = 'instructions/';
    let instructions = ['helloWorld.txt', 'variables.txt', 'inputOutput.txt', 'if.txt' , 'switch.txt', 'for.txt', 'while.txt'];

    $scope.visibilty = {
        "Cbasis" : 0,
        "codePratice" : 0
    } 

    $scope.showDetails = function( showOne ){
        switch(showOne)
        {
            case 0:
                if($scope.visibilty.Cbasis)
                    $scope.visibilty.Cbasis = 0;
                else    $scope.visibilty.Cbasis = 1;
                $scope.visibilty.codePratice = 0;
                break;
            case 1:
                if($scope.visibilty.codePratice)
                    $scope.visibilty.codePratice = 0;
                else    $scope.visibilty.codePratice = 1;
                $scope.visibilty.Cbasis = 0;
                break;
            default :
                $scope.visibilty.Cbasis = 0;
                $scope.visibilty.codePratice = 0;
                break;
        }
    }

    $http.get('cProgram.json').then(function (response){
        $scope.cProgram = response.data;
        console.log($scope.cProgram);
	}, function (err){
        console.log(err);
    });
    for(let i = 0 ; i < codes.length ; i++){
        /*  抓sample code */
        $http.get(sampleCodeDoc + codes[i]).then(function (response){
            $scope.cProgram.cardsInfo[i].code = response.data
        }, function(err){
            console.log(err);
        });

        /* 抓說明檔文字 */
        if(i > instructions.length)
            continue;
        $http.get(instructionsDoc + instructions[i]).then(function (response){
            $scope.cProgram.cardsInfo[i].instructions = response.data
        }, function(err){
            console.log(err);
        });
    }

}]);