"use strict";

/*

Behind the Scenes

JavaScript is a high-level, prototype-based, OO, multi-paradigm, interpreted or just-in-time complied, dynamic, single-threaded garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

High-level: everything happens automatically and developer doesn't have to worry about managing resources.

Garbage-collected: memory is automatically cleaned up so we don't have to.

Interpreted/just-in-time complied: our program is written in machine code, or in binary. We're basically compiling our code.

Multi-paradigm: a paradigm is an approach/mindset of structuring our code, which will dictate your coding style and technique. There is procedural, object-oriented and functional programming. There's also imperative versus declarative programming. So far we've only been using procedural programming.

Prototype-based object-oriented: Array is an example of a prototype which inherits many other methods.

First-class functions: functions are treated as variables. You can even return functions!

Dynamic: dynamically typed. The type of a variable can be set at runtime, and can also be changed as it is reassigned. There's some controversy over this, and many other programming languages don't have this, hence JavaScript can cause a lot of bugs in this regard.

Single-threaded: concurrency models are ones that can handle multiple tasks at the same time. JavaScript runs in one single thread, so it can only run one thing at a time. But if there's a long-running tasks, it would block the single thread. Hence, the non-blocking event loop.

Non-blocking event loop: these take long-running tasks, executes them in the "background," and puts them back in the main thread once they're finished. 

*/

/*-----------------------------------------------------------------------------------------*/

/*

The JavaScript Engine and Runtime

The JS engine is a program that executes JavaScript code. The V8 engine is the most popular for JS. This is for Chrome in particular. Other Internet browsers have their own separate JS engine.

All JS engines have a call stack and a heap. A call stack is where our code gets executed using execution contexts. The heap is an unstructured memory pool that stores all objects that our application needs.

Compilation vs interpretation: our computer only understands 0s and 1s (aka binary). In compilation, the entire source code is converted into machine code at once, then written into a portable file that can be executed by a computer. Execution can run way after compilation. An interpretation, however, is running through the source code and executing it line by line. Modern JavaScript used to be purely interpretative, but it was too slow, so now it's become ca compilation language. Actually, JS has just-in-time (JIT) compilation, where the entire code is converted into machine code, then executed immediately. There is no portable file compared to compilation.

For JS in JIT, the code is first parsed (read) into an abstract syntax tree (AST) which is a structured way to view code. The code is also linted for errors. For a simple 'const x = 23', a long piece of code (the AST) pops up. The AST has nothing to do with the DOM in any way. Then the code gets compiled into machine code which gets executed right away. During this setup, the code may also be optimized, then re-compiled and re-executed. Optimization occurs during executions; and parsing, compilation and optimization happens in special threads that we can't access from code!

JavaScript runtime: runtime in the browser is common. It includes the JS engine, web APIs (DOM, timers, fetch API, console.log, etc.) and a callback queue (a data structure that has all callback functions that are ready to be executed like onClick, timer, etc.). Using the event loop, if no more tasks are running in the call stack, a callback function from the callback queue gets thrown into the call stack to be executed.

JavaScript may exist outside of browsers. One example is Node.js.

*/

/*-----------------------------------------------------------------------------------------*/

/*

Execution Contexts and the Call Stack

When code gets compiled, a global execution context gets created. This is for top-level code which isn't inside a function. So only top-level code gets executed. This includes function declarations. The execution context is basically the environment in which a piece of JS is executed, and stores all necessary info for some code to be executed. There can only be one global execution context per project. Functions then get executed and the code also waits for callbacks. Only one execution context per function is allowed, and all these make up the call stack.

An execution context consists of a variable environment, (let/const/var declarations, functions, arguments object), the scope chain and the 'this' keyword. This gets created during the 'creation phase,' which is before execution. Arrow functions do not get an 'arguments' object or the 'this' keyword. Values are onl;y known during execution, though.

The call stack, along with the memory heap, make up the JS engine. The call stack is simply where execution contexts get stacked on top of each other top keep track of where we are in the code's execution. The one on top is the one to run, and will be popped from the stack if an execution context is finished running (like when a function returns a value and ends). Because JS is single-threaded, the call stack is important. Only when the program closes will everything in the call stack wipe out.

*/

/*-----------------------------------------------------------------------------------------*/

/*

Scope and the Scope Chain

An execution context has a scope chain.

Scoping controls how our program's variables and organized and accessed. We ask where do variables live, and where we can access certain variables and where not.

Lexical scoping is scoping that's controlled by placement of functions and blocks in the code.

Scope is the space/environment in which a certain variable is declared. There is: 
global scope (accessible everywhere in the code and declared outside of any function/block)
function scope (accessible only inside a function, aka a local scope) 
block scope (accessible only in between curly braces aka blocks for let/const variables and functions)

So let/const variables are both block scoped. And var is always function scoped.

The scope fo a variable is the entire region of a variable in which a certain variable can be accessed.

The scope chain will consist of all the scopes inside your code. All scopes will have access to variables to any and all variables in their parent scopes. The child scopes will perform variable lookups on their parent scopes to find the variables they need. Parent scopes will never look down to their child scopes to access variables. 

let/const functions are block scoped. var is always function scoped.

Between the scope chain and the call stack:
The scope chain has nothing to do with the order in which the functions are called!

*/

/*-----------------------------------------------------------------------------------------*/

/*

Scoping in Practice

Remember that const and let variables are always block scoped.

*/

// function calcAge(birthYear) {
//   console.log(firstName);
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       const firstName = "Steven";
//       const str = `0h, and you're a millennial, ${firstName}!`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = "New output!";
//     }
//     console.log(millennial);
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = "Kevin";
// calcAge(1991);

/*-----------------------------------------------------------------------------------------*/

/*

Variable Environment: Hoisting and the TDZ

Hoisting makes some types of variables accessible/usable before they're actually declared. They're like variables lifted to the top of their scope. Before execution, code is scanned for variable declarations and for each new variable, a new property is created in the variable environment object.

The TDZ is the 'temporary dead zone'.

In terms of hoisting:
- Function declarations are hoisted, the actual function is the initial value and it has block scope.
- var variables are hoisted, the initial value is undefined, and it has function scope.
- let and const variables are NOT hoisted, their initial value are uninitialized (TDZ), and it has block scope.
- Function expressions and arrow functions depend if they were initialized using var, let or const.

Temporal dead zones can be above a variable before it's even declared. But why do we need them???
We can use TDZs to avoid and catch errors, since it's bad practice to access variables before declaration.
Also, it makes const variables actually work.

Why hoisting? So we can use functions before actual declaration. Also, it could host var variables since it was just a byproduct.

*/

// function addDecl(a, b) {
//   return a + b;
// }

// // var me = "Jonas";
// // let job = "teacher";
// // const year = 1991;

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted.");
// }

// // let and const will never be declared in the window Object.
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

/*-----------------------------------------------------------------------------------------*/

/*

The 'this' Keyword

It's a special variable created for every context and every function, and one of the three parts of the execution context. It takes the value of the owner of the function, or points to the owner of the function.

The 'this' keyword is NOT static, it depends on how the functions is called, and its value is only assigned with the function is actually called.

You can call methods in 4 ways:
- Method: this = <Object that's calling the method>
- Single function call: this = undefined (using strict mode)
- Arrow functions: this = <this of surrounding function (lexical this)> - so arrow functions don't get their own 'this' keyword
- Event listener: this = <DOM element that the handler is attached to>
- new, call, apply, bind

This 'this' keyword is NOT:
- something that points to itself
- its variable environment

*/

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // Points to undefined since it has no owner
//   console.log(this);
// };

// calcAge(1991);

// console.log(this);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   // Points to the window (this keyword in the global scope)
//   console.log(this);
// };

// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     // Points to the 'jonas' Object
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// // 'jonas' is the owner of this method!
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// // Method borrowing, jonas's calcAge method now is also matilda's
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// // Produces an error since 'year' is no longer defined
// const func = jonas.calcAge;
// func();

/*-----------------------------------------------------------------------------------------*/

/*

Regular Functions vs Arrow Functions

Never use arrow functions as a method. The 'this' keyword won't apply and any variables coming out of it will be undefined.

Define 'this' into a const variable to keep the scope as you want it. For example, const self = this

We can use this to our advantage. In the example below, we use an arrow function to brute-force the method to use defined variables from its parent scope instead of putting out an undefined variable.

*/

// // var firstName = "Matilda";

// // All these variables are inside the global scope!!!
// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     // Points to the 'jonas' Object
//     console.log(this);
//     console.log(2037 - this.year);

//     // // Soltion #1
//     // const self = this;
//     // const isMillenial = function () {
//     //   // This will be undefined. Regular functions have their 'this' keyword set to undefined.
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       // This will be undefined. Regular functions have their 'this' keyword set to undefined.
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// // Arrow functions do not get their own 'this' keywords and instead use the 'this' keyword from its surroundings, aka its parents. In this case, it's the global scope.
// jonas.greet();
// jonas.calcAge();

// // Remember 'arguemnts' puts all parameters into an array. It is legal to add more arguments.
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);

// // Loop over the array if needed to add all these numbers!
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// // Error
// addArrow(2, 5, 8);

/*-----------------------------------------------------------------------------------------*/

/*

Primitive VS Objects (Primitive VS Reference Types)

Primitives are: Number, String, Boolean, undefined, null, symbol and Bigint. These are primitive types.
Everything else is all Objects (Object literals, arrays, functions, etc.). They're called reference types.

Remember the JS engine has a call stack and a heap. Reference types will be stored in the memory heap. Primitive types are stored in the call stack. They are stored in the execution contexts in which they are declared.

But in the call stack, identifiers point to the address that holds the value; it doesn't point directly to the value.

Identifiers are all in the call stack, so if it points to an Object, it points to an address, where the value points to an address inside the heap, which points to the value. Objects may be too large to be stored in the call stack, so it gets stored in te heap, since it has unlimited data.

But with "Friend", we break some rules pertaining to const!

*/

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30

// const me = {
//   name: "Jonas",
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// // The age will BOTH be 27!!! What???
// console.log("Friend: ", friend);
// console.log("Me: ", me);

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

// Will not change the last name of the marriedJessica Object :()
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

// When we attempted to create a new jessica object, a new Object wasn't created in the heap, it's just another variable in the stack holding a reference to the original Object. Both variables point to the same address in the heap.

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

// Merges two objects
// Object.assign() only makes a shallow copy, not a deep clone...
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);

// Add more family members... BUT both Objects got changed, not just one!!!
// Object.assign() did not copy the arrays properly. They point ot the same Object in the memory heap!
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);

// A deep clone is possible. We can use lodash.
