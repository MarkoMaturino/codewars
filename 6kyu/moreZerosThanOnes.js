// Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False
                   
//         --> ['a','b','d']
    
// 'DIGEST'--> ['D','I','E','T']
// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

// My Solution:
function moreZeros(s){
    s = s.split("")
    let binaryArray = []
    let result = []
    for(let i = 0; i < s.length; i++){
      binaryArray.push(s[i].charCodeAt(0).toString(2))
    }
    binaryArray = binaryArray.map(function(x){
      let zeroCount = 0
      let oneCount = 0
      x = x.split("")
      
      for(let i = 0; i < x.length; i++){
        let num = Number(x[i])
        if(num === 0){
          zeroCount++
        }
        else if(num === 1){
          oneCount++
        }
      }
      if(zeroCount > oneCount){
        return true
      }
    })
    for(let i = 0; i < binaryArray.length; i++){
      if(binaryArray[i] === true){
        result.push(s[i])
      }
      
    }
    result = [...new Set(result)]
    return result
    
    
  }