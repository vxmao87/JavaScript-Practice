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
run or invoke a function, all mean the same thing.

Functions can also return values!

*/

function logger() {
  console.log("My name is Jonas!");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  return `Juice with ${apples} apples and ${oranges} oranges.`;;
}

console.log(fruitProcessor(5, 0));