"use strict";

/*-----------------------------------------------------------------------------------------*/

// Intro

// Remember to type 'live-server' to run the code and update as you save!
// Emojis: Cmd + ctrl + Space

// // Take the text content of the 'p' tag and 'message' element
// console.log(document.querySelector(".message").textContent);

/*-----------------------------------------------------------------------------------------*/

/*

JavaScript in the Browser: DOM and Events Fundamentals

This is when JavaScript interacts with the webpage, or doing DOM manipulation.

DOM stands for Document-Object Model. It's a structured representation of HTML documents, and
allows JavaScript to access HTML elements and styles to manipulate them. So we can change text,
HTML attributes and even CSS styles. The DOM gets created by a browser as soon as the page loads.

There are child, parent and sibling elements when we talk about DOM manipulation.
The 'document' is the entry point in 'document.querySelector'.

BUT the DOM !== JavaScript! DOM abd DOM methods are part of the Web APIs instead. They 
are libraries that can interact with JavaSCript. Timers and fetch are also included.

*/

/*-----------------------------------------------------------------------------------------*/

/*

JavaScript in the Browser: Selecting and Manipulating Events

We can also set the contents of an element.

*/

// // Change the text content of the 'message' element
// document.querySelector(".message").textContent = "Correct Number! 🎉";
// console.log(document.querySelector(".message").textContent);

// // Changes the text content of the 'number' and 'score' elements
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// // Changes the value of the 'guess' element, the number that shows up oon the guess box
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

/*-----------------------------------------------------------------------------------------*/

/* 

JavaScript in the Browser: Event Listeners
Implementing the Game Logic

Event listeners look for mouse clicks, keyboard presses, etc.
Then an event listener is activated.

Like how we can change the text content of the elements, we can also grab the elements and
apply event listeners to those HTML elements!

First you add an event listener to an element, then add a function into it, which is called
an event handler. Remember functions are also just values so it can be passed in as a parameter
to a function too! These event handlers won't activate until the event occurs.

*/

let score = 20;
let highScore = 0;
let secretNum = Number(Math.trunc(Math.random() * 20)) + 1;
console.log(secretNum);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Remember '0' is falsy, so this condition will run when guess = 0
  if (!guess) {
    console.log("Please type in a guess!");

    // Player wins
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent =
      "🎉 Correct number! You win!!!";
    document.querySelector(".check").disabled = true;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNum;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // Guess is too high
  } else if (guess > secretNum) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too high!";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "Sorry, you lose!";
      document.querySelector(".check").disabled = true;
    }

    // Guess is too low
  } else if (guess < secretNum) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too low!";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "Sorry, you lose!";
      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNum = Number(Math.trunc(Math.random() * 20)) + 1;
  console.log(secretNum);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".check").disabled = false;
});
