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

const weekdaysList = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

// // Enhanced object literal for opening hours
// const openingHours = {
//   [weekdaysList[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdaysList[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdaysList[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    [weekdaysList[3]]: {
      open: 12,
      close: 22,
    },
    [weekdaysList[4]]: {
      open: 11,
      close: 23,
    },
    [weekdaysList[5]]: {
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

/*-----------------------------------------------------------------------------------------*/

/*

The For-of Loop for Looping through Arrays

This method was introduced in ES6. This is useful if you need to loop through the whole array and need to keep track of some sort of a counter along the way.

*/

for (const item of finalMenu) console.log("This is " + item);
for (const [i, element] of finalMenu.entries())
  console.log(`${i + 1}: ${element}`);
console.log([...finalMenu.entries()]);

/*-----------------------------------------------------------------------------------------*/

/*

Enhanced Object Literals

The 'restaurant' object is an object literal. An enhanced object literal would be taking an object and using that exact name in another larger object instead of typing the same name out for both sides as introduced in ES6. Here we've made 'openingHours' a separate object to be implemented with just its name inside the 'restaurants' object instead of saying 'openingHours: openingHours'.

You can even remove the word 'function' from a method that's placed inside an object for ease of reading!

You can even compute property names instead of having to write them out fully and literally. For example, you can destructure an array that has a variable name you want and use that instead!!!

*/

/*-----------------------------------------------------------------------------------------*/

/*

Optional Chaining

The property before the ? will run and if the values before them are undefined, the whole value is undefined. Otherwise, the whole code runs through.

This also works on methods, to check wether they exist before calling them.

*/

// Values
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const openHour = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${openHour}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist!");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist!");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
console.log(users[0]?.name ?? "User array is empty");
console.log(users[5]?.name ?? "User array is empty");

/*-----------------------------------------------------------------------------------------*/

/*

Looping through Other Things

There are many other things you can loop over even though they don't look like they can be looped over.

*/

// Results in an array - Keys values
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days.`;

for (const day of Object.keys(openingHours)) {
  console.log(day);
  openStr += `${day}, `;
}

console.log(openStr);

// Property values
// Shows the values inside the object.
const values = Object.values(openingHours);
console.log(values);

// Entries objects
// Shows the type and values of the object.
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*-----------------------------------------------------------------------------------------*/

/* 

Sets

In ES6, we have sets and maps. A set is a collection of unique values. It can never have any duplicates, so they are removed once initialized.

Sets have no indexes, so there's no way for getting data out of a set. All elements are unique and the order of elements does not matter, so there really is no point. All we need to know is to find out if an element exists. If you wanted to get a value out of an object, use an array.

Sets are iterables so we can loop over them.

Sets are used to remove duplicates for arrays.

*/

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);

// Breaks up the letters.
console.log(new Set("Jonas"));

// Produces an empty set.
console.log(new Set());

// Get the size of a set.
console.log(orderSet.size);

// Check if an element is in a set.
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

// Add new elements to a set. Duplicate elements will not appear even if added.
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log(orderSet);

// Deletes elements from a set.
orderSet.delete("Risotto");
console.log(orderSet);

// // clears all elements of a set.
// orderSet.clear();

// Loop over the set.
for (const order of orderSet) console.log(order);

// EXAMPLE - grab the unique positions in an array of staff members.
const staff = ["Waiter", "Chef", "Waiter", "Waiter", "Chef", "Manager"];

// Use the spread operator to take the elements out of the iterable and comma-separate them.
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Grab the size of the unique array.
console.log(new Set(staff).size);

// Grabs the size of a String (it's separated by characters, so it'll count the number of unique characters!!!).
console.log(new Set("qwertyuioppoiuhj").size);

/*-----------------------------------------------------------------------------------------*/

/*

Maps

A map is a data structure we can use to map values to keys. But the keys can have any type unlike Objects. We could have Objects or other maps as the keys!!!

You can iterate through maps too since they're also iterables.

*/

// Initializes the map and sets some values.
const rest = new Map();
rest.set("name", "First Dumpling");
rest.set(1, "Hong Kong");
rest.set(2, "Shenzhen");

// This will print the map AND add the given element inside the map.
console.log(rest.set(3, "Shanghai"));

// Chaining many 'set' methods together :D
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed :(");

// Obtains the values of a key
console.log(rest.get("name"));
console.log(rest.get(true));

// Returns undefined because it doesn't exist
console.log(rest.get("true"));

// Using Booleans to get useful information, but very unreadable
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));

// Deletes an element from the map
rest.delete(2);
console.log(rest);
console.log(rest.size);

// // Removes all elements in the map
// rest.clear();

// // Using an array as a key!
// rest.set([1, 2], "test");
// console.log(rest);

// // Returns undefined because they're not the same objects in the heap.
// console.log(rest.get([1, 2]));

// Instead, do this:
const arrEx = [1, 2];
rest.set(arrEx, "test");
console.log(rest);
console.log(rest.size);
console.log(rest.get(arrEx));

// Grab the heading of the page!!!
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

// Making a new Map from scratch!
const questionMap = new Map([
  ["question", "What's the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "You won!"],
  [false, "You lost :("],
]);

console.log(questionMap);

// This returns an Object of the exact format as the 'questionMap' element above!!!
// So you can convert an Object to a map using this method!
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Print the question
console.log(questionMap.get("question"));

// Iterate through a map!
// Object.entries is an iterable, but the Object itself isn't.
for (const [key, value] of questionMap) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// Check if the answer is correct and print the correct message
// const answer = Number(prompt("Your answer: "));
const answer = 3;
console.log(answer);
console.log(questionMap.get(answer === questionMap.get("correct")));

// Convert a map back into an array by unpacking the elements
console.log([...questionMap]);
console.log(questionMap.entries());
console.log([...questionMap.keys()]);
console.log([...questionMap.values()]);

/*-----------------------------------------------------------------------------------------*/

/*

Which Data Structure Should You Use?

Three sources of data:
1. Written by the program itself, written directly in source code
2. From the UI, data input from user or data in DOM (tasks in todo app)
3. From external sources like web API (weather, currency rates, etc.)

We store collections of data into data structures, but there's so many of them!
Use arrays/sets for simple lists, and Objects/maps for key/value pairs.

Keys allow us to describe values.

Data from web APIs come in the form of JSON, which can easily be converted into JavaScript objects. They can consist of objects and arrays within each other, and have a lot of key/value pairs.

Creating an array of Objects is very common in JavaScript.

We have WeakMaps and WeakSets as other built-in data structures.

Stacks, queues, linked lists, trees and hash tables are data structures that are NOT built into JavaScript and must therefore have its functionality coded separately.

Among arrays, sets, objects and maps:

Use arrays if you need to store values in order or need to manipulate data.
Use sets if you need to work with unique values, remove duplicates from arrays, or as a high-performance data structure (like finding an element).

Objects are the more "traditional" key/value store, and you can easily access values in them using . or []. So use them when you need to include functions (methods) or if you're working with JSON as you'll be able to convert them to maps.
Maps have better performance, its keys can have ANY data type, and they are easy to iterate over and compute the size of. So use them when you need to map keys to values or when you need keys that are NOT only Strings.

*/
