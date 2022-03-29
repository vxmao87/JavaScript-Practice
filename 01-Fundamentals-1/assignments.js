// Values and Variables
// let country = "United Sates";
// let continent = "North America";
// let population = 329500000;

// console.log(country)
// console.log(continent)
// console.log(population)

/*----------------------------------------------------------------------------------*/

// Data Types
// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/*----------------------------------------------------------------------------------*/

// // let, const and var
// language = "English";
// const country = "United Sates";
// const continent = "North America";
// let population = 329;
// const isIsland = false;
// //isIsland = true; (this will throw an error)

/*----------------------------------------------------------------------------------*/

// // Basic Operators
// console.log(population / 2);
// population++;
// console.log(population > 6);
// console.log(population < 33);
// const description1 = 
//   country + " is in " + 
//   continent + ", and its " + 
//   population + " million people speak " + 
//   language + ".";
// console.log(description1);

/*----------------------------------------------------------------------------------*/

// // Strings and Template Literals
// const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}.`;
// console.log(description2)

/*----------------------------------------------------------------------------------*/

// // Taking Decisions: if/else statements
// function isPopulationAboveAverage(countryPopulation) {
//   if (countryPopulation > 33) {
//     console.log(`${country}'s population is above average.`);
//   } else {
//     const populationBelow = 33 - countryPopulation;
//     console.log(`${country}'s population is ${33 - populationBelow} below average.`);
//   }
// }

// isPopulationAboveAverage(population);
// population = 13;
// isPopulationAboveAverage(population);
// population = 130;
// isPopulationAboveAverage(population);
// population = 329;

/*----------------------------------------------------------------------------------*/

// // Type Conversion and Coercion
// let op1 = '9' - '5';  // 4 (Number)
// let op2 = '19' - '13' + '17';  // 617 (String)
// let op3 = '19' - '13' + 17;  // 23 (Number)
// let op4 = '123' < 57;  // false (Boolean)
// let op5 = 5 + 6 + '4' + 9 - 4 - 2;  // 1143 (Number)

// console.log(op1);
// console.log(op2);
// console.log(op3);
// console.log(op4);
// console.log(op5);

// console.log(typeof op1);
// console.log(typeof op2);
// console.log(typeof op3);
// console.log(typeof op4);
// console.log(typeof op5);

/*----------------------------------------------------------------------------------*/

// // Equality Operators: == vs ===
// const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

// if (numNeighbors === 1) {
//   console.log("Only 1 neighbor!");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// /*
// We should use === over == in this situation since we are using specifically numbers
// inside this problem.
// */

/*----------------------------------------------------------------------------------*/

// // Logical Operators
// let country = "United States";
// let language = "English";
// let population = 49;
// let isIsland = false;
// if ((language === "English") && (population < 50) && (!isIsland)) {
//   console.log(`You should live in ${country}!`);
// } else {
//   console.log(`${country} is not your ideal country.`);
// }

/*----------------------------------------------------------------------------------*/

// The 'switch' Statement
let language = 'mandarin';

switch(language) {
  case 'mandarin':
  case 'chinese':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default: 
    console.log('Great language too :D');
    break;
}
