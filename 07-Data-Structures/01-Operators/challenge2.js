const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// #1
// let goalNum = 0;
// for (const player of game.scored) {
//   goalNum++;
//   console.log(`Goal ${goalNum}: ${player}`);
// }

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// #2
// const calcAverage = function (oddsArray) {
//   let sum = 0;
//   for (let odd of oddsArray) {
//     sum += odd;
//   }
//   return sum / oddsArray.length;
// };

// const oddVals = Object.values(game.odds);
// console.log(oddVals);
// console.log(calcAverage(oddVals));

let average = 0;
const oddVals = Object.values(game.odds);
for (const odd of oddVals) {
  average += odd;
}
average /= oddVals.length;
console.log(average);

// #3
const oddEntries = Object.entries(game.odds);
console.log(oddEntries);

// for (const [team, odd] of oddEntries) {
//   let teamName = "";
//   if (team === "team1") {
//     teamName = `victory ${game.team1}`;
//   } else if (team === "team2") {
//     teamName = `victory ${game.team2}`;
//   } else {
//     teamName = "draw";
//   }
//   console.log(`Odd of ${teamName}: ${odd}`);
// }

for (const [team, odd] of oddEntries) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Bonus
const scorers = new Object();
for (const player of game.scored) {
  if (!(player in scorers)) {
    scorers[player] = 1;
  } else {
    scorers[player]++;
  }
}

console.log(scorers);
