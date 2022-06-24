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

/*

The "call" and "apply" Methods

Using the "call" method allows us to explicitly set the "this" keyword you want to refer to. All other parameters are as they are.

Using the "apply" method is like the "call" method but it takes an array of the arguments instead.

We're defining what the "this" keyword refers to for both "call" and "apply" methods.

*/

const evaAir = {
  airline: "Eva Air",
  iataCode: "BR",
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

evaAir.book(239, "Vincent Nguyen");
evaAir.book(999, "Jacky Nguyen");

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = evaAir.book;

// // Does not work
// book(23, "Sarah Williams");

// Using the "call" method!
book.call(euroWings, 23, "Sarah Williams");
book.call(evaAir, 888, "Raymond Chan");
console.log(evaAir);
console.log(euroWings);

const swiss = {
  airline: "Swiss",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Gary Lee");
console.log(swiss);

// Using the "apply" method - not used very often
const flightData = [289, "Alex Deng"];
// book.apply(swiss, flightData);

// This is a better method than the commented out method above
book.call(swiss, ...flightData);

console.log(swiss);

/*-----------------------------------------------------------------------------------------*/

/*

The "bind" Method

We can define the "this" keyword and what it refers to with this method like "call" and "apply" but it instead returns a new function where the "this" keyword is bound.

But for event handler functions, the "this" handler points to the element iin which the handler is attached to.

*/

// This will NOT call the "book" function but will instead return a new function where the "this" keyword will always be set to "eurowings".
const bookEW = book.bind(euroWings);
const bookBR = book.bind(evaAir);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Lee");

const bookEW23 = book.bind(euroWings, 23);
bookEW23("Vincent Nguyen");
bookEW23("Chris Chu");

// With event listeners
evaAir.planes = 300;
evaAir.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// // The "this" keyword points to the button element... :(
// // The "this" keyword is set dynamically
// document.querySelector(".buy").addEventListener("click", evaAir.buyPlane);

// We cannot call the function, so we must use bind which will return a new function.
document
  .querySelector(".buy")
  .addEventListener("click", evaAir.buyPlane.bind(evaAir));

// Partial applications

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// addVAT = value => value + value * 0.23
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Another way to do some of the code above
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

/*-----------------------------------------------------------------------------------------*/

/*

Immediately Invoked Function Expressions (IIFEs)

This is a function that disappears after calling it once.

This allows for data encapsulation, and this is important since we don't want data to be accessible and overwritten by accident. You should hide variables, and scopes are perfect for this, so IIFEs are perfect for this.

*/

const runOnce = function () {
  console.log("This will never run again.");
};

runOnce();

// We make this unnamed function into an expression by enclosing it inside parentheses
// Then we add () at the end to immediately invoke it (IIFE)
(function () {
  console.log("This will never run again.");
  const isPrivate = 23;
})();

// // Is undefined because scope does not have access to private info inside an IIFE
// console.log(isPrivate);

// This will also never run again and is another way to write an immediately invoked expression
(() => console.log("This will never run again."))();

// Creating a block also creates a scope!
{
  const isPrivate = 50;
  var notprivate = 25;
}

// // Is undefined because scope does not have access to private info inside an object
// console.log(isPrivate);

// But you can access var anywhere
console.log(notprivate);

/*-----------------------------------------------------------------------------------------*/

/*

Closures

This isn't an explicitly made feature, like an array. It happens automatically in certain circumstances.

We're just applying everything about the scope chain right now.

The closure makes a function remember all variables it existed at the function's birthplace.

The execution context for secureBooking is gone after it runs. Te booker method is in the global context now but how does the booker function access the passengerCount variable? 

Any function always has access to the variable environment of the execution context in which the function was created, even after that execution context is gone. Booker was born in the execution context of secureBooking, which was popped off the call stack previously. So the booker function gets access to the passengerCount variable.

Therefore a closure is the variable environment attached to the function exactly as it was at the time and place the function was created.

The fact that passengerCount is now part of the scope chain of the booker() function is the closure! But it's basically because the booker function has access to the passengerCount variable since it was defined in the scope of the function it's referring to. The scope chain is preserved through the closure even if the scope has been destroyed.

Formal closure definition:
A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

Informal:
A closure gives a function access to all the variables of its parent function even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

Analogy:
A closure makes sure that a function does't lose its connections to variables that existed at the function's birthplace.

Better:
A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

We don't need to create closures manually, JavaScript does this automatically. We can't even access closed-over variables explicitly, and a closure is NOT a tangible JavaScript object.

*/

const secureBooking = function () {
  let passengerCount = 0;

  // The 'secureBooking function is done running once we hit this return function
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// Shows the contents of the given function. You can check the closure of the function here.
console.dir(booker);

// The booker function exists in its scope and still has access to the variables.

// Example 1
// The 'f' variable was defined in the global scope but assigned a value in the g function. So this f function can access the 'a' variable even after the 'g' function has ended its call.
let f;
const g = function () {
  const a = 25;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// The closure has the value of 'a'.
console.dir(f);

// Reassigning the f function
h();
f();

// The closure has the value of 'b' instead of 'a' after reassigning.
// Closures always make sure that a function never loses the connection to the variables present at its birthplace; it'll always remember them.
console.dir(f);

// Example 2
// Closures include all defined variables and the parameters from its parent function.
const boardPassengers = function (n, wait) {
  // This variable is set before setTimeout
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  // This runs before setTimeout
  console.log(`Will start boarding in ${wait} seconds.`);
};

// Closures have priority over the scope chain. If the below line was enabled and the one above disabled, the below line will run instead.
// const perGroup = 1000;
boardPassengers(180, 3);

/*-----------------------------------------------------------------------------------------*/
