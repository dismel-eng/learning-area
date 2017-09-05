var App = (function () { 
    function App() {        
    }

    App.ceilFloor = function (array, x) { 
        var min = array[0], max = array[0];

        for (var i = 0; i < array.length; i++) {
            min = (array[i] < min) ? array[i] : min;
            max = (array[i] > max) ? array[i] : max;                       
        }
        var floor = min, ceil = max;
        
        if (x < min) {
            floor = 'Floor of x doesn’t exist';
        }
        if (x > max) {
            ceil = 'Ceil of x doesn’t exist';
        }

        for (var j = 0; j < array.length; j++) {
            floor = (array[j] > floor && array[j] <= x) ? array[j] : floor;
            ceil = (array[j] < ceil && array[j] >= x) ? array[j] : ceil;                
        }

        return [floor, ceil];
    }

    return App;
 })();
var array = [5, 6, 8, 9, 6, 5, 5, 6];
//var array = [41, 59, 26, 41, 58];
console.log(App.ceilFloor(array, 2));
