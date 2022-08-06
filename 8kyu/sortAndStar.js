// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My Solution:
function twoSort(s) {
    s.sort();
      let firstEle = s.splice(0,1)
      let word = firstEle.toString()
      let seperate = word.split("")
      let addStarsBetweenElements = seperate.reduce((prev,curr)=> prev.concat(curr, "***"), []);
      addStarsBetweenElements.pop()
      let convertToAString = addStarsBetweenElements.toString()
      let result = convertToAString.replace(/,/g, "")
      
      return result
  
  }
//   BTW I found out the optimal solution right after learing this.
// I found out about the join method
// I know i can do this better