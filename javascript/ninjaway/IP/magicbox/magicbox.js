/**
 * Implement a function that simulates a magic box.
 * This magic box has a random number between 1 - 10 
 * and provides an interfaces to guess this number.
 */

const readline = require('readline');

 /** Getting a random integer between two values, inclusive 
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  */
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

/**
 * Input: guess number
 * Output: True if guess number is equal to random number.
 *         False otherwise
 */
function TryGuessNumber(guessNumber){
    
    let magicNumber = getRandomNumber(1,10);
    return parseInt(magicNumber) === parseInt(guessNumber);
}

function MagicBox(number){

    if (TryGuessNumber(number)) {
        
        console.log('Congratulation!!');
        
    } else {
        
        console.log('Sorry.');
        
    }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter number to guess: ', (guessNumber) => {
    
    MagicBox(guessNumber);
    rl.close();
});