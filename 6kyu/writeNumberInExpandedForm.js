// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// My Solution:
function expandedForm(num) {
    num = num.toString().split("")
    let answer = []
    let length = num.length - 1
  
    num.forEach(function(x,i){
      let z = ""
      
      for(let k = 0; i < length; i++){
        z += "0"
      }
        let numberExpanded = x + z
        answer.push(Number(numberExpanded))
  
    })
    answer = answer.filter(x => x !== 0)
    return answer.join(" + ")
    
  }