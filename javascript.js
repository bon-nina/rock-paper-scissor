
//starts game 
playGame();

//gets randomized choice from computer
function getComputerChoice () { 
    let randomNumber;
    let choice;
    randomNumber = Math.random()*100;
    randomNumber = Math.round(randomNumber);

    //conversion of randomized number to rock, paper or scissor
    if ( randomNumber < 33 ){ 
        choice = "rock";
    }
    else if ( randomNumber >= 66 ) {
        choice = "scissor";
    }
    else {
        choice ="paper";
    }
    return choice;
}


//asks player to input their choice into prompt
function getHumanChoice () { 
    let choice;
    choice = prompt("Enter your choice: Rock, Paper or Scissor: ");
    return choice;
}


//runs through playRound five times 
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i= 0; i < 5; i++) {
        //starts round and gives player and computer choice to playRound()
        playRound(getHumanChoice(),getComputerChoice()); 
    }

    //displays score at the end of five rounds
    console.log("Your score: " + humanScore);
    console.log("Opponent score: " + computerScore);

    //compares human and computer choice to decide winner
    function playRound (humanChoice,computerChoice) { 

        //makes player prompt input case-insensitive
        humanChoice = humanChoice.toLowerCase();

        //Win and Loss conditions and update score counter
        if (( (humanChoice == "rock") && (computerChoice == "scissor") ) || 
            ( (humanChoice == "scissor") && (computerChoice == "paper") ) ||
            ( (humanChoice == "paper") && (computerChoice == "rock") ) ) {
                console.log("Win! " + humanChoice.toUpperCase() + " beats " + computerChoice.toUpperCase() + " !");
                humanScore += 1;
            }

        else if (( (humanChoice == "rock") && (computerChoice == "paper") ) ||
            ( (humanChoice == "scissor") && (computerChoice == "rock") ) ||
            ( (humanChoice == "paper") && (computerChoice == "scissor") ) ) {
                console.log("Loss! " + computerChoice.toUpperCase() + " beats " + humanChoice.toUpperCase() + " !");
                computerScore += 1;
            }

        else {
            console.log("Tie! Try again");
            }

    } 

}
