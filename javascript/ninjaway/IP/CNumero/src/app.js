"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mdate = require("./cnumber");
var App = (function () {
    function App() {
    }
    App.main = function () {
        var mnumber = new mdate.CNumber(8);
        console.log(mnumber.Factorial());
    };
    return App;
}());
App.main();
