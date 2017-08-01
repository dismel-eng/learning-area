// Find Max - First Approach
function findMax(array){
    
    var max = array[0];
    
    for (var i = 0; i < array.length; i++) {
        if(array[i] > max)
            max = array[i];        
    }

    return max;
}
//Find Min - First Approach
function findMin(array){
    
    var min = array[0];

    for (var i = 0; i < array.length; i++) {

        if(array[i] < min)
            min = array[i];        
        
    }

    return min;
}
//Find Max - Second Approach
function getMaxValue(array){
    return Math.max.apply(null, array);
}
//Find Min - Second Approach
function getMinValue(array){
    return Math.min.apply(null, array);
}


var arr = [9,4,3,1,5,6,3,4,6,7,3,4,5,6,5768,75,5,234,56,42,467,8,9678,2,323,46,653,89,689,678,6,23,2,34,5,6456,6,29,6,6,7,78,69,87609,67789];
//var arr = [-9,4,3,1,5,6,3,4,6,7,-3,-4,-5,6,-5768,-75,-5,-234];
var max = findMax(arr);
var min = findMin(arr);
var max1 = getMaxValue(arr);
var min1 = getMinValue(arr);
console.log('---- First Approach ----');
console.log('Max value in the array: ',max);
console.log('Min value in the array: ', min);
console.log('---- Second Approach ----');
console.log('Max value in the array: ',max1);
console.log('Min value in the array: ', min1);