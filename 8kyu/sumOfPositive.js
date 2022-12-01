// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My Solution:
function positiveSum(arr) {
    if(arr.length === 0){
      
      return 0
    }
    else{
    arr = arr.filter(x=> x > 0)
      if(arr.length === 0){
        return 0
      }
      else{
    return arr.reduce((acc,c)=> acc + c)}
    
    }
    
  }
  