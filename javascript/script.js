let computer = 0;
let player = 0;

function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerOption;

    if (randomInt == 0) {
        computerOption = "rock";
    } else if (randomInt == 1) {
        computerOption = "paper";
    } else {
        computerOption = "scissors";
    }
    return computerOption;
}

/*console.log(computerPlay());*/

function playRound(playerSelection, computerSelection) {
    let result;
    computerSelection = computerPlay();
    //playerSelection = prompt("Do you choose rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result = "It's a tie!"
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    result = "You lose! Paper beats rock."
                    computer++;
                } else {
                    result = "You win! Rock beats scissors."
                    player++;
                }
                break;
            case "paper":
                if (computerSelection === "scissors") {
                    result = "You lose! Scissors beats paper."
                    computer++;

                } else {
                    result = "You win! Paper beats rock."
                    computer++;
                }
                break;
            case "scissors":
                if (computerSelection === "rock") {
                    result = "You lose! Rock beats scissors."
                    computer++;
                } else {
                    result = "You win! Scissors beats paper."
                    player++;

                }
                break;
        }
    }
    return result;
}