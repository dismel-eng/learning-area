"use strict";
/** Note:
 *  In mathematics, the Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing
 *  the greatest common divisor (GCD) of two numbers, the largest number that divides both of them
 *  without leaving a remainder.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** Class Number */
var CNumber = (function () {
    function CNumber(number) {
        this._num = number;
    }
    /** Greatest common divisor */
    CNumber.prototype.GCD = function (param) {
        var a = this._num;
        while (a !== param) {
            if (a > param) {
                a = a - param;
            }
            else {
                param = param - a;
            }
        }
        return a;
    };
    /** Number of Digits */
    CNumber.prototype.NOD = function () {
        var numOfDigits = Math.abs(this._num);
        var count = 1;
        while (numOfDigits > 9) {
            numOfDigits /= 10;
            count++;
        }
        return count;
    };
    CNumber.prototype.Factorial = function () {
        var num = this._num;
        var factorial = this._num;
        if (this._num === 0 || this._num === 1)
            return 1;
        if (this._num === 2)
            return 2;
        while (num > 1) {
            factorial *= --num;
        }
        return factorial;
    };
    return CNumber;
}());
exports.CNumber = CNumber;
