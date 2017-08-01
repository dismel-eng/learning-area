var previousNumbers = [];
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 0;
var resetButton;
var randomNumber = 0;

function generateRandomNumber() {
    var number = Math.floor((Math.random() * 100) + 1);
    return number;
}


function addToPrevious(number) {
    previousNumbers.push(number);
    var message = 'Previous numbers: ';
    var arrNumbers = previousNumbers.join(" ");

    guesses.textContent = message + arrNumbers;
    resetGuessField();
}

function getHint(number) {
  var msgHight = "The number is too Hight.";
  var msgLow = "The number is too Low.";  
  lowOrHi.textContent = (number < randomNumber) ? msgLow : msgHight;
}

function showMessage(opt) {
    switch(opt){
        case 1:
            lastResult.textContent = 'Congratulations! You got it right!';
            lastResult.classList.remove("wrong");
            lastResult.classList.add("winning");
        break;
        case 2:
            lastResult.textContent = "Wrong!";
            lastResult.classList.remove("winning");
            lastResult.classList.add("wrong");
        break;
        case 3:
            lastResult.textContent = "Game Over!!";
            lastResult.classList.remove("winning");
            lastResult.classList.add("wrong");
        break;
        default:
            console.log('Say something!');
    }
}

function validateNumber(number) {
    return !(isNaN(number) || number < 1 || number > 100);
}

function resetGuessField(){
    guessField.value = '';
    guessField.focus();
}

function showErrorMsg(param){
  var errorMsg = document.querySelector('.error');
  errorMsg.style.display = 'none';
  errorMsg.style.display = (param === 1) ? errorMsg.style.display = 'block' : errorMsg.style.display = 'none';
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 0;

    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    previousNumbers = [];
    guesses.textContent = '';
    lastResult.textContent = '';
    lastResult.classList.remove("wrong");
    lastResult.classList.remove("winning");    
    resetGuessField();    

    randomNumber = generateRandomNumber();
}

function checkGuess() {
    var guessNumber = Number(guessField.value);
    var match = (guessNumber === randomNumber);
    if(previousNumbers.length < 10){
        if(validateNumber(guessNumber)){
            showErrorMsg(0);
            if(match){
                showMessage(1);
                setGameOver();
            }else{
                addToPrevious(guessNumber);
                getHint(guessNumber);
                showMessage(2);
                resetGuessField();
            }
        }else{
            showErrorMsg(1);
            resetGuessField();
        }
    }else{
       showMessage(3);
       setGameOver(); 
    }      
}

resetGuessField();
randomNumber = generateRandomNumber();
guessSubmit.addEventListener('click', checkGuess);