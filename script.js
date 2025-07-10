function getComChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let comScore = 0;

function playRound(humanChoice, comChoice) {
    if (humanChoice === comChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && comChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && comChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && comChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if (comChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats scissors.");
        comScore++;
    } else if (comChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats rock.");
        comScore++;
    } else if (comChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors beats paper.");
        comScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) { // Best of five
        console.log(`Round ${i + 1}:`);
        console.log("Computer has chosen...")
        
        const humanSelection = getHumanChoice();
        const comSelection = getComChoice();

        playRound(humanSelection, comSelection);
        
        console.log(`Human score: ${humanScore}, Computer score: ${comScore}`);
        
        if (humanScore === 3) {
            console.log("Human wins!")
            break;
        } else if (comScore === 3) {
            console.log("Computer wins!")
            break;
        }
    }
}

playGame();