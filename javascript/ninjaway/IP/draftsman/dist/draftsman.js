"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Draftsman = (function () {
    function Draftsman(dimension) {
        this._dimension = dimension;
    }
    Object.defineProperty(Draftsman.prototype, "Dimension", {
        get: function () { return this._dimension; },
        set: function (value) { this._dimension = value; },
        enumerable: true,
        configurable: true
    });
    Draftsman.prototype.HollowSquare = function () {
        var start = ' * ';
        var space = '   ';
        var row = '';
        for (var i = 0; i < this.Dimension; i++) {
            var row_1 = '';
            for (var j = 0; j < this.Dimension; j++) {
                if (i === 0 || i === this.Dimension - 1) {
                    row_1 += start;
                }
                else {
                    if (j === 0 || j === this.Dimension - 1) {
                        row_1 += start;
                    }
                    else {
                        row_1 += space;
                    }
                }
            }
            console.log(row_1);
        }
    };
    Draftsman.prototype.BotLeftTriangle = function () {
        var start = ' * ';
        var row = '';
        var count = 0;
        while (count < this.Dimension) {
            row += start;
            console.log(row);
            count++;
        }
    };
    Draftsman.prototype.TopLeftTriangle = function () {
        var start = ' * ';
        var row = '';
        var count = this.Dimension;
        while (count > 0) {
            row = '';
            var tmp = count;
            while (tmp > 0) {
                row += start;
                tmp--;
            }
            console.log(row);
            count--;
        }
    };
    Draftsman.prototype.BotRigthTriangle = function () {
        var start = ' * ';
        var space = '   ';
        var row = '';
        for (var i = this.Dimension; i > 0; i--) {
            row = '';
            for (var j = 0; j <= this.Dimension; j++) {
                row += (j < i) ? space : start;
            }
            console.log(row);
        }
    };
    Draftsman.prototype.TopRigthTriangle = function () {
        var start = ' * ';
        var space = '   ';
        var row = '';
        for (var i = this.Dimension; i > 0; i--) {
            row = '';
            var n = this.Dimension;
            for (var j = 0; j <= n; j++) {
                row += (j <= (n - i)) ? space : start;
            }
            console.log(row);
        }
    };
    Draftsman.prototype.ZigZag = function () {
        var start = ' * ';
        var space = '   ';
        var row = '';
        for (var i = 1; i <= this.Dimension; i++) {
            row = '';
            for (var j = 0; j < this.Dimension; j++) {
                if (i % 2 !== 0) {
                    row += (j === this.Dimension - 1) ? space : start;
                }
                else {
                    row += (j === 0) ? space : start;
                }
            }
            console.log(row);
        }
    };
    return Draftsman;
}());
exports.Draftsman = Draftsman;
//# sourceMappingURL=draftsman.js.map