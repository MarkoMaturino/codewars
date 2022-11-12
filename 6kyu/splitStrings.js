// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My Solution:
function solution(str){
    str = str.split("")
    let arrayOfStirng = []
    for(let i = 0; i < str.length; i++){
      if(i % 2 === 0){
        if(str[i + 1] === undefined){
          arrayOfStirng.push(str[i] + "_")
        }
        else{
        arrayOfStirng.push(str[i] + str[i + 1])
        }
  
    }
    }
    return arrayOfStirng
  }