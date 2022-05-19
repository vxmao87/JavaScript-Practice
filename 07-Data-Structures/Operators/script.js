"use strict";

/*-----------------------------------------------------------------------------------------*/

/*

Destructuring Arrays and Objects

We will be breaking down arrays into smaller structures. By doing this, we're not changing the original array.

We can return an array of values iin methods too! Just declare each variable inside the array that's passed in.

We can even set default values within the destructuring!!!

To destructure Objects, use {}. You can even set the variables new names and give them default values!

We can also mutate variables while destructuring objects.


*/

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring the array - this const is NOT an array itself
// const [x, y, z] = arr;
// console.log(x, y, z);

// // Destructuring for nested arrays
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Set default values (r is undefined without default values)
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

/*-----------------------------------------------------------------------------------------*/

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

// Prints pepperoni along with all other ingredients in an array
restaurant.orderPizza("pepperoni", "Italian sausage", "olives", "ham");

// Prints the mushrooms along with an empty, unnecessary array
restaurant.orderPizza("mushrooms");

// Take the first and second value of the categories array
const [first, second] = restaurant.categories;
console.log(first, second);

// Take the first and third value of the categories array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switch positions of main and secondary variables
const temp = main;
main = secondary;
secondary = temp;

// Switch positions (another way)
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const { name, openingHours, categories } = restaurant;

// To destructure Objects, use curly braces
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Destructuring and adding new variable names at the same time
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutations
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

/*-----------------------------------------------------------------------------------------*/

/*

The Spread Operator

You basically write three dots before the name of the array you want to use.

But the spread operator takes all elements of the array and doesn't create new variables, so we can only use it in places where we would otherwise write values separated by commas.

You can create shallow copies of arrays or merge them together using the spread operator.

You can use the spread operator on all iterables, which are arrays, Strings, maps and sets but NOT objects.

But it sometimes work on objects...

*/

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];

// Prints the actual array
console.log(newArr);

// Prints the individual elements of the array (1 2 7 8 9)
console.log(...newArr);

// Making a completely new array
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Shallow-copy an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 or more arrays together
const finalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(finalMenu);

// Spread operator on a String
const str1 = "Jonas";
const letters1 = [...str1, "", "S."];
console.log(letters1);
console.log(...str1);

// Below code does not work for template literals because this does not expect a value that is separated by commas. They're only expected when creating a new array or passing arguments into a function.
// // console.log(`${...str} Schmedtmann`);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt("Ingredient 2? "),
//   prompt("Ingredient 3? "),
// ];
// console.log(ingredients);
//
// restaurant.orderPasta(...ingredients);

// Spread operator on objects
const newRestaurant = { ...restaurant, founder: "Giuseppe", foundedIn: 1998 };

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*-----------------------------------------------------------------------------------------*/

/*

Rest Pattern and Rest Parameters

This is the opposite of the spread operator.

The spread operator is used on the left-hand side of the = sign. On the other hand, the rest pattern is used on the right-hand side of the = sign.

They work in opposite ways depending on where they would used.

The spread operator is used where we'd otherwise write values separated by commas, and the rest pattern is used where we'd otherwise write variable names separated by commas (NOT values).

*/

const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Collect pizza and risotto and collects all elements that aren't skipped. The rest element must NOT be the last element. So there can only be one rest pattern for every destructuring assignment.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Object destructuring and rest patterns
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions - rest parameters/arguments - unpacked
const add = function (...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 1);
add(8, 2, 5, 3, 2, 1, 4);

// This can be done because the values can be comma-separated.
const x = [23, 5, 7];
// Packed into an array
add(...x);

/*-----------------------------------------------------------------------------------------*/

/*

Short Circuiting (&& and ||)

We can use more with these two Boolean values.

They can use any data type, return any data type, or do short-circuiting.

For ||, short-circuiting means returning the first 'truthy' value and disregarding all the other values once it finds this first truthy value. It may return the very last value as a result.

For &&, short-circuiting works opposite short-circuiting for ||. It will return the first 'falsy' value instead!!! Once it finds the first falsy value, it short-circuits the rest of the conditional, or disregards the rest of the values. It can also return the last value if all values are truthy.

*/

console.log(`---- OR ----`);
// Result is 3???
console.log(3 || "jonas");

// Result is "jonas"
console.log("" || "jonas");

// Result is true
console.log(true || 0);

// Result is null
console.log(undefined || null);

// Result is "hello" since it's the first truthy value in this chain of values.
console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 0;
// // If the above number is 0, the number will be 10 since 0 is falsy.
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`---- AND ----`);

// Returns the first falsy value
console.log(0 && "Jonas");

// Returns the first falsy value
console.log(7 && "Jonas");

// Returns null????
console.log("Hello" && 23 && null && "Jonas");

// Way #1
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

// Way #2 (produces the same result as Way #1)
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

/*-----------------------------------------------------------------------------------------*/

/*

The Nullish Coalescence Operator (??)

This operator uses knowledge values instead of falsy values. So it filters null and undefined, it's as if they were 'truthy' values instead.

*/

const guests3 = restaurant.numGuests || 10;
console.log(guests3);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/*-----------------------------------------------------------------------------------------*/

/*

Logical Assignment Operators

||= is one of these operators. This is the OR assignment operator. It falls for the same mistake as treating 0 as 'falsy' when it might not always be.

??= will solve this problem as the NULLISH assignment operator!

&&= is of course the AND assignment operator and works similarly! It assigns the variable only if the value is truthy,

*/

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "Le Pizza",
  owner: "Kevin Nguyen",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1);
// console.log(rest2);

// // OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

// NULLISH assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// // AND assignment operator
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
