/** Note: 
 *  In mathematics, the Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing 
 *  the greatest common divisor (GCD) of two numbers, the largest number that divides both of them 
 *  without leaving a remainder. 
 */

 /** Class Number */
export class CNumber {
    
    private _num: number;

    constructor(number: number) {
        this._num = number;
    }

    /** Greatest common divisor */
    GCD(param: number):number{
        let a = this._num;

        while (a !== param) {
            if (a > param) {
                a = a - param;
            } else {
                param = param - a;
            }
        }

        return a;
    }

    /** Number of Digits */
    NOD():number{
        let numOfDigits = Math.abs(this._num);
        let count = 1;
        
        while (numOfDigits > 9) {
            numOfDigits /= 10;
            count++;    
        }
        
        return count;
    }

    
    Factorial():number{
        let num = this._num;
        let factorial = this._num;

        if(this._num === 0 || this._num === 1)
            return 1;
        if(this._num === 2)
            return 2;

        while (num > 1) {
            factorial *= --num;
        }

        return factorial;
    }
}