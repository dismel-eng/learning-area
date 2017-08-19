var App = (function () { 
    function App() {        
    }

    App.traceA = function () { 
        var x = 0, y = 0;

        do {
            
            if (x > 4) {
                x %= 4;
                y++;
            } else {
                x++;
            }

            console.log(x+' \n');
            
        } while (y < 2);
        return x;
    }

    App.traceB = function () { 
        var x = 0, y = 1;

        while (y != 3) {
            x++;
            console.log(x+' \n');
            if (x < 3) continue;

            x = y;
            console.log(x+' \n');
            y++;
        }
        return x;
    }

    return App;
})();

console.log(App.traceB());
