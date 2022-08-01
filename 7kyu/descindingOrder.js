// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// My Solution:
function descendingOrder(n){
    let digits = (""+n).split("")
         digits.sort( function(a,b){
             if(a < b) return 1
             else if(a > b) return -1
             else{
                 return - 2
             }
         })
         let b = digits.join(``)
         let c = parseInt(b)
         return c
      
    }