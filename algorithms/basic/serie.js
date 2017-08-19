var App = (function () { 
    
    function App() {        
    }

    /** Calculate the sum of the first n terms of the series: 1*2*3 + 2*3*4 + 3*4*5 + …+ (n - 2) * (n - 1) * n; */
    App.serie = function (n) { 
        
        var count = n;
        var sum = 0;

        while (count > 3) {
            sum += count * (count - 1) * (count - 2);
            count--;
        }

        sum += 6;

        return sum;
    }

return App;
})();
    
    
console.log(App.serie(6));