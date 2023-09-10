let player1Score = 0;
        let player2Score = 0;
        let currentPlayer = 1;

        const rollDiceButton = document.getElementById("rollDice");
        const resetGameButton = document.getElementById("resetGame");
        const diceImage = document.getElementById("diceImage");
        const player1ScoreElement = document.getElementById("player1Score");
        const player2ScoreElement = document.getElementById("player2Score");

        rollDiceButton.addEventListener("click", () => {
            const diceValue = Math.floor(Math.random() * 6) + 1; // Random dice roll between 1 and 6
            diceImage.src = `img/dice-${diceValue}.png`;

            if (currentPlayer === 1) {
                player1Score += diceValue;
                player1ScoreElement.textContent = player1Score;
            } else {
                player2Score += diceValue;
                player2ScoreElement.textContent = player2Score;
            }

            if (player1Score >= 30 || player2Score >= 30) {
                endGame();
            } else {
                currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch players
            }
        });

        resetGameButton.addEventListener("click", () => {
            player1Score = 0;
            player2Score = 0;
            currentPlayer = 1;
            player1ScoreElement.textContent = "0";
            player2ScoreElement.textContent = "0";
            diceImage.src = "dice1.png";
        });

        function endGame() {
            rollDiceButton.disabled = true;
            resetGameButton.disabled = false;

            if (player1Score >= 30) {
                alert("👀✌Player 1 wins🎇🎆");
            } else {
                alert("👀✌Player 2 wins🎇🎆");
            }
        }