// // Returns the average of the given 3 scores
// function calculateAverage(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }

// // Determines the winner based on the 2 given score averages
// function determineWinner(score1, score2) {
//   console.log(`${score1} VS ${score2}`)
//   if (score1 === score2 && score1 >= 100 && score2 >= 100) {
//     console.log("It's a draw!");
//   } else if (score1 > score2 && score1 >= 100) {
//     console.log("Dolphins win!");
//   } else if (score1 < score2 && score2 >= 100) {
//     console.log("Koalas win!");
//   } else {
//     console.log("Sorry, no one wins!");
//   }
// }

// // Test Data #1
// let dolphin1 = calculateAverage(96, 108, 109);
// let koalas1 = calculateAverage(88, 91, 110);

// // Test Data #2
// let dolphin2 = calculateAverage(97, 112, 101);
// let koalas2 = calculateAverage(109, 95, 123);

// // Test Data #3
// let dolphin3 = calculateAverage(97, 112, 101);
// let koalas3 = calculateAverage(109, 95, 106);

// determineWinner(dolphin1, koalas1);
// determineWinner(dolphin2, koalas2);
// determineWinner(dolphin3, koalas3);