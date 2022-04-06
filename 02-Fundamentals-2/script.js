// Activates Strict Mode in the entire script; must be the first line in file!
// We can avoid accidental errors and bugs using this line of code below.
'use strict';

/*----------------------------------------------------------------------------------*/

// Strict Mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive!!!");

// // With Strict Mode on, words like 'if', 'interface' and 'private' will
// // not be allowed since they may be future words to be implemented in 
// // future JavaScript updates.
// const interface = 'Audio';
// const private = 534;

/*----------------------------------------------------------------------------------*/

/*

Functions

They are stacks of code that can be used over and over again, perfect for running 
test cases in particular! Functions can come with values called parameters. You can call,
run, execute or invoke a function, all mean the same thing.

Functions can also return values!

*/

// function logger() {
//   console.log("My name is Jonas!");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   return `Juice with ${apples} apples and ${oranges} oranges.`;;
// }

// console.log(fruitProcessor(5, 0));

/*----------------------------------------------------------------------------------*/

/*

Function Declarations VS Expressions

The last lecture showed up "function declarations," which defines and declares 
a function in particular. But a "function expression" does not have a name, and
is instead defined inside a variable for example.

Parameters are placeholders in the function, and arguments are the actual values
that will be used iin the function.

*/

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge(1991);

// console.log(age1, age2);

/*----------------------------------------------------------------------------------*/

/*

Arrow Functions

These methods are a very, very quick way to write a function that will immediately
return something given a couple parameters. They also need to be stored as a 
variable for it to work.

It's a special form of a function expression. The return happens implicitly!!!

But arrow functions shouldn't probably be too complex. They don't get a 'this'
keyword, so we'll talk about this later.

*/

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

/*----------------------------------------------------------------------------------*/

/*

Functions Calling Other Functions

*/

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   return `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
// }

// console.log(fruitProcessor(2,3));

/*----------------------------------------------------------------------------------*/

/*

Introduction to Arrays

Arrays hold multiple values. JavaScript arrays can somehow hold variables of 
different types. Other arrays can also go inside arrays.
Array values MUST be expressions, not statements.

*/

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [];
for (let year in years) {
  ages.push(calcAge(years[year]));
}

console.log(ages);

/*----------------------------------------------------------------------------------*/

/*

Basic Array Operations (Methods)

Arrays.push(value)
This adds the value onto the end of an array. It returns the length of the array.

Arrays.unshift(value)
This adds the value onto the beginning of the array. t returns the length of the array.

Arrays.pop()
This removes the last element of the array. The popped value is also returned.

Arrays.shift()
This removes the first element of the array. The popped value is also returned.

Arrays.indexOf(value)
This returns the index where the given value is located.

Arrays.includes(value)
This returns true if the value is in the array, false otherwise.

*/

/*----------------------------------------------------------------------------------*/

/*

Introduction to Objects

We can have an array full of different values, or associate each value with a key!
Each key has a property, which is its name.

Arrays are for ordered data and Objects are for unstructured data.

*/

// // JavaScript Array
// const jonasArray = [
//   'Jonas',
//   'Schneider',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];

// console.log(jonasArray);

// // JavaScript Object
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schneider',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };

// console.log(jonas);

/*----------------------------------------------------------------------------------*/

/*

Dot VS Bracket Notation

Dot notation is Object.value, wheres bracket notation is Object["value"].

Bracket notation is very versatile since you're putting in a String compared to dot notation.

*/

// // Dot Notation
// console.log(jonas.lastName);

// // Bracket Notation
// console.log(jonas["lastName"]);

// // Any expression can be added inside for bracket notation.
// const nameKey = "Name";
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // Will return undefined
// const interestedIn = prompt("What are you interested in? Choose firstName, lastName, age, job and friends.")
// console.log(jonas.interestedIn);

// // This is correct
// console.log(jonas[interestedIn]);

/*----------------------------------------------------------------------------------*/

/*

Object Methods

Objects can even carry methods! And can be accessed in the same way! But keep in mind
that only expressions work for Object values.

*/

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schneider',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  calcAge: function () {
    return 2037 - this.birthYear;
  }
};

console.log(jonas.calcAge());