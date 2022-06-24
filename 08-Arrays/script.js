"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*-----------------------------------------------------------------------------------------*/

/*

Simple Array Methods

These are functions attached to every array that is initialized. Arrays are objects that get special access to methods specifically for them.

*/

let arr = ["a", "b", "c", "d", "e"];

// slice
// Similar to method for strings
console.log(arr.slice(2)); // slice from index 2 to the end
console.log(arr.slice(1, 4)); // slice from index 1 inclusive to 4 exclusive
console.log(arr.slice(-2)); // slice from index -2 (the last 2 elements)
console.log(arr.slice(-1)); // slice from index -1 (the last element)
console.log(arr.slice(1, -2)); // slice from index 1 inclusive to -1 exclusive

// Creating a shallow copy of an array
console.log(arr.slice());
console.log([...arr]);

// splice
// Almost works like 'slice' in strings, but actually changes the array.
// More commonly used to remove the last element in an array.
// Mutates the original array.
console.log(arr.splice(2)); // deletes elements from index 2 till the end and the spliced part is returned
arr.splice(-1);
console.log(arr); // original array changed
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // start from index 1, remove 2 elements
console.log(arr);

arr = ["a", "b", "c", "d", "e"];

// reverse
// Mutates the original array
let arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// concat
// Connects 2 arrays together.
// Doesn't mutate original arrays.
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join
// Does not mutate the original array.
console.log(letters.join(" - "));

/*-----------------------------------------------------------------------------------------*/

/*

The New "at" Method (new from ES2022)

This is similar to accessing an element inside an array using something like arr[0].

But the "at" method accesses the value without having to return an array and accessing the element from there.

This is useful for method chaining, or chaining many methods in one line at the same time.

The "at" method will also work on strings.

*/

const arr3 = [23, 11, 64];

// Both produce the same result.
console.log(arr[0]);
console.log(arr.at(0));

// Getting the last element of an array in 3 different ways.
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// Using the "at" method on strings.
console.log("Vincent".at(0));
console.log("Vincent".at(-1));

/*-----------------------------------------------------------------------------------------*/

/*

The forEach Method

You CANNOT break out of a forEach loop compared to a forOf loop, so 'break' and 'continue' will not work. Otherwise, using either forOf or forEach is up to personal preference.

*/

// Using the forOf loop.
console.log(`---- FOROF ----`);
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// Using forEach, which requires a callback function which applies to everything inside the array.
// Higher-order function!!!
console.log(`---- FOREACH ----`);
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function(200);
// 1: function(450);
// 2: function(400);
// .
// .
// Until it reaches the end

// Bonus: using destructuring
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// Same thing only with forEach
// The order of the parameters matters!
console.log(`---- FOREACH ----`);
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
