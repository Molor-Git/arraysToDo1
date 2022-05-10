// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.

function pushToFront(arr, value) {
    // arr = [...value, ...arr] // Spread syntax
    var newArr = [value]
    for (var idx = 1; idx < arr.length; idx++){
        newArr[idx] = arr[idx -1 ];
    }
    return newArr;
}
console.log(pushToFront([-2, "coding", 3.8, "dojo", 40], "Push to front"))

// Pop Front
// Given an array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().

function popFront(arr){
    var [removed, ...newArr] = arr; // Spread syntax
    
    console.log(arr)
    console.log(newArr)
    return `Removed value: ${removed}`
}
console.log(popFront([3, 6, 7, 9]))

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, val){
    var index = 1
    for (var idx = 0; idx < arr.length; idx++){
        if (idx === index){
            arr[idx] = val
        }
    }return arr
}
console.log(insertAt([4, 7, 2, 12], 10))

