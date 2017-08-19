var App = (function () { 
    
    function App() {        
    }

    /** The following is a simple prime check algorithm for not very large numbers. */
    App.IsPrime = function (num){
        let n = num;
        let i = 5;
        
        if(n <= 1)
            return false;
        if(n <= 3)
            return true;        
        if(n % 2 === 0 || n % 3 === 0)
            return false;

        while (i * i <= n) {
            
            if(n % i === 0 || n % (i + 2) === 0)
                return false;
            
            i = i + 6;            
        }

        return true;
    }

return App;
})();
    
    
console.log(App.IsPrime(233));