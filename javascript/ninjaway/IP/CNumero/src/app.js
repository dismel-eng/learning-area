"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mnumber = require("./cnumber");
var App = (function () {
    function App() {
    }
    App.main = function () {
        var m_number = new mnumber.CNumber(5);
        console.log(m_number.Serie());
    };
    return App;
}());
App.main();
