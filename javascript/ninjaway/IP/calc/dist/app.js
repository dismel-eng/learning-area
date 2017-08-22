"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mcalc = require("./calc");
var App = (function () {
    function App() {
    }
    App.main = function () {
        var num1 = 15;
        var num2 = 3;
        var calc = new mcalc.Calc(num1, num2);
        console.log(calc.Sum());
        console.log(calc.Minus());
        console.log(calc.Times());
        console.log(calc.Division());
    };
    return App;
}());
App.main();
//# sourceMappingURL=app.js.map