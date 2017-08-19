"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mdate = require("./cnumber");
var App = (function () {
    function App() {
    }
    App.main = function () {
        var mnumber = new mdate.CNumber(673);
        console.log(mnumber.IsPrime());
    };
    return App;
}());
App.main();
