"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRange = (function () {
    function CRange(plist) {
        this._list = plist;
        if (this._list.length > 0) {
            this._max = this._list[0];
            this._min = this._list[0];
        }
    }
    Object.defineProperty(CRange.prototype, "Min", {
        get: function () { return this._min; },
        set: function (value) { this._min = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CRange.prototype, "Max", {
        get: function () { return this._max; },
        set: function (value) { this._max = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CRange.prototype, "List", {
        get: function () { return this._list; },
        set: function (value) { this._list = value; },
        enumerable: true,
        configurable: true
    });
    CRange.prototype.setRange = function (value) {
        if (this.findElement(value) === true) {
            if (value > this.Max) {
                this.Max = value;
            }
            if (value < this.Min) {
                this.Min = value;
            }
        }
        else
            console.log('Error: Not in range.');
    };
    CRange.prototype.findElement = function (value) {
        var count = 0;
        while (count < this.List.length) {
            if (value === this.List[count]) {
                return true;
            }
            count++;
        }
        return false;
    };
    return CRange;
}());
exports.CRange = CRange;
