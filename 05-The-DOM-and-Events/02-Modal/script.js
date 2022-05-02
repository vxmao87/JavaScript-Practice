"use strict";

/*

Notes

To kill a command through the Terminal, type Ctrl + C on the Mac.

document.querySelector selects only the first instance fo the element. So use 
querySelectorAll instead. The elements are all stored in a list to loop over.

We will use the remove() method to remove classes from an HTML tag.
You could also do modal.style.displayed = "block"; as an alternative.

But in general, we use modal.classList.add().

We also have keyboard events! We use addEventListener, but instead of "click",
we use . And these are also global events occurring anywhere in the document.

There are the keydown, keypress and keyup events for keys. You'll just need to pass in
an 'event' parameter inside your event handler function.

*/

// Selects the elements needed by class.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// Opens the modal by removing the "hidden" tags from the elements.
const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Closes the modal by adding back the "hidden" tags from the elements.
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Adds an event listener to every button on the screen.
for (const element of btnsShowModal) {
  element.addEventListener("click", openModal);
}

// Adds an event listener to close the modal when the "x" is clicked on.
btnCloseModal.addEventListener("click", closeModal);

// Adds an event listener to the overlay that closes the modal when it is clicked on.
overlay.addEventListener("click", closeModal);

// Adds an event listener to close the modal when the user presses the Escape key.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
