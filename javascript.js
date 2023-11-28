let computerPickResult = "";
let playerPickResult = "";

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1){
        computerPickResult = "rock";
        return "rock";
        
    }else if(choice == 2){
        computerPickResult = "paper";
        return "paper";
        
    } else if(choice == 3){
        computerPickResult = "scissors";
        return "scissors";
        
    }
}
  
const rezultatContainer = document.getElementById("rezultat");
const scorID = document.getElementById("scor");
const scor = document.createElement("p");

function afisare(rezultat,playerWin,computerWin){
    const rezultatElement = document.createElement("p");
    rezultatElement.textContent = rezultat;

    const playerWinElement = document.createElement("p");
    const computerWinElement = document.createElement("p");

    playerWinElement.textContent = "Ai ales " + playerPickResult;
    computerWinElement.textContent = "Computerul a ales " + computerPickResult;


    
    scor.textContent = "Scorul tau: " + playerWin + " - " + "Scorul calculatorului: " + computerWin;


    
    rezultatContainer.innerHTML = "";
    
    rezultatContainer.appendChild(rezultatElement);
    rezultatContainer.appendChild(playerWinElement);
    rezultatContainer.appendChild(computerWinElement);


    scorID.innerHTML = ""; 
    scorID.appendChild(scor);

}
let playerWin = 0;
let computerWin = 0;
function playRound(playerSelection){
     let computerChoice = getComputerChoice();
     

    if(playerSelection === computerChoice){
       afisare("Egalitate",playerWin,computerWin);

     } else if((playerSelection === "rock" && computerChoice === "scissors") || (playerSelection === "paper" && computerChoice === "rock") || (playerSelection === "scissors" && computerChoice === "paper")){
        playerWin++;
        afisare("Ai castigat!",playerWin,computerWin);
        
     } else {
        computerWin++;
       afisare("Ai pierdut!",playerWin,computerWin);
        
     }
     if(computerWin == 5){
        afisare("Computerul a castigat",playerWin,computerWin);
        playerWin = 0;
        computerWin = 0;
        rezultatContainer.innerHTML = "";
        scor.textContent = "Computerul a castigat!";
     }
     if(playerWin == 5){
        afisare("Felicitari! Ai castigat!",playerWin,computerWin);
        playerWin = 0;
        computerWin = 0;
        rezultatContainer.innerHTML = "";
        scor.textContent = "Felicitari! Ai castigat!"
     }
    

} 


rockButton.addEventListener("click", function(){
    playerPickResult = "rock";
    playRound("rock");
    

});

paperButton.addEventListener("click", function() {
    playerPickResult = "paper";
    playRound("paper");
    

})

scissorsButton.addEventListener("click", function(){
    playerPickResult = "scissors";
    playRound("scissors");
    

});







 

 

