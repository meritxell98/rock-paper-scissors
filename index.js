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
    let playerSelection = prompt("Choose rock, paper, or scissors:");

    if (playerSelection === null) {
        alert("You must play the game to continue.");
        return playerPlay(); 
    }

    playerSelection = playerSelection.toLowerCase();

     if (playerSelection.trim() !== "rock" && playerSelection.trim() !== "paper" && playerSelection.trim() !== "scissors") {
        alert("Invalid answer. Please choose rock, paper, or scissors.");
        return playerPlay(); 
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {
            result: "tie",
            message: "It's a tie!"
        };
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return {
            result: "win",
            message: `You win! ${playerSelection} beats ${computerSelection}`
        };
    } else {
        return {
            result: "lose",
            message: `You lose! ${computerSelection} beats ${playerSelection}`
        };
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 3 && computerWins < 3) {
        const round = playRound(playerPlay(), computerPlay());

        console.log(round.message);

        if (round.result === "win") {
            playerWins++;
        } else if (round.result === "lose") {
            computerWins++;
        }

        console.log(`Player: ${playerWins} | Computer: ${computerWins}`);
    }

    if (playerWins === 3) {
        console.log("🎉 You won the game!");
    } else {
        console.log("💻 Computer won the game!");
    }
}

game()