function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1){
        return "rock";
    }else if(choice == 2){
        return "paper";
    } else if(choice == 3){
        return "scissors";
    }
}

function playRound(){
     let playerSelection = prompt("Rock, Papper, Scissors").toLowerCase();
     let computerChoice = getComputerChoice();
      if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        console.log("Introdu una din optiunile rock,paper,scissors!");
    }
    else if(playerSelection === computerChoice)
    {
        console.log("Equal");
        return "Equal";
     } else if((playerSelection === "rock" && computerChoice === "scissors") || (playerSelection === "paper" && computerChoice === "rock") || (playerSelection === "scissors" && computerChoice === "paper")){
         console.log("You won");
        return "You won!";
     } else {
        console.log("You lose");
        return "You lose!";
     }

} 
 
function game(){
    let player = 0;
    let computer = 0;
    for(let i = 1; i <= 5; i++){
        let player_pick = playRound();
        console.log("Round " +  i + ":");
       if(player_pick === "You won!"){
        player++;
       } else if(player_pick === "You lose!"){
        computer++;
       }
       console.log(player);
       console.log(computer);
    }

    if(player > computer){
        console.log("Congrats!You won!");
    }
    if(player < computer){
        console.log("You lose!");
    }
    if(player == computer){
        console.log("Equal!");
    }
}
game();
 

 

