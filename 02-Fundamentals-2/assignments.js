// // Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// console.log(describeCountry("The United States", 330, "Washington D.C."));
// console.log(describeCountry("China", 1402, "Beijing"));
// console.log(describeCountry("Japan", 126, "Tokyo"));

/*----------------------------------------------------------------------------------*/

// // Function Declarations VS Expressions
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// console.log(percentageOfWorld1(330));
// console.log(percentageOfWorld1(1402));
// console.log(percentageOfWorld1(126));

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const percent1 = percentageOfWorld2(330);
// const percent2 = percentageOfWorld2(1402);
// const percent3 = percentageOfWorld2(126);
// console.log(percent1, percent2, percent3);

/*----------------------------------------------------------------------------------*/

// // Arrow Functions
// const percentageOfWorld3 = population => (population / 7900) * 100;
// const percent12 = percentageOfWorld3(330);
// const percent22 = percentageOfWorld3(1402);
// const percent32 = percentageOfWorld3(126);

// console.log(percent12, percent22, percent32);

/*----------------------------------------------------------------------------------*/

// // Functions Calling Other Functions
// const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;

// const country1 = describePopulation("The United States", 330);
// const country2 = describePopulation("China", 1402);
// const country3 = describePopulation("Japan", 126);

// console.log(country1, country2, country3);

/*----------------------------------------------------------------------------------*/

// // Introduction to Arrays
// const populations = [330, 1402, 126, 24];
// console.log(populations.length === 4);

// const percentages = [];
// for (let pop in populations) {
//   percentages.push(percentageOfWorld1(populations[pop]));
// }

// console.log(percentages);

/*----------------------------------------------------------------------------------*/

// // Basic Array Operations (Methods)

// let neighbors = ['Vietnam', 'Mongolia', 'India'];
// neighbors.push('Utopia');
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);

// if (neighbors.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// const index1 = neighbors.indexOf("India");
// neighbors[index1] = "Korea";
// console.log(neighbors);

/*----------------------------------------------------------------------------------*/

// Introduction to Objects

// const myCountry = {
//   country: "United States",
//   capital: "Washington D.C.",
//   language: "English",
//   population: 330,
//   neighbors: ['Mexico', 'Canada'],
// };
// console.log(myCountry);

/*----------------------------------------------------------------------------------*/

// Dot vs. Bracket Notation

// const info = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}. ${myCountry.neighbors[1]} is one of the countries that borders it.`;
// console.log(info);

// myCountry.population -= 2;
// console.log(myCountry.population);

// myCountry["population"] += 2;
// console.log(myCountry["population"]);

/*----------------------------------------------------------------------------------*/

// Object Methods

// const myCountry = {
//   country: "United States",
//   capital: "Washington D.C.",
//   language: "English",
//   population: 330,
//   neighbors: ['Mexico', 'Canada'],
//   describe: function() {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}. ${this.neighbors[1]} is one of the countries that borders it.`);
//   },
//   checkIsIsland: function () {
//     this.isIsland = (this.neighbors.length === 0) ? true : false;
//   },
// };

// myCountry.describe();
// myCountry.checkIsIsland();
// console.log(myCountry);

/*----------------------------------------------------------------------------------*/

// Iteration: The for loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter #${i} is currently voting`);
// }

/*----------------------------------------------------------------------------------*/

// Looping Arrays, Breaking and Continuing
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const populations = [330, 1402, 126, 24];

// const percentages2 = [];

// for (let pop of populations) {
//   percentages2.push(percentageOfWorld1(pop));
// }

// console.log(percentages2);

// Both percentages and percentages2 are the same:
// [4.177215189873418, 17.746835443037977, 1.5949367088607596, 0.3037974683544304]

/*----------------------------------------------------------------------------------*/

// Looping Backwards and Loops in Loops

const listOfNeighbors = [
  ['Canada', 'Mexico'], 
  ['Spain'], 
  ['Norway', 'Sweden', 'Russia']
];

for (let neighbors of listOfNeighbors) {
  for (let country of neighbors) {
    console.log(`Neighbor: ${country}`);
  }
}

/*----------------------------------------------------------------------------------*/

// The while loop

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const populations = [330, 1402, 126, 24];

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
