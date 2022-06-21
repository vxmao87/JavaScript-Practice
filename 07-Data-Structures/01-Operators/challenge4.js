"use strict";

/*

Test data:
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
perilOus_PERIL
   extended_warrANTY
 UNDERSTAND_mE
Continue_Elements
omnipotent_opponents

*/

// Creates two extra HTML elements in the DOM, one of a text box and another a button.
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// The following events get triggered when the button is clicked.
document.querySelector("button").addEventListener("click", function () {
  // Obtains the text box data, and then splits them by indents.
  const text = document.querySelector("textarea").value;
  const names = text.split("\n");

  // The list of correctly formatted names.
  const correctNames = [];

  // The longest length of a name for formatting purposes later in the code.
  let longestNameLength = 0;

  // For each name, trim the white spaces and lowercase the whole string. Then split it by the "_" string, and combine the first name along with the last name with the first letter capitalized in only the last name. This correctly formatted name is then added into the 'correctNames' array, and the length of the longest name is saved for later use.
  for (const name of names) {
    const nameTrimmed = name.trim().toLowerCase();
    const [firstName, lastName] = nameTrimmed.split("_");
    const finalName =
      firstName + lastName.replace(lastName[0], lastName[0].toUpperCase());
    correctNames.push(finalName);
    if (finalName.length > longestNameLength) {
      longestNameLength = finalName.length;
    }
  }

  // Prints the correctly formatted name, along with spaces and a number of check marks depending on how many values have been passed into the text box.
  let numValues = 0;
  for (const correctName of correctNames) {
    numValues++;
    const str = correctName.padEnd(longestNameLength + 5, " ");
    console.log(`${str}${"✅".repeat(numValues)}`);
  }
});
