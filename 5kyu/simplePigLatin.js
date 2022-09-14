// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My Solution:
function pigIt(str){
    str = str.split(" ")
    let answer  = str.map(function(x){
      if(/[^\w\s\']|_/g.test(x) === true){
        return x}
      else{
  
      x = x.split("")
      let y = x.shift()
      x.push(y)
      
      return x.join("") + "ay"}
      
    })
    return answer.join(" ")
    
  }