"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calc = (function () {
    function Calc(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Calc.prototype, "A", {
        get: function () { return this._a; },
        set: function (value) { this._a = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calc.prototype, "B", {
        get: function () { return this._b; },
        set: function (value) { this._b = value; },
        enumerable: true,
        configurable: true
    });
    Calc.prototype.Sum = function () { return this.A + this.B; };
    Calc.prototype.Minus = function () { return this.A - this.B; };
    Calc.prototype.Times = function () {
        var product = 0;
        for (var i = 0; i < this.B; i++) {
            product += this.A;
        }
        return product;
    };
    Calc.prototype.Division = function () {
        var rest = this.A;
        var quotient = 0;
        while (rest >= this.B) {
            rest = rest - this.B;
            quotient++;
        }
        return quotient;
    };
    return Calc;
}());
exports.Calc = Calc;
//# sourceMappingURL=calc.js.map