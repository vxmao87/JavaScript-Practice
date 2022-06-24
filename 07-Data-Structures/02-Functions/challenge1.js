"use strict";

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // #1
  registerNewAnswer: function () {
    const userNum = Number(
      prompt(`${this.question}\n${[...this.options].join("\n")}`)
    );
    typeof userNum === "number" &&
      userNum >= 0 &&
      userNum < this.answers.length &&
      this.answers[userNum]++;
    this.displayResults();
    this.displayResults("string");
  },
  // #3
  displayResults: function (type = "array") {
    console.log(
      type === "array"
        ? this.answers
        : `Poll results are ${this.answers.join(", ")}`
    );
  },
};

// #2
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// Bonus
// We use "call" to set the 'this' keyword to a new object instead of the one given above.
poll.displayResults.call({ answers: testData1 });
poll.displayResults.call({ answers: testData1 }, "string");
poll.displayResults.call({ answers: testData2 });
poll.displayResults.call({ answers: testData2 }, "string");
