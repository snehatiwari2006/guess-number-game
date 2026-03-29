let number;
let tries = 0;

const input = document.getElementById("guess");
const msg = document.getElementById("message");
const attempts = document.getElementById("attempts");

const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");

// start or restart game
function initGame() {
  number = Math.floor(Math.random() * 100) + 1;
  tries = 0;

  msg.innerText = "";
  attempts.innerText = "";
  input.value = "";
}

// check guess
function checkGuess() {
  let guess = Number(input.value);

  if (!guess || guess < 1 || guess > 100) {
    msg.innerText = "⚠️ Enter a number between 1 and 100";
    return;
  }

  tries++;

  if (guess > number) {
    msg.innerText = "📉 Too high!";
  } 
  else if (guess < number) {
    msg.innerText = "📈 Too low!";
  } 
  else {
    msg.innerText = `🎉 Correct! You guessed it in ${tries} tries`;
    input.disabled = true; // stop after win
  }

  attempts.innerText = `Attempts: ${tries}`;
}

// events
checkBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", () => {
  input.disabled = false;
  initGame();
});

// start game
initGame();