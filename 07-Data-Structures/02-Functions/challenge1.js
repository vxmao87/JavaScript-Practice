"use strict";

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

// #3
const displayResults = function (answers, type = "array") {
  console.log(type === "array" ? answers : `Poll results are`);
};

// #1
poll.registerNewAnswer = function () {
  const userNum = Number(
    prompt(`${this.question}\n${[...this.options].join("\n")}`)
  );
  if (userNum >= 0 && userNum < this.answers.length) {
    this.answers[userNum]++;
  } else {
    alert("Invalid answer, try again!");
  }
  displayResults(this.answers);
};

// #2
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// Bonus
displayResults(testData1);
displayResults(testData2);
