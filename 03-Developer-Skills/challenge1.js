'use strict';

// Prints the forecast in the format "(temp) degrees in (day) days"
function printForecast(temps) {
  let day = 0;
  for (const temp of temps) {
    day++;
    console.log(`${temp} degrees in ${day} days...\n`);
  }
}

// Test data
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

printForecast(temps1);
printForecast(temps2);
