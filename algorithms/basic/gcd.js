/** 
 * The Euclidean Algorithm
 * 
 * Recall that the Greatest Common Divisor (GCD) of two integers A and B is the largest integer that divides both A and B. 
 * The Euclidean Algorithm is a technique for quickly finding the GCD of two integers.
 * 
 * The Euclidean Algorithm for finding GCD(A,B) is as follows: 
 * If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.  
 * If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.  
 * Write A in quotient remainder form (A = B⋅Q + R)
 * Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)
 * 
 * Seudo Code:
 * 
 * if A == 0
 *  return B
 * if B == 0
 *  return A
 * if A > B
 *  R = A % B
 *  return gcb(A,R)
 * if B > A
 *  R = B % A
 *  return gcd(B,R)
 */


 var App = (function () { 

    function App() {        
    }

    /** Recursive mode */
    App.gcdR = function (a,b) {
        
        if (b > a) {
            var tmp = a;
            a = b;
            b = tmp;
        }

        if(b === 0)
            return a;
        var r = a % b;
        return App.gcd(b,r);
     }

     /** Iterative mode */
     App.gcdI = function (a,b) {
        
        while (a != b) {
            
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }                
        }
        return a;
        
     }

    return App;
  })();


console.log(App.gcdI(36,60));
