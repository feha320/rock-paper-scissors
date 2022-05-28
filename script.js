const rock = "Stein";
const paper = "Papier";
const scissors = "Schere";

function computerChoice () {
  randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice == 1) {
    computerChoice = rock;
  } else if (randomChoice == 2) {
    computerChoice = paper;
  } else if (randomChoice == 3) {
    computerChoice = scissors;
  }
  return computerChoice;
}

function playerChoice() {
  let choice
  input = prompt("1 für Schere, 2 für Stein, 3 für Papier")
  if (input == "1") {
    choice = scissors;
  } else if (input == 2) {
    choice = rock;
  } else if (input == 3) {
    choice = paper;
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  console.log("Spieler: " + playerSelection);
  console.log("Computer: " + computerSelection);
  if (playerSelection == rock && computerSelection == paper) {
    console.log("Du verlierst!");
  } else if (playerSelection == rock && computerSelection == scissors) {
    console.log("Du gewinnst!");
  } else if (playerSelection == paper && computerSelection == rock) {
    console.log("Du gewinnst!");
  } else if (playerSelection == paper && computerSelection == scissors) {
    console.log("Du verlierst!");
  }  else if (playerSelection == scissors && computerSelection == paper) {
    console.log("Du gewinnst!");
  } else if (playerSelection == scissors && computerSelection == rock) {
    console.log("Du verlierst!");
  } else if (playerSelection == computerSelection) {
    console.log("Unentschieden!");
  }
}


playRound(playerChoice(), computerChoice());






/* Test

let r = 0;
let p = 0;
let s = 0;

for (i = 1; i <= 10000; i++) {
  computerPlay();
  if (computerChoice == rock) {
    r += 1;
  }
  if (computerChoice == paper) {
    p += 1;
  }
  if (computerChoice == scissors) {
    s += 1;
  }
}

console.log("Stein = " + r);
console.log("Papier = " + p);
console.log("Schere = " + s);

*/