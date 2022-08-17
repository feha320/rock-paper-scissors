const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const cChoice = document.getElementById("computer-choice");

scissors.addEventListener("click", computerChoice);
rock.addEventListener("click", computerChoice);
paper.addEventListener("click", computerChoice);

const choices = ["rock", "paper", "scissors"];

function computerChoice() {
  computerRandom = choices[Math.floor(Math.random() * choices.length)];
  let computerText = "test";
  if(computerRandom == "rock") {
    computerText = "STEIN";
  } else if (computerRandom == "paper") {
    computerText = "PAPIER"
  } else if (computerRandom == "scissors") {
    computerText = "SCHERE";
  }
  cChoice.textContent = computerText;
  // return computerRandom;
}

