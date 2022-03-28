// Values and Variables
// let country = "United Sates";
// let continent = "North America";
// let population = 329500000;

// console.log(country)
// console.log(continent)
// console.log(population)

// Data Types
// let isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// let, const and var
language = "English";
const country = "United Sates";
const continent = "North America";
let population = 329;
const isIsland = false;
//isIsland = true; (this will throw an error)

// Basic Operators
console.log(population / 2);
population++;
console.log(population > 6);
console.log(population < 33);
const description1 = 
  country + " is in " + 
  continent + ", and its " + 
  population + " million people speak " + 
  language + ".";
console.log(description1);

// Strings and Template Literals
const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}.`;
console.log(description2)

// Taking Decisions: if/else statements
function isPopulationAboveAverage(countryPopulation) {
  if (countryPopulation > 33) {
    console.log(`${country}'s population is above average.`);
  } else {
    const populationBelow = 33 - countryPopulation;
    console.log(`${country}'s population is ${33 - populationBelow} below average.`);
  }
}

isPopulationAboveAverage(population);
population = 13;
isPopulationAboveAverage(population);
population = 130;
isPopulationAboveAverage(population);
population = 329;
