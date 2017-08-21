"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = (function () {
    function Board() {
        this._x = 8;
        this._y = 8;
        this._boardList = [];
    }
    Object.defineProperty(Board.prototype, "X", {
        get: function () { return this._x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "Y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "BoardList", {
        get: function () {
            return this._boardList;
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.Init = function () {
        for (var i = 0; i < this.X; i++) {
            this.BoardList[i] = new Array(8);
            for (var j = 0; j < this.Y; j++) {
                this.BoardList[i][j] = ' * ';
            }
        }
    };
    Board.prototype.PirntBoard = function () {
        for (var i = 0; i < this.X; i++) {
            for (var j = 0; j < this.Y; j++) {
                if (i % 2 === 0) {
                    this.FillWhiteTile(i, j);
                    if (j % 2 !== 0) {
                        this.FillBlackTile(i, j);
                    }
                }
                else {
                    this.FillWhiteTile(i, j);
                    if (j % 2 === 0) {
                        this.FillBlackTile(i, j);
                    }
                }
            }
            console.log(this.BoardList[i].join(''));
        }
    };
    Board.prototype.FillWhiteTile = function (x, y) {
        this.BoardList[x][y] = ' 0 ';
    };
    Board.prototype.FillBlackTile = function (x, y) {
        this.BoardList[x][y] = ' 1 ';
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.js.map