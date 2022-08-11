// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Solution:
var countSheep = function (num){
    let arrayOfSheeps = []
    for(let i = 0; i<=num; i++){
        arrayOfSheeps[i] = i

    }
    let countOfSheep = arrayOfSheeps.map(x => x = x += " sheep...")
    countOfSheep.shift()
    return countOfSheep.join("")    
    
}
