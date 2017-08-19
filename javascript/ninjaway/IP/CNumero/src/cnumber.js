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
    /** Return a Sum of first n numbers */
    CNumber.prototype.Sum = function () {
        var n = this._num;
        return n * (n + 1) / 2;
    };
    /** Times */
    CNumber.prototype.Times = function (x) {
        return 0;
    };
    /** Exponent */
    CNumber.prototype.Pow = function (x) {
        var n = this._num;
        var exp = 1;
        var count = 0;
        if (x === 0)
            return 1;
        if (x === 1) {
            return n;
        }
        else {
            count = x;
            exp = n;
            while (count > 1) {
                exp *= n;
                count--;
            }
        }
        return (x < 0) ? 1 / exp : exp;
    };
    /** Calculate the square of the number by making only sums.
     * Note: The square of a N number is the sum of the n first odd numbers.
     * Ex: 3^2 = 1 + 3 + 5 = 9
     */
    CNumber.prototype.SquareSum = function () {
        var n = this._num;
        var count = 1;
        var sum = 0;
        // n^2 == n * n 
        while (n * n !== sum) {
            if (count % 2 !== 0)
                sum += count;
            count++;
        }
        return sum;
    };
    /** The following is a simple prime check algorithm for not very large numbers. */
    CNumber.prototype.IsPrime = function () {
        var n = this._num;
        var i = 5;
        if (n <= 1)
            return false;
        if (n <= 3)
            return true;
        if (n % 2 === 0 || n % 3 === 0)
            return false;
        while (i * i <= n) {
            if (n % i === 0 || n % (i + 2) === 0)
                return false;
            i = i + 6;
        }
        return true;
    };
    return CNumber;
}());
exports.CNumber = CNumber;
