function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerOption;

    if (randomInt == 0) {
        computerOption = "Rock";
    } else if (randomInt == 1) {
        computerOption = "Paper";
    } else {
        computerOption = "Scissors";
    }
    return computerOption;
}