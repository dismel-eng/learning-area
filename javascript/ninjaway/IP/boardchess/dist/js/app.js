"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mboard = require("./board");
var App = (function () {
    function App() {
    }
    App.main = function () {
        var board = new mboard.Board();
        board.Init();
        board.PirntBoard();
    };
    return App;
}());
App.main();
//# sourceMappingURL=app.js.map