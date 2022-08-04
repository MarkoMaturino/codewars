// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My Solution:
function well(x){
    let sumOfGoodIdeas = []
     for(let i = 0; i < x.length; i++){
       if(x[i] === "good"){
        sumOfGoodIdeas.push(x[i])
       }
   }
   if(sumOfGoodIdeas.length === 1 || sumOfGoodIdeas.length === 2){
    return "Publish!"
   }
   else if(sumOfGoodIdeas.length > 2){
    return "I smell a series!"
   }
   else{
    return "Fail!"
   }
   }
