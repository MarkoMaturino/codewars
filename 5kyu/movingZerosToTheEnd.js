// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// My Solution:
function moveZeros(arr) { 
    let numToDelete = 0
    for(let i = 0; i <= arr.length; i++){
    if(arr[i] === 0){
        numToDelete++
        arr.push("bruh")}
    }
    let result = arr.filter(x => x !== 0)
    result = result.filter(x => x !== "bruh")
    for(let i = 1; i <= numToDelete; i++){
      result.push(0)
    }
    
    return result
  }
// I feel as though I kind of overcomplicated this one.

// Maybe, I'll try to optimize this algorithm to be more efficent!