// Activates Strict Mode in the entire script; must be the first line in file!
// We can avoid accidental errors and bugs using this line of code below.
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!!!");

// // With Strict Mode on, words like 'if', 'interface' and 'private' will
// // not be allowed since they may be future words to be implemented in 
// // future JavaScript updates.
// const interface = 'Audio';
// const private = 534;