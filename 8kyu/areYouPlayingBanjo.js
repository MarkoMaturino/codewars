// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:

// My Solution:

function areYouPlayingBanjo(name) {
    let firstLetter = name.charAt(0).toLowerCase();
    
    if(firstLetter === "r"){
    return name  + " plays banjo" 
  }
    else{
      return name + " does not play banjo"
    }
  }