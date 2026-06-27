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

//Pause function to use with async/await
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//Asynchronous function that allows pausing until round 4
async function game() {
    let playerScore = 0;
    let computerScore = 0;  

    for (let round = 0; round < 5; round++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        console.log(`\n— Round ${round+1} —`);
        console.log(`You: ${playerSelection}  |  Computer: ${computerSelection}`);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if(result.includes("lose")) {
            computerScore++;
        }

        if (round < 4) { // Pause after each round except the last one
            await pause(1800);
        }
    }

    console.log('\n=== FINAL RESULT ===');
    console.log(`You ${playerScore} — ${computerScore} Computer`);

    if (playerScore > computerScore) {
        console.log('VICTORY! Computer is contained. The world is safe… for now.');
    } else if (computerScore > playerScore) {
        console.log('DEFEAT. Computer reigns. Mwahahaha!');
    } else {
        console.log('STALEMATE. Evenly matched.');
    }

}

game();
function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        const result = playRound(playerPlay(), computerPlay());

        console.log(result.message);

        if (result.result === "win") {
            playerWins++;
        } else if (result.result === "lose") {
            computerWins++;
        }

        console.log(`Player: ${playerWins} | Computer: ${computerWins}`);

        // End early if someone reaches 3 wins
        if (playerWins === 3 || computerWins === 3) {
            break;
        }
    }

    if (playerWins > computerWins) {
        console.log("🎉 You won the game!");
    } else if (computerWins > playerWins) {
        console.log("💻 Computer won the game!");
    } else {
        console.log("🤝 The game ended in a tie!");
    }
}

game()
