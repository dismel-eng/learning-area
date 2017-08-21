"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mrange = require("./crange");
var App = (function () {
    function App() {
    }
    App.main = function () {
        var list = [2, 3, 5, 6, 7];
        var range = new mrange.CRange(list);
        console.log('List:');
        console.log(range.List);
        range.setRange(5);
        console.log('Max');
        console.log(range.Max);
        console.log('Min');
        console.log(range.Min);
    };
    return App;
}());
App.main();
