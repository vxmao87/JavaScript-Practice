/*----------------------------------------------------------------------------------*/

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

/*----------------------------------------------------------------------------------*/

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

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");

// We may also change the type of a variable too!
let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "YES!"
console.log(javascriptIsFun);

// Undefined is an empty value, or a variable that's not assigned a value.
let year;
console.log(year);
console.log(typeof year);

// Null just means both the value and the variable are undefined.
console.log(typeof null);
// Surprisingly, it returns 'object' in the console, which is 
// not right.

/*----------------------------------------------------------------------------------*/

/* The 'let' keyword is for variables that can change types or values later.
You can 'mutate' variables using the 'let' keyword. If the variable may change at
some point, then you can use 'let'.

The 'const' keyword is for variables that WON'T ever reassign in the future in 
any way. In other words, it creates an immutable object. So we can't even declare
it as an empty variable either. Use it by default.

The 'var' keyword allows for both mutable and changeable variables. It's common but should
actually be avoided at all costs.
*/