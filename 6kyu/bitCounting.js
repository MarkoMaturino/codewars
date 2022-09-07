// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// My Solution:
var countBits = function(n) {
    let convertToBinary = (n >>> 0).toString(2).split("")
    let result = 0
    convertToBinary = convertToBinary.map(x => Number(x))
    convertToBinary.forEach(function(x){
      if(x === 1){
        result++
      }
      
      
    })
    return result
  };