const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const cChoice = document.getElementById("computer-choice");

const choices = ["rock", "paper", "scissors"];

const yourPoints = document.getElementById("yourPoints");
const computerPoints =  document.getElementById("computerPoints");

const round = document.getElementById("round");

let yourScore = 0;
let computerScore = 0;

scissors.addEventListener("click", function () {
  game("scissors");
  scissors.classList.remove("my-choice");
  rock.classList.remove("my-choice");
  paper.classList.remove("my-choice");
  setTimeout(function () {
    scissors.classList.add("my-choice"), 100;
  });
});

rock.addEventListener("click", function () {
  game("rock");
  rock.classList.remove("my-choice");
  scissors.classList.remove("my-choice");
  paper.classList.remove("my-choice");
  setTimeout(function () {
    rock.classList.add("my-choice"), 100;
  });
});

paper.addEventListener("click", function () {
  game("paper");
  paper.classList.remove("my-choice");
  scissors.classList.remove("my-choice");
  rock.classList.remove("my-choice");
  setTimeout(function () {
    paper.classList.add("my-choice"), 100;
  });
});



function computerChoice() {
  computerRandom = choices[Math.floor(Math.random() * choices.length)];
  let computerText = "test";
  if (computerRandom == "rock") {
    computerText = "STEIN";
  } else if (computerRandom == "paper") {
    computerText = "PAPIER"
  } else if (computerRandom == "scissors") {
    computerText = "SCHERE";
  }
  cChoice.textContent = computerText;
  return computerRandom;
}

function game(choice) {
  const pC = choice;
  const cC = computerChoice();

  if (pC + cC == "paperrock" ||
    pC + cC == "scissorspaper" ||
    pC + cC == "rockscissors") {
      round.textContent = "DU GEWINNST!";
      yourScore ++;
      yourPoints.textContent = yourScore;
    console.log(pC + cC);
    console.log("WIN")
  } else if (pC + cC == "rockpaper" ||
    pC + cC == "paperscissors" ||
    pC + cC == "scissorsrock") {
      round.textContent = "DU VERLIERST!";
      computerScore ++;
      computerPoints.textContent = computerScore;
    console.log(pC + cC);
    console.log("LOSE");
  } else if (pC + cC == "rockrock" ||
    pC + cC == "paperpaper" ||
    pC + cC == "scissorsscissors") {
      round.textContent = "UNENTSCHIEDEN!";
    console.log(pC + cC);
    console.log("unentschieden");
  }
}
