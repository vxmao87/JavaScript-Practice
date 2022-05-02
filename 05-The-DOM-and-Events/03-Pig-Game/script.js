"use strict";

// Selects elements we need for this project.
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Sets variables that need to be within scope.
let scores, currentScore, activePlayer, playing;

// Sets all initial conditions.
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  diceEl.classList.add("hidden");
};

// Runs the above code!!!
init();

// Changes which player is active.
const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  // Use toggle to change which player is active
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolls the dice and displays the number that was rolled.
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Chooses a random number between 1 and 6.
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Shows the dice and the number that rolled above.
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // Adds points to the current player if a 1 is not rolled. Otherwise,
    // the game moves onto the next player.
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayers();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // Adds current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Checks if the score is at least 100. Changes the active player otherwise.
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      switchPlayers();
    }
  }
});

// Resets the game.
btnNew.addEventListener("click", init);
