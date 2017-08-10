'use strict';
/**
 * Scope
 * Consider the following code:

    (function() {
    var a = b = 5;
    })();

    console.log(b);
    What will be printed on the console?

    The code above prints 5
    
    The trick of this question is that in the IIFE there are two assignments but the variable a is 
    declared using the keyword var. What this means is that a is a local variable of the function. 
    On the contrary, b is assigned to the global scope.
 */

/**
 * Create “native” methods
 * ----------------------------
 * Define a repeatify function on the String object. The function accepts an integer 
 * that specifies how many times the string has to be repeated. The function returns the 
 * string repeated the number of times specified. For example: 
 * console.log('hello'.repeatify(3)); 
 * Should print hellohellohello.
 * ----------------------------
 * The question tests the knowledge of the developer about inheritance in JavaScript and the prototype property. 
 * It also verifies that the developer is able to extend native data type functionalities (although this should not be done).
 * Another important point here is to demonstrate that you are aware about how to not override possible already defined functions.
 * This is done by testing that the function didn’t exist before defining your own:
 * String.prototype.repeatify = String.prototype.repeatify || function(times) { code here };
 */
String.prototype.repeatify = String.prototype.repeatify || function(times){
    
    var tmp = '';

    for (var i = 0; i < times; i++) {
       tmp += this;          
    }

    return tmp;
}

var hello = 'hello';
console.dir(hello.repeatify(5));