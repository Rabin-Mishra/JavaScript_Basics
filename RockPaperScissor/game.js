//NOW ADDING TEH JS
let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  //random generates number between 0 and 9 and can generate random whole number as well
  const randIndx = Math.floor(Math.random() * 3); //to make it between 0 and 2 floor is used to omit the decimal part
  return options[randIndx];
};

const drawGame = () => {
  console.log("It's a draw!");
  msg.innerText = "It's a draw!";
  msg.style.backgroundColor = "yellow";
};
const showWinner = (userWon, userChoice, computerChoice) => {
  if (userWon) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log(`User wins!, ${userChoice} beats ${computerChoice}`);
    msg.innerText = "User wins!";
    //set the message to background color green
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    console.log(`Computer wins!", ${computerChoice} beats ${userChoice}`);
    msg.innerText = "Computer wins!";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  const computerChoice = genCompChoice();
  console.log("computer choice=", computerChoice);
  //condition
  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWon = true;
    if (userChoice === "rock") {
      userWon = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWon = computerChoice === "scissor" ? false : true;
    } else {
      userWon = computerChoice === "rock" ? false : true;
    }
    showWinner(userWon, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    console.log(choice.id);
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
