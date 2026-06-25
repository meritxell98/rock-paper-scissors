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

     if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        alert("Invalid answer. Please choose rock, paper, or scissors.");
        return playerPlay(); 
    }
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