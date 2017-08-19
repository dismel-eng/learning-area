
var App = (function () { 
    function App() {        
    }

    /** Recursive Mode */
    App.sumNNumbersR = function (num) { 
        if(num === 1)
            return 1;
        return num + App.sumNNumbersR(num - 1);
    }

    /** Iterative Mode */
    App.sumNNumbersI = function (num) { 
        var sum = num * (num + 1) / 2;
        
        return sum;
    }

    return App;
 })();

 console.log(App.sumNNumbersR(5));