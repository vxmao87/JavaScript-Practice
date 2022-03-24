let js = 'amazing';
if (js === 'amazing') alert("JavaScript is fun!");

// This will NOT show up anywhere because nothing is being outputted to the console
// 40 + 8 + 23 - 10;

// But THIS WILL show up on the console!
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23)

// Declaring variables and using them
let firstName = "Jonas";
console.log(firstName + " Bob")

// Variable naming conventions:
// Camel-cased always for JavaScript! The first letter of a word is lower-cased and every 
// other letter of separate words gets upper-cased instead.
// Underscored is standard in other programming languages.
// Don't start variable names with an upper-case letter, unless all letters in the
// variable name are capitalized.
//
// But as usual you cannot start variable names with numbers 
// or symbols, or you get a SyntaxError. Only letters, underscores and
// $ are allowed. Reserved keywords cannot be variable names either.
//
// Variable names must also be descriptive too. You should know what a variable is
// just by looking at its name.
let myFirstJob = "Tutor";
let myCurrentJob = "Engineer";

// This is bad convention:
let job1 = "Tutor";
let job2 = "Engineer";

// Data Types
// Number: decimals/integers
// String: sequence of characters
// Boolean: true/false
// Undefined: value taken by a variable that is not yet defined
// Null: 'empty value'
// Symbol: Value that is unique and can't be changed
// Bigint: Larger integers than the Number type can hold
//
// Dynamic typing: data types are determined automatically. You
// dob't have to define them immediately.