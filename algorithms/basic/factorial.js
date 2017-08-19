
var App = (function () { 
    function App() {        
    }

    /** Recursive Mode */
    App.factorialR = function (num) { 

        if(num === 0 || num === 1)
            return 1;
        if(num === 2)
            return 2;

        return num * App.factorialR(num - 1);
    }

    /** Iterative Mode */
    App.factorialI = function (num) { 
        var factorial = num;
        
        if(num === 0 || num === 1)
            return 1;
        if(num === 2)
            return 2;

        while (num > 1) {
            factorial *= --num;                
        }

        return factorial;
    }

    return App;
 })();

 console.log(App.factorialI(5));
 