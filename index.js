const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results-header");
const playerPoint = document.querySelector(".player-point");
const computerPoint = document.querySelector(".computer-point");
const replay = document.querySelector(".try-again");
let playerPointNum = parseInt(playerPoint.textContent, 10);
let computerPointNum = parseInt(computerPoint.textContent, 10);
let andrewTwoHourFart = new Audio('2HourFartShort.mp3');

rock.addEventListener("click", () => {
  results.textContent = playRound("rock", getComputerChoice());
  checkTotals();
  
});
paper.addEventListener("click", () => {
  results.textContent = playRound("paper", getComputerChoice());
  checkTotals();
  
});
scissors.addEventListener("click", () => {
  results.textContent = playRound("scissors", getComputerChoice());
  checkTotals();
  
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
    playerPointNum += 1;
    playerPoint.textContent = playerPointNum;
    return "You won this round!";
  } else {
    computerPointNum += 1;
    computerPoint.textContent = computerPointNum;
    return "You lose this round!";
  }
}

function checkTotals() {
  if (playerPointNum === 5) {
    results.textContent = "You won the game!";
    disableButtons();
    andrewTwoHourFart.play();
    playAgain();

  } else if (computerPointNum === 5) {
    results.textContent = "You lost the game!";
    disableButtons();
    andrewTwoHourFart.play();
    playAgain();
  }
}

function disableButtons() {
  const rockButton = document.querySelector(".rock").disabled = true;
  const paperButton = document.querySelector(".paper").disabled = true;
  const scissorsButton = document.querySelector(".scissors").disabled = true;
}

function playAgain() {
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Play again?';
  resetButton.classList.add('replay-button');
  replay.appendChild(resetButton);
  resetButton.addEventListener('click', () => {
    window.location.reload();
  });
}
