/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

let guesses = [];

let correctNumber = getRandomNumber();

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  numberGuess = Number(numberGuess);
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
  document.getElementById("result").style.display = "block";
  document.getElementById("history").style.display = "block";
}

function displayResult(numberGuess) {
  if (numberGuess === correctNumber) {
    showYouWon();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else if (numberGuess > correctNumber) {
    showNumberAbove();
  }
}

function initGame() {
  correctNumber = getRandomNumber();
  guesses = [];
  numberGuess = document.getElementById("number-guess").value = '';
  document.getElementById("history").style.display = "none";
  document.getElementById("result").style.display = "none"

}

function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber() {
  // *CODE GOES BELOW HERE *
  let randomNr = Math.floor(Math.random() * 100 + 1);
  return randomNr;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  for (let index = guesses.length - 1; index >= 0; index--) {
    list +=
      `<li class="list-group-item">` +
      "You guessed " +
      guesses[index] +
      `</li>`;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}