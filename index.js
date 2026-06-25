function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    let value;

    switch (randomNumber) {
        case 0:
            value = "rock";
            break;
        case 1:
            value = "paper";
            break;
        case 2:
            value = "scissors";
            break;
    }
    return value;
}   

function playerPlay() {
    let playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound(playerPlay(), computerPlay()));