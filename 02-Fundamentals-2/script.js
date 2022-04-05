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

*/

