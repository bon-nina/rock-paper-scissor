

function getComputerChoice () {
    let choice;
    choice = Math.random()*100;
    choice = Math.round(choice);
    return choice;
}

function getHumanChoice () {
    let choice;
    choice = prompt("Enter your choice: Rock, Paper or Scissor: ");
    return choice;
}

