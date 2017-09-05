/** SELECTION SORT 
 * Consider sorting n numbers stored in array A by first finding the smallest element
 * of A and exchanging it with the element in A[1]. Then find the second smallest 
 * element of A, and exchange it with A[2]. Continue in this manner for the first n - 1 elements of A.
 * 
 *  Pseudo Code: 
 *  Parameter: an array A = [5,2,4,6,1,3] 
 *  
 * for i = 1 to A.length - 1
 *     min = i
 *     for j = i + 1 to A.length
 *         if A[j] < A[min]
 *             min = j
 *     temp = A[i]
 *     A[i] = A[min]
 *     A[min] = temp
 *  
 */

 /** JAVASCRIPT IMPLEMENTATION */

 var App = (function () { 
    function App() {        
    }

    App.selectionSort = function (array) { 
        
        for (var i = 0; i < array.length - 1; i++) {
            var min = i;
                        
            for (var j = i + 1; j < array.length; j++) {
                console.log('i: '+' '+`${i}`+' j: '+' '+`${j}`);
                if (array[j] < array[min]) {
                    min = j;
                }                
            }
            var tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
            
        }
        console.log(array);
        
        return array;
    }

    return App;
 })();
var array = [5,2,4,6,1,3];
//var array = [41, 59, 26, 41, 58];
App.selectionSort(array);