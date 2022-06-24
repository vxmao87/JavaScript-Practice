(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  // #1
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// #2
/*

The above code here worked because when it gets called, lines 2-3 immediately run. Then the code waits for the event listener function to occur. Once it does, the callback function gets called.

Interestingly, because of closures, the callback function has access to the 'header' variable defined above its parent function, which has finished running by the time the page finishes loading. The execution context of the IIFE is done for, yet the callback function inside takes the 'header' variable because it's part of its birthplace.

This closure is necessary because the IIFE is long gone, and so is the 'header' function, yet the callback function is attached to the IIFE so it can access the variables made by its birthplace, which is the IIFE.

*/
