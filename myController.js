const app = angular.module('myApp', []);
app.controller("mainController", ["$scope", function($scope){
    $scope.cProgram = {
        "title" : "C language", 
        "subtitle" : "語法補充說明!",
        "cardsInfo" : [{
            "title" : "Hello world!", 
            "subtitle" : "一個最簡單的C程式碼", 
            "code" : '\n#include <stdio.h>\nint main()\n{\n\tprintf("Hello World!");\n\treturn 0;\n}\n', 
            "instructions" : "", 
            "viewCode": 0,
            "viewInstruction": 0,
        }, {
            "title" : "Variables --變數", 
            "subtitle" : "靠他把資料記錄在記憶體中!", 
            "codeInfo" : '', 
            "instructions" : "",
            "viewCode": 0,
            "viewInstruction": 0,
        }, {
            "title" : "If else", 
            "subtitle" : "如果...否則...判斷式", 
            "codeInfo" : '', 
            "instructions" : "",
            "viewCode": 0,
            "viewInstruction": 0,
        }]
    };
}]);