
(function() {
    const choices = ["rock", "paper", "scissors"];

    function computerPlay() {
        let randomNumber = Math.floor(Math.random() * choices.length);
        return choices[randomNumber];
    }   

    function playerPlay() {
        let playerSelection = prompt("Choose rock, paper, or scissors:");

        if (playerSelection === null) {
            alert("You must play the game to continue.");
            return playerPlay(); 
        }

        playerSelection = playerSelection.toLowerCase().trim();


        if (choices.includes(playerSelection)) {
            return playerSelection;
        }

        const matches = choices.filter(choice => new RegExp(`^${playerSelection}`).test(choice));
        
        if (matches.length === 1) {
            const confirmed = confirm(`Did you mean "${matches[0]}"?`);
            if (confirmed) {
                return matches[0];
            }
        } else if (matches.length > 1) {
            alert(`Multiple matches found: ${matches.join(", ")}. Please be more specific.`);
            return playerPlay();
        }

        alert("Invalid answer. Please choose rock, paper, or scissors.");
        return playerPlay();
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
        alert("Open the Developer Tools (Ctrl+F12) to see the game and keyboard instructions.");
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

    game();
})();
