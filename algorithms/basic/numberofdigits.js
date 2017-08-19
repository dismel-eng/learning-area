
var App = (function () { 

    function App() {        
    }

    /** Recursive Mode */
    App.numOfDigitsR = function (num) {
        var tmp = Math.abs(num);

        if(tmp < 10)
            return 1;
        
        return 1 + App.numOfDigits(tmp / 10);
    }

    /** Iterative Mode */
    App.numOfDigitsI = function (num) {
        var count = 1;
        var tmp = Math.abs(num);

        while (tmp > 9) {
            tmp /= 10;

            count++;
        }

        return count;
    }

    /** Brute Force Mode */
    App.numOfDigitsB = function (num) {
        
        var tmp = Math.abs(num);

        if(tmp < 10)
            return 1;
        if(tmp < 100)
            return 2;
        if(tmp < 1000)
            return 3;
        if(tmp < 10000)
            return 4;
        if(tmp < 100000)
            return 5;
        if(tmp < 1000000)
            return 6;
        if(tmp < 10000000)
            return 7;
        if(tmp < 100000000)
            return 8;
        if(tmp < 1000000000)
            return 9;
    }

    return App;

 })();


console.log(App.numOfDigitsB(100));
