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

    /** Return a Sum of first n numbers */
    Sum():number{
        let n = this._num;        
        return n * (n+1)/2;
    }

    /** Times */
    Times(x:number):number{

        return 0;
    }

    /** Exponent */
    Pow(x:number):number{
        
        let n = this._num;
        let exp = 1;        
        let count = 0;
        
        if(x === 0)
            return 1;

        if(x === 1){
            return n;
        }else{                       
            count = x;
            exp = n;

            while (count > 1) {

                exp *= n;
                count--;

            }
        }

        return (x < 0) ? 1 / exp : exp;
    }

    /** Calculate the square of the number by making only sums. 
     * Note: The square of a N number is the sum of the n first odd numbers.
     * Ex: 3^2 = 1 + 3 + 5 = 9
     */
    SquareSum(): number{
        
        let n = this._num;
        let count = 1;
        let sum = 0;

        // n^2 == n * n 
        while (n * n !== sum) {
            
            if(count % 2 !== 0)
                sum += count;
            count++;
        }        
        return sum;
    }

    /** The following is a simple prime check algorithm for not very large numbers. */
    IsPrime():boolean{
        let n = this._num;
        let i = 5;
        
        if(n <= 1)
            return false;
        if(n <= 3)
            return true;        
        if(n % 2 === 0 || n % 3 === 0)
            return false;

        while (i * i <= n) {
            
            if(n % i === 0 || n % (i + 2) === 0)
                return false;
            
            i = i + 6;            
        }

        return true;
    }

    /** Calculate the sum of the following serie 1*2*3+2*3*4+3*4*5+....+ given T 
     *  Note: if T=4 the sum will be 1*2*3+2*3*4+3*4*5+4*5*6;
     */

     Serie():number{
        let result = 0;
        let count = 1;

        while (count <= this._num) {
            result += count * (count + 1) * (count + 2);
            count++;
        }

        return result;
     }
}