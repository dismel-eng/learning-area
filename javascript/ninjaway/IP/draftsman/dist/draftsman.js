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
    Draftsman.prototype.Triangle = function () {
        var start = ' * ';
        var space = '   ';
        var row = '';
        var mid = Math.ceil(this.Dimension / 2);
        for (var i = 1; i <= this.Dimension; i++) {
            if (i % 2 === 0)
                continue;
            row = '';
            for (var j = 1; j <= this.Dimension; j++) {
                if (i === this.Dimension) {
                    row += start;
                }
                else {
                    var x = Math.floor((this.Dimension - i) / 2);
                    var y = this.Dimension - Math.floor(x) + 1;
                    if (i === 1) {
                        row += (j === mid) ? start : space;
                    }
                    else if (j > x && j < y) {
                        row += start;
                    }
                    else
                        row += space;
                }
            }
            console.log(row);
        }
    };
    Draftsman.prototype.Diamond = function () {
        var start = ' * ';
        var space = '   ';
        var row = '';
        var mid = Math.ceil(this.Dimension / 2);
        var ctr = 1;
        var x = 1;
        var y = 1;
        for (var i = 1; i <= this.Dimension; i++) {
            row = '';
            for (var j = 1; j <= this.Dimension; j++) {
                var x_1 = (i < mid) ? mid - i : i - mid;
                var y_1 = (i < mid) ? mid + (i - 1) : this.Dimension - (i - mid);
                if (i === 1 || i === this.Dimension) {
                    row += (j === mid) ? start : space;
                }
                else if (i === mid) {
                    row += start;
                }
                else if (j > x_1 && j <= y_1) {
                    row += start;
                }
                else
                    row += space;
            }
            console.log(row);
        }
    };
    return Draftsman;
}());
exports.Draftsman = Draftsman;
//# sourceMappingURL=draftsman.js.map