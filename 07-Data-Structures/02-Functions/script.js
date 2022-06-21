"use strict";

/*-----------------------------------------------------------------------------------------*/

/*

Default Parameters

For functions, some parameters should be set by default so we don't have the set them manually for every iteration of said function.

You basically set a value for a parameter inside where you define your parameters. When you call the function, you can set these values or you can leave them out by typing 'undefined' for the variable you want to use the default value for.

*/

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 4);
createBooking("LH123", 2, 236);
createBooking("LH123", undefined, 236);

/*-----------------------------------------------------------------------------------------*/

/*

Passing Arguments into Functions: Value vs Reference

Be careful how you pass in your variables and when you pass them in! The order of your code matters, and it lead to unintended consequences, such as changing values you didn't mean to change.

JavaScript does not have pass-by reference, only pass-by values. You can't pass references to any values besides themselves.


*/

const flight = "LH234";
const vincent = {
  name: "Vincent Nguyen",
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 1234567890) {
    console.log("Check in");
  } else {
    console.log("Wrong passport!");
  }
};

checkIn(flight, vincent);

// The flight name has NOT changed. Strings are primitive variables.
console.log(flight);
console.log(vincent);

// These values are copied.
const flightNum = flight;
const passenger = vincent;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
  console.log(person.passport);
};

newPassport(vincent);
checkIn(flight, vincent);

/*-----------------------------------------------------------------------------------------*/

/*

First Class and Higher-Order Functions

JavaScript treats functions like first-class citizens, meaning they're simply just values. Functions are basically just another "type" of object. You can store functions in variables or properties, and pass functions as arguments to other functions! You can also return a function from another function, and call methods on functions.

Higher-order functions receive another function as an argument, return a function, or both. The 'addEventListener' is an example of a higher-order function, because it takes a 'click' event and a callback function.

There's a lot of confusion between the two. There are higher-order functions in practice, but not really first-order functions.

*/

/*-----------------------------------------------------------------------------------------*/

/*

Functions Accepting Callback Functions

Callback functions allow abstraction, which is the action of hiding details of a function. So for the function below, the 'transform' function doesn't care what functions get passed into it.

Higher-order functions most likely have a lot of abstraction.

*/

// First-order
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// First-order
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order because it takes in a function as a parameter
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // The function also has parameters itself!
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is awesome!", upperFirstWord);
transformer("JavaScript is awesome!", oneWord);

const highFive = function () {
  console.log("👋");
};

// highFive is the event handler, or callback function
document.body.addEventListener("click", highFive);

// For each element in the array, call the highFive method
["Vincent", "Kevin", "Alex"].forEach(highFive);

/*-----------------------------------------------------------------------------------------*/

/*

Functions Returning Functions

This method works best in functional programming.

*/

// A function that returns another function...
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

// Writing the same method above using only arrow functions...
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}!`);

// This is basically a function!
const greeter = greet("Hey there");
greeter("Jacky");
greeter("Steven");

// This works too!!!
greet("Hello")("Brandon");
greetArrow("Hi")("Luke");

/*-----------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------*/
