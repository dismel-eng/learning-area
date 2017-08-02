var customname = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = "It was :Temp: outside, so :insertx: went for a walk. "+
                "When they got to :inserty:, they stared in horror for a few moments, "+
                "then :insertz:. :Name: saw the whole thing, but he was not surprised — "+
                ":insertx: weighs :Mass:, and it was a hot day.";

var insertX = ['Willy the Goblin','the soup kitchen','spontaneously combusted'];
var insertY = ['Big Daddy','Disneyland','melted into a puddle on the sidewalk'];
var insertZ = ['Father Christmas','the White House','turned into a slug and crawled away'];

function randomValueFromArray(arr){
    /** 
     * Math.floor
     * The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
     * If the passed argument is an integer, the value will not be rounded.
     * Ex. Math.floor(1.6) == 1
     */ 
    /**
     * Math.random
     * The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive)
     */
    return arr[Math.floor(Math.random()*arr.length)];
}

function result() {

  var name = (customname.value != '') ? customname.value : 'Bob';
  var temp = (document.getElementById("uk").checked) ? '34 celsius' : '94 farenheit';
  var mass = (document.getElementById("uk").checked) ? '136 Kilogram' : '300 pounds';
  
  var itemx = randomValueFromArray(insertX);
  var itemy = randomValueFromArray(insertY);
  var itemz = randomValueFromArray(insertZ);
  
  /**
   * The replace() method searches a string for a specified value, or a regular expression, 
   * and returns a new string where the specified values are replaced.
   * Note: If you are replacing a value (and not a regular expression), only the first instance 
   * of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier.
   * This method does not change the original string.
   */
  var generatedText = storyText.replace(/:insertx:/g, itemx)
                      .replace(':inserty:', itemy)
                      .replace(':insertz:', itemz)
                      .replace(':Name:', name)
                      .replace(':Temp:', temp)
                      .replace(':Mass:', mass);
  
  story.textContent = generatedText;
  story.style.visibility = 'visible';

}

randomize.addEventListener('click', result);