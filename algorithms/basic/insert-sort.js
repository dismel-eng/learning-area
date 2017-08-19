/** INSERTION SORT
 *  Input: A sequence of N unordered numbers A[n1,n2,n3,...nX]
 *  Output: A permutation (reordering) of the input sequence such that: n1 <= n2 <= n3 <= ... <= nX
 * 
 *  Seudo Code: 
 *  Parameter: an array A = [5,2,4,6,1,3] 
 *  
 *  for i = 1; i < A.length; i++
 *      key = A[i]
 *      j = i - 1
 *      while j > -1 && A[j] > key
 *          A[j+1] = A[j]
 *          j = j - 1
 *      A[j+1] = key
 */

 /** JAVASCRIPT IMPLEMENTATION */

var App = (function () { 
    function App() {        
    }

    App.insertionSort = function (array) { 
        var key = 0;
        var i = 1;
        for (i; i < array.length; i++) {
            key = array[i];
            var j = i - 1;
            while (j > -1 && array[j] > key) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = key;
            console.log(array);            
        }
    }

    return App;
 })();

var array = [5,2,4,6,1,3];
//var array = [41, 59, 26, 41, 58];
App.insertionSort(array);