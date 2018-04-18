const app = angular.module('myApp', []);
app.controller("mainController", ["$scope", function($scope){
    $scope.cProgram = {
        "title" : "C start!", 
        "subtitle" : "C 程式語法範例 && 說明!",
        "cardsInfo" : [{
            "title" : "Hello world!", 
            "subtitle" : "一個最簡單的C程式碼", 
            "code" : '\n#include <stdio.h>\nint main()\n{\n\tprintf("Hello World!");\n\treturn 0;\n}\n', 
            "instructions" : "\tmain()是C語言程式進入點，每一個 C 的程式都必須有一個 main 函數，後面的小括號 ()是給函數的參數，\n此處先不給參數，而下面的一對大括號 {} 則是main函數的程式主體。\n\
\tprintf()為系統提供的輸出函式，可將雙引號內的字串印在螢幕上，也就是把Hello World!印出來，為了要\n使用此函式，需要先把前人寫好的code include進來，所以在第一行加入#include <stdio.h>。\n\
\tmain 前面的 int 代表 main 函數的執行結果要以「整數」(Integer)傳回給呼叫它的程式， 而程式主體中\n的 return 0;代表程式將結果 0 傳回，請注意程式主體的每一行敘述必須以分號 ; 做為結束。", 
            "viewCode": 0,
            "viewInstruction": 0,
        }, {
            "title" : "Variables 變數", 
            "subtitle" : "靠它把資料記錄在記憶體中!", 
            "code" : '\n#include <stdio.h>\nint main()\n{\n\tint a, b = 5;\n\tfloat score = 87.9487;\n\tchar c[50]="Hello World!"\n\tprintf("a = %d, b = %d\\n", a, b);\n\tprintf("score = %f\\n", score);\n\tprintf("score = %.2f\\n", score);\n\tprintf("%s\\n", c);"\n\treturn 0;\n}\n', 
            "instructions" : '\tC是一個資料型態嚴謹的程式，每個變數都要有它的型態。int 是指整數(integer)型態，所以 a 和 b 皆為整數\n型態，而 b = 5 是指讓b的值是5。了解之後，score這個變數的型態就好理解了，是一個float型態的變數，float是\n指浮點數(floating point number)，可以有小數點的型態。\n\
\t而最後一個char 指的是字元(character)，[50]指的是50個連在一起的變數，稱之為陣列(array)，所以變數c 是\n\
可以存放最多50個字元的變數。後面三行的printf則是顯示他們的值，雙引號""中間有奇怪的%d %f %s等等，是什\n\
麼呢? 這些是用來把變數的值給到要輸出的字串裡，而 %d 是傳整數(integer)型態的變數(例如a, b)，%f 則是浮點數\n\
(float)，下面有個多了 .2的意思是指顯示兩位的小數點，%s 則是字串(string)。\n\
\t** 額外補充 ** \n\
%lld 是對長整數(long long int 也可以稱為long long)，%lf是對雙精度浮點數(double，float是單精度)。\n',
            "viewCode": 0,
            "viewInstruction": 0,
        }, {
            "title" : "If else", 
            "subtitle" : "如果...否則...判斷式", 
            "code" : '', 
            "instructions" : "",
            "viewCode": 0,
            "viewInstruction": 0,
        }, {
            "title" : "switch", 
            "subtitle" : "如果...否則...判斷式", 
            "code" : '', 
            "instructions" : "",
            "viewCode": 0,
            "viewInstruction": 0,
        },{
            "title" : "for", 
            "subtitle" : "當重複做一樣的事情時...", 
            "code" : '', 
            "instructions" : "",
            "viewCode": 0,
            "viewInstruction": 0,
        },{
            "title" : "while", 
            "subtitle" : "也要重複做一樣的事情時...", 
            "code" : '', 
            "instructions" : "",
            "viewCode": 0,
            "viewInstruction": 0,
        }]
    };
}]);