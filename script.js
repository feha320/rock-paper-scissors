const rock = "Stein";
const paper = "Papier";
const scissors = "Schere";
let computerChoice;

function computerPlay () {
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

console.log(computerPlay());



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