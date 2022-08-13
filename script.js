const rock = "Stein";
const paper = "Papier";
const scissors = "Schere";

let playerWin = 0;
let computerWin = 0;
let unentschieden = 0;

function computerChoice() {
  let compChoice;
  randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice == 1) {
    compChoice = rock;
  } else if (randomChoice == 2) {
    compChoice = paper;
  } else if (randomChoice == 3) {
    compChoice = scissors;
  }
  return compChoice;
}

const btnScissors = document.querySelector("#scissors")
btnScissors.addEventListener("click", () => {
  playerChoice = scissors;
  console.log(playerChoice);
})

const btnRock = document.querySelector("#rock")
btnRock.addEventListener("click", () => {
  playerChoice = rock;
  console.log(playerChoice);
})

const btnPaper = document.querySelector("#paper")
btnPaper.addEventListener("click", () => {
  playerChoice = paper;
  console.log(playerChoice);
})

// function playerChoice() {
//   let plChoice;
//   input = prompt("1 für Schere, 2 für Stein, 3 für Papier")
//   if (input == "1") {
//     plChoice = scissors;
//   } else if (input == 2) {
//     plChoice = rock;
//   } else if (input == 3) {
//     plChoice = paper;
//   }
//   return plChoice;
// }

const roundsDetail = document.querySelector("#roundsDetail");

function playRound(playerSelection, computerSelection) {
  console.log("Spieler: " + playerSelection);

  //  const roundsDetail = document.querySelector("#roundsDetail");

  // const playSel = document.createElement("p");
  // playSel.classList.add("playSel");
  // playSel.textContent = playerSelection;
  // roundsDetail.appendChild(playSel);

  console.log("Computer: " + computerSelection);


  if (playerSelection == rock && computerSelection == paper) {
    console.log("Du verlierst!");
    computerWin += 1;
  } else if (playerSelection == rock && computerSelection == scissors) {
    console.log("Du gewinnst!");
    playerWin += 1;
  } else if (playerSelection == paper && computerSelection == rock) {
    console.log("Du gewinnst!");
    playerWin += 1;
  } else if (playerSelection == paper && computerSelection == scissors) {
    console.log("Du verlierst!");
    computerWin += 1;
  } else if (playerSelection == scissors && computerSelection == paper) {
    console.log("Du gewinnst!");
    playerWin += 1;
  } else if (playerSelection == scissors && computerSelection == rock) {
    console.log("Du verlierst!");
    computerWin += 1;
  } else if (playerSelection == computerSelection) {
    console.log("Unentschieden!");
    unentschieden += 1;
  }
  console.log("---------------------");
}

function game() {
  let rounds = 5;
  //   let rounds = parseInt(prompt("Wieviele Runden möchtest du spielen?"));
  console.log("Okay, wir spielen " + rounds + " Runden!");
  console.log("---------------------");

  const playSel = document.createElement("p");
  playSel.classList.add("playSel");
  playSel.textContent = playerSelection;
  roundsDetail.appendChild(playSel);


  for (i = 1; i <= rounds; i++) {
    playRound(playerChoice(), computerChoice());
  }
  console.log("---------------------");
  console.log(playerWin + " mal gewonnen");
  console.log(computerWin + " mal verloren");
  console.log(unentschieden + " mal unentschieden");
  console.log("---------------------");
}

game();





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