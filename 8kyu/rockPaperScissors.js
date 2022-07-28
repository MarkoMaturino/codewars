// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// My Solution:
const rps = (p1, p2) => {
    const player1won = "Player 1 won!"
    const player2won = "Player 2 won!"
    const draw = "Draw!"
    if(p1 === "scissors" && p2 === "paper"){
      return player1won 
    }
    else if(p1 === "scissors" && p2 === "rock"){
      return player2won
    }
    else if(p1 === "scissors" && p2 === "scissors"){
      return draw
    }
    else if(p1 === "paper" && p2 === "scissors"){
      return player2won
    }
    else if(p1 === "paper" && p2 === "rock"){
      return player1won
    }
    else if(p1 === "paper" && p2 === "paper"){
      return draw
    }
    else if(p1 === "rock" && p2 === "paper"){
      return player2won
    }
    else if(p1 === "rock" && p2 === "rock"){
      return draw
    }
    else if(p1 === "rock" && p2 === "scissors"){
      return player1won
    }
    
  };
// I soon realized that i could have done it more efficiantly. This was a learning experience