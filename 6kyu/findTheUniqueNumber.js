// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// My Solution:
function findUniq(arr) {
    let result = ""
    const counts = {};
    for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
    for(const x in counts){
      if(counts[x] === 1){
        result = x
      }
  
    }
   return Number(result)
  
  
  }
//  Not going to lie, I did overcomplecate this one by mistake. I overthought the question. Sorry.