const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");

rock.addEventListener("click", () => {
  results.textContent = playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  results.textContent = playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  results.textContent = playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  const numGen = Math.floor(Math.random() * 3 + 1);
  if (numGen === 1) {
    return "rock";
  } else if (numGen === 2) {
    return "paper";
  } else if (numGen === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You won this round!";
  } else {
    return "You lose!";
  }
}

function game() {
  let playerPoint = 0;
  let computerPoint = 0;

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const round = playRound(playerSelection, computerSelection);
  if (round === "You won this round!") {
    playerPoint++;
    console.log(`Player: ${playerPoint}`);
    console.log(`Computer: ${computerPoint}`);
    console.log("You won this round!");
  } else if (round === "You lose!") {
    computerPoint++;
    console.log(`Player: ${playerPoint}`);
    console.log(`Computer: ${computerPoint}`);
    console.log("You lost this round!");
  } else {
    console.log("Tie!");
  }
}
