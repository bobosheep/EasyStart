const app = angular.module('myApp', []);
app.controller("mainController", ["$scope", "$http", function($scope, $http){
    $scope.cProgram = {
        "title" : "C start!", 
        "subtitle" : "C 程式語法範例 && 說明!",
        "beginInfo" : {
            "title" : "code練功環境",
            "content" : "練習寫程式總需要一個地方可以練習吧，但在哪裡呢? 才不告訴你勒。開個小玩笑，下面是對不同作業系統(OS)有不同的練習環境。",
            "windowsContent" : "\t以寫一個簡單C程式來講，Windows我最推薦的IDE(Integrated Development Environment 整合開發環境)是Code::blocks，因為我都用它!當然在以前也用過另外一個IDE -- Dev-C++，不過忘記為什麼跳槽到Code::Blocks了。", 
            "linuxContent" : "\t這邊以文字介面來推薦，linux系統有內建文書編輯器 vi (類似windows的記事本)還有它的進階版的vi vim(通常要自己安裝，安裝指令sudo apt install vim)。我個人在linux\"文字環境\"下都是使用vim。vi和vim的使用方式可以參考鳥哥(對linux系統不熟的人也可以參考)。"
        },
        "cardsInfo" : [{
            "title" : "Hello world!", 
            "content" : "一個最簡單的C程式碼",
            "code" : "\n#include <stdio.h>\nint main()\n{\n\tprintf(\"Hello World!\");\n\treturn 0;\n}\n", 
            "instructions" : "\tmain()是C語言程式進入點，每一個 C 的程式都必須有一個 main 函數，後面的小括號 ()是給函數的參數，\n此處先不給參數，而下面的一對大括號 {} 則是main函數的程式主體。\n\tprintf()為系統提供的輸出函式，可將雙引號內的字串印在螢幕上，也就是把Hello World!印出來，為了要\n使用此函式，需要先把前人寫好的code include進來，所以在第一行加入#include <stdio.h>。\n\tmain 前面的 int 代表 main 函數的執行結果要以「整數」(Integer)傳回給呼叫它的程式， 而程式主體中\n的 return 0;代表程式將結果 0 傳回，請注意程式主體的每一行敘述必須以分號 ; 做為結束。", 
            "hasGrammar":0,
            "viewCode": 0,
            "viewInstruction": 0, 
            "viewGrammar": 0
        }, {
            "title" : "Variables 變數", 
            "content" : "靠它把資料記錄在記憶體中!",
            "code" : "\n#include <stdio.h>\nint main()\n{\n\tint a, b = 5;\n\tfloat score = 87.9487;\n\tchar c[50]=\"Hello World!\"\n\tprintf(\"a = %d, b = %d\\n\", a, b);\n\tprintf(\"score = %f\\n\", score);\n\tprintf(\"score = %.2f\\n\", score);\n\tprintf(\"%s\\n\", c);\n\treturn 0;\n}\n", 
            "instructions" : "\tC是一個資料型態嚴謹的程式，每個變數都要有它的型態。int 是指整數(integer)型態，所以 a 和 b 皆為整數\n型態，而 b = 5 是指讓b的值是5。了解之後，score這個變數的型態就好理解了，是一個float型態的變數，float是\n指浮點數(floating point number)，可以有小數點的型態。\n\t而最後一個char 指的是字元(character)，[50]指的是50個連在一起的變數，稱之為陣列(array)，所以變數c 是\n可以存放最多50個字元的變數。後面三行的printf則是顯示他們的值，雙引號\"\"中間有奇怪的%d %f %s等等，是什\n麼呢? 這些是用來把變數的值給到要輸出的字串裡，而 %d 是傳整數(integer)型態的變數(例如a, b)，%f 則是浮點數\n(float)，下面有個多了 .2的意思是指顯示兩位的小數點，%s 則是字串(string)。\n\t** 額外補充 ** \n%lld 是對長整數(long long int 也可以稱為long long)，%lf是對雙精度浮點數(double，float是單精度)。\n",
            "hasGrammar":0,
            "viewCode": 0,
            "viewInstruction": 0, 
            "viewGrammar": 0
        }, {
            "title" : "If else", 
            "content" : "如果...否則...判斷式", 
            "grammar": "if(條件式)\n{\n    do something;\n    do something;\n}\nelse if(條件式)\n{\n    do something;\n}\nelse if(條件式)\n...\n...\nelse\n{\n    do something;\n}\n", 
            "code" : "#include<stdio.h>\n\nint main()\n{\n  int a = 0, b = 1, c = 2;\n\n  if(a == b)\n  {\n    printf(\"a is equal to b!\\n\");\n  }\n  else if(a < b)\n  {\n    printf(\"a is smaller than b!\\n\");\n  }\n  else\n  {\n    printf(\"a is bigger than b!\\n\");\n  }\n\n  if(a == b || a == c)\n  {\n    printf(\"a is equal to b OR a is equal to c!\\n\");\n  }\n  return 0;\n}", 
            "instructions" : "",
            "hasGrammar":1,
            "viewCode": 0,
            "viewInstruction": 0, 
            "viewGrammar": 0
        }, {
            "title" : "switch", 
            "content" : "挑一個要的選項~", 
            "grammar": "switch (變數名稱或運算式)\n{\n     case 符合數字或字元:\n         do something;\n         break;\n     case 符合數字或字元:\n         do something;\n         break;\n     default:\n         do something;\n}\n", 
            "code" : "", 
            "instructions" : "",
            "hasGrammar":1,
            "viewCode": 0,
            "viewInstruction": 0, 
            "viewGrammar": 0
        },{
            "title" : "for", 
            "content" : "當重複做一樣的事情時...",
            "grammar": "",  
            "code" : "", 
            "instructions" : "",
            "hasGrammar":1,
            "viewCode": 0,
            "viewInstruction": 0, 
            "viewGrammar": 0
        },{
            "title" : "while", 
            "content" : "也要重複做一樣的事情時...", 
            "grammar": "", 
            "code" : "", 
            "instructions" : "",
            "hasGrammar":1,
            "viewCode": 0,
            "viewInstruction": 0, 
            "viewGrammar": 0
        }]
    };
    
    $http.get('cProgram.json').then(function (data){
        $scope.cProgram = data;
        console.log($scope.cProgram);
	}, function (err){
        console.log(err);
    });
}]);