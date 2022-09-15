// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// My Solution:
function high(x){
    x = x.split(" ")
    let scores = []
    x.forEach(function(x){
       let sum = 0
       for(let i = 0; i < x.length; i++){
         sum += x.charCodeAt(i) - 96
       }
       scores.push(sum)
       
    })
   let largestNum = scores.indexOf(Math.max(...scores))
   return x[largestNum]
   
 }