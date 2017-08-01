/**
 * Fizz Buzz

    You may have seen Fizz Buzz written as Fizz Buzz, FizzBuzz, or Fizz-Buzz; they're all 
    referring to the same thing. That "thing" is the main topic of discussion today. 
    First, what is FizzBuzz?

    This is a common question that comes up in job interviews.

    Imagine a series of a number from 1 to 10.

    1 2 3 4 5 6 7 8 9 10
    Fizz and Buzz refer to any number that's a multiple of 3 and 5 respectively. 
    In other words, if a number is divisible by 3, it is substituted with fizz; 
    if a number is divisible by 5, it is substituted with buzz. If a number is simultaneously 
    a multiple of 3 AND 5, the number is replaced with "fizz buzz." In essence, 
    it emulates the famous children game "fizz buzz".
 */

function fizzbuzz(array){
    var result = [];

    for (var i = 0; i < array.length; i++) {
        if(array[i] % 15 === 0){
            result.push('fizzbuzz');            
        }
        else if(array[i] % 3 === 0)            
            result.push('fizz');
        else if(array[i] % 5 === 0)            
            result.push('buzz');
        else
            result.push(array[i]);                  

    }

    return result;
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var fb = fizzbuzz(arr);
console.log(fb);
