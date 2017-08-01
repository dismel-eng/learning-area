/**
 * 
Let Array be a linear unordered array of MAX elements.

Example
Result

Let LA be a Linear Array (unordered) with N elements and K is a positive integer such that K<=N. 
Following is the algorithm where ITEM is inserted into the Kth position of LA

1. Start
2. Set J = N
3. Set N = N+1
4. Repeat steps 5 and 6 while J >= K
5. Set LA[J+1] = LA[J]
6. Set J = J-1
7. Set LA[K] = ITEM
8. Stop
 */
var la = [1,3,5,7,8];
var item = 10;
var k = 3;
var n = 5;

var i = 0;
var j = n;

console.log('Original Arr');
for (i = 0; i < n; i++) {
    var element = array[index];    
}