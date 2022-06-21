"use strict";

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// #1
// Create an array called 'events' out of the given map, which has no duplicates.
const events = [...new Set(gameEvents.values())];
console.log(events);

// #2
// Delete the erroneous event at timestamp 64.
gameEvents.delete(64);
console.log(gameEvents);

// #3
// Calculate the average time it takes for an event ot occur.
// const timeStamps = [...gameEvents.keys()];
// console.log(timeStamps);

// let timeAverage = 0;
// for (let i = 0; i < timeStamps.length - 1; i++) {
//   console.log(timeStamps[i + 1] - timeStamps[i]);
//   timeAverage += timeStamps[i + 1] - timeStamps[i];
// }
// timeAverage /= timeStamps.length;
// console.log(`An event happened, on average, every ${timeAverage} minutes.`);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

const lastTime = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${lastTime / gameEvents.size} minutes.`
);

// #4
// Loop over 'gameEvents' and log each element like this: [FIRST HALF] 17: ⚽ GOAL
for (const [time, sportEvent] of gameEvents) {
  const gameLength = time <= 45 ? "FIRST" : "SECOND";
  console.log(`[${gameLength} HALF] ${time}: ${sportEvent}`);
}
