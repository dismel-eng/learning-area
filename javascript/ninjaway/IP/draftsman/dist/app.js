"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var draftsman = require("./draftsman");
var App = (function () {
    function App() {
    }
    App.main = function () {
        var m_draftsman = new draftsman.Draftsman(21);
        m_draftsman.Diamond();
    };
    return App;
}());
App.main();
//# sourceMappingURL=app.js.map