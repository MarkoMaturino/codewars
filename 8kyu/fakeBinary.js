// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My Solution:
function fakeBin(x){
    let ar = x.split("")
    let result = ar.map(x => (x >= 5) ? x = 1: x = 0).join("")
    
    return result
}
