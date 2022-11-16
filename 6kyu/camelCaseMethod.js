// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

// My Solution
String.prototype.camelCase=function(){
    let arrayOfStrings = this.split(" ")
    for(let i = 0; i < arrayOfStrings.length; i++){
      
     arrayOfStrings[i] = arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(1);
    }
    return arrayOfStrings.join("")
  }