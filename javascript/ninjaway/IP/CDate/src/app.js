"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mdate = require("./date");
var App = (function () {
    function App() {
    }
    /**
     * static main
     */
    App.main = function () {
        var weekday = mdate.Weekdays.Thursday;
        var month = mdate.Yearmonths.November;
        var date = new mdate.CDate(weekday, 14, month, 1985);
        date.IncrementDay();
        console.log(date.getDate('extended'));
    };
    return App;
}());
App.main();
//# sourceMappingURL=app.js.map