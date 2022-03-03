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
    let tracker;
    computerSelection = computerPlay();
    /*console.log(computerSelection);*/
    playerSelection = prompt("Do you choose rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    /*console.log(playerSelection);*/

    if (playerSelection === computerSelection) {
        tracker = 0;
        result = "It's a tie!"
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    result = "You lose! Paper beats rock."
                    tracker = 2;
                } else {
                    result = "You win! Rock beats scissors."
                    tracker = 1;
                }
                break;
            case "paper":
                if (computerSelection === "scissors") {
                    result = "You lose! Scissors beats paper."
                    tracker = 2;
                } else {
                    result = "You win! Paper beats rock."
                    tracker = 1;
                }
                break;
            case "scissors":
                if (computerSelection === "rock") {
                    result = "You lose! Rock beats scissors."
                    tracker = 2;
                } else {
                    result = "You win! Scissors beats paper."
                    tracker = 1;
                }
                break;
        }
    }
    return result;
}
/*console.log(playRound());*/

function game() {

}