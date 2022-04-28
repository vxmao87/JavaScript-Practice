// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*

Prettier and VS Code

Prettier will give us an opinionated format of how our code should look. It is an
opinionated code formatter, and it may not be for everyone. To enable or disable,
go to Preferences => Settings, then search for "Default Formatter" and make
"Prettier" your default. Set it to "None" to disable it.

You might not like some features, so you can change that! Look at the Prettier docs
and then create a .prettierrc file in your project. Then set the values you want 
based on your preferences, like "singleQuote": true.

You may also create code snippets for yourself, by going to Code => Preferences
=> User Snippets, and clicking on New Global Snippets file. Then create it as
desired. Just type the prefix you have in the file and it'll work!

Some extensions to consider:

ESLint
Auto Close Tag
Auto Rename Tag
image preview by Kiss Tamas
Monokai Pro
Prettier
Settings Sync
TODO Highlight

*/

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

/*-----------------------------------------------------------------------------------------*/

/*

Thinking Like a Developer

4 Steps to Solving Any Problem:

1. Make sure you 100% know what's expected of the problem. Ask the right questions to get an 
   idea of the task at hand.
2. Break up the problem into smaller, manageable chunks.
3. Don't be afraid to do as much research as you need to.
4. Write pseudo-code before the actual code for larger probles.

*/

/*-----------------------------------------------------------------------------------------*/

/*

Using Google, Stack Overflow & MDN

For the problem below we want to calculate the amplitude of the temperatures below.
Using the 4-step approach above, it's best to write a function to capture the
process in general.

*/

function getAmplitude(tempList) {
  let highest = temperatures[0];
  let lowest = temperatures[0];
  for (const temp of tempList) {
    if (temp !== 'error') {
      if (temp > highest) highest = temp;
      if (temp < lowest) lowest = temp;
    }
  }
  return highest - lowest;
}

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
console.log(getAmplitude(temperatures));

/*-----------------------------------------------------------------------------------------*/

/*

Debugging

Identify, find, fix and prevent

*/
