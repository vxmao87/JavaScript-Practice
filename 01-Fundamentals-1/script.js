/*----------------------------------------------------------------------------------*/

// let js = 'amazing';
// if (js === 'amazing') alert("JavaScript is fun!");

// // This will NOT show up anywhere because nothing is being outputted to the console
// // 40 + 8 + 23 - 10;

// // But THIS WILL show up on the console!
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(23)

// // Declaring variables and using them
// let firstName = "Jonas";
// console.log(firstName + " Bob")

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
// // Variable names must also be descriptive too. You should know what a variable is
// // just by looking at its name.
// let myFirstJob = "Tutor";
// let myCurrentJob = "Engineer";

// // This is bad convention:
// let job1 = "Tutor";
// let job2 = "Engineer";

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

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// // We may also change the type of a variable too!
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// javascriptIsFun = "YES!"
// console.log(javascriptIsFun);

// // Undefined is an empty value, or a variable that's not assigned a value.
// let year;
// console.log(year);
// console.log(typeof year);

// // Null just means both the value and the variable are undefined.
// console.log(typeof null);
// // Surprisingly, it returns 'object' in the console, which is 
// // not right.

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

/*----------------------------------------------------------------------------------*/

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas * 2, ageSarah / 2, 2 ** 3); // 2 ** 3 = 2^3 = 2 * 2 * 2

/*----------------------------------------------------------------------------------*/

/*

Order Precedence

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Most cases need parenthesis to force something to happen.

*/

/*----------------------------------------------------------------------------------*/

/*

Strings and Template Literals

You can use template literals to save yourself the trouble of using spaces and + signs too much.
Both jonas and jonasNew produce the same result.

You can also use template literals to create multiple lines without having to type \n\ all the time.

*/

// const jonasJob = "engineer"
// const jonas = "I'm " + firstName + ", a " + ageJonas + " year old " + jonasJob + "!";
// const jonasNew = `I'm ${firstName}, a ${ageJonas} year old ${jonasJob}!`;
// console.log(jonas);
// console.log(jonasNew);

// console.log('String with \n\ multiple \n\ lines.');
// console.log(`String with
// multiple
// lines`);

/*----------------------------------------------------------------------------------*/

/*

Type Conversion and Coercion

Type coercion is the act of converting a value from one type to another.

*/

// console.log('I am ' + 23 + ' years old.');

// // Strings converted to Numbers!!!
// console.log('23' - '10' - 3);

// // The Strings get concatenated!
// console.log('23' + '10' + 3);

// // Converted to Number
// console.log('23' * '2');

// // Converted to Number as well!
// console.log('23' / '2');

// // Actually equals 10 (Number)
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

/*----------------------------------------------------------------------------------*/

/* 

Truthy and Falsy Values

There are 5 kinds of falsy values: 0, '', undefined, null, NaN.
Any non-zero Number and any valid String are truthy values.

*/

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 100;
// if (money) {
//   console.log("Don'y spend it all!");
// } else {
//   console.log("Get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("height is defined!");
// } else {
//   console.log("height is UNDEFINED!");
// }

/*----------------------------------------------------------------------------------*/

/*

Equality Operators: == and ===

=== is a comparison operator. = is an assignment operator.
The === is a STRICT equal operator, so it doesn't perform type coercion.
The == is a LOOSE equal operator which does perform type coercion.
So values like 18 == '18' will be 'true'.
The value 18 === '18' will be 'false' because type coercion is not applied.

Try to avoid == and opt for === as much as you can! You can just manually
convert your values later.

Following the same logic, use !== over != to strictly apply the operator.

*/

// const age = 18;
// if (age === 18) console.log("You just became an adult! (strict)");
// if (age == 18) console.log("You just became an adult! (loose)");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// }

/*----------------------------------------------------------------------------------*/

/*

Logical Operators

and: &&
or: ||
not: ! (This has to be right before the condition you are testing!)

All statements inside a statement connected by && must be true for the whole
statement ot be true! But only one of those statements connected by || needs to be
true for the whole statement to be true.

The ! operator will hold a higher precedence over && and ||.

*/

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Kevin is able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = true;

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Kevin should DEFINITELY drive!!!");
// } else {
//   console.log("Someone else PLEASE drive!");
// }

/*----------------------------------------------------------------------------------*/

/*

The 'switch' Statement

Using 'switch' automatically uses the strict logical operators. You can stack multiple cases
on top of each other if they will urn the same code as shown below.

The 'default' case is like the 'else' statement in an if-else statement.

This statement is being used less often, however.

*/

// const day = 'monday';

// switch(day) {
//   case 'monday':
//   case 'friday':
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case 'tuesday':
//   case 'thursday':
//     console.log("Prepare videos")
//     break;
//   case 'wednesday':
//     console.log("Do exercise");
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log("DEnjoy the weekend!");
//     break;
//   default:
//     console.log("Not a valid day");
//     break;
// }

/*----------------------------------------------------------------------------------*/

/*

Statements and Expressions

Expressions include '3 + 4', 1911, true && false && !false, and others.
  Expressions produce values, but statements do not.
Statements are larger pieces of code and doesn't produce values themselves.
  They can include if-else statements and also while loops. They're like sentences.

Template literals can only take expressions, NOT statements.

*/

/*----------------------------------------------------------------------------------*/

/*

The Conditional (Ternary) Operator

The format is:
<if statement> ? <executed if commands> : <executed else commands>

Given this format, the ternary operator is an expression! You can throw statements like these
into a template literal as well!

These are NOT replacements to if-else statements because if-else statements have more
complex uses than ternary operators can handle.

*/

// const age = 23;
// age >= 18 ? console.log("I like to drink wine :P") : console.log("I like to drink water");

// console.log(`I like to drink ${age >= 18 ? "wine :P" : "water >_<"}`);

/*----------------------------------------------------------------------------------*/

/*

JavaSCript Releases: ES5, ES6+ ESNext

In 1995, Brendan Eich created Mocha, the first version of JavaScript in just 10 days!

In 1996, the code was renamed to JavaScript. But it has nothing to do with Java...
this same year, Microsoft launches IE, copying JavaScript from Netscape and calling
it JScript.

In 1997, ECMA released ECMASCript1 (ES1), the first official standard standard for
JavaScript.

In 2009, ES5 was released with many new features.

In 2015, ES6 was launched in June. It has the hugest number of updates ever to the language. ECMAScript changed to an annual release cycle starting from 2015 to ship
less features per update.

These updates will release until the end of time, of course.

All of these versions are backwards compatible!!! There are only things added,
never things deleted.

However, there is NO forward compatibility because current browsers wouldn't
understand code from the future. Hence, we need to differentiate between the
development and production phases.

In development, you ask the users to use the latest version available. In
production, we make new products and push the changes; more specifically, we
will use Babel to transpile and polyfilling our code.

Nowadays, ES5 is safe to use down to 2011. And ES2015 to ES2020 are well-supported
in all modern browsers but NOT older ones, and you can use most features in
production with transpiling and polyfilling.

*/