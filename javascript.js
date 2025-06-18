
let humanScore = 0;

let computerScore = 0;


function getComputerChoice () {
    let randomNumber;
    let choice;
    randomNumber = Math.random()*100;
    randomNumber = Math.round(randomNumber);
    if ( randomNumber < 33 ){
        choice = "Rock";
    }
    else if ( randomNumber >= 66 ) {
        choice = "Scissor";
    }
    else {
        choice ="Paper";
    }
    return choice;
}

function getHumanChoice () {
    let choice;
    choice = prompt("Enter your choice: Rock, Paper or Scissor: ");
    return choice;
}
