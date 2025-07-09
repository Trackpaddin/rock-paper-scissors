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
    let humanChoice = prompt("Rock, paper, or scissors?");
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComChoice());
console.log(getHumanChoice());