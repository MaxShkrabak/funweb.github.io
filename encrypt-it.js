/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    let text = document.getElementById("input-text").value;
    let finalMSG = encryptMessage(text);
    
    let outputText = document.getElementById("result");
    outputText.textContent = finalMSG;
  }

  function handleReset() {
    let textField = document.getElementById("input-text");
    textField.value = "";
  }

  /**
   * Encrypts the given message by shifting each letter by one in the alphabet.
   * Wraps around 'z' to 'a'. Non-letter characters are not changed.
   * @param {string} message - The message to be encrypted.
   * @returns {string} - The encrypted message.
   */
  function encryptMessage(message) {
    let zValue = "z".charCodeAt(0);
    let aValue = "a".charCodeAt(0);
    
    message = message.toLowerCase();

    let asciiArray = [];

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= aValue && message.charCodeAt(i) <= zValue) {
        let cypherChar = message.charCodeAt(i) + 1;

        // Wrap back to 'a' if we go past 'z'
        if (cypherChar > zValue) {
          cypherChar = aValue;
        }

        // Convert Ascii value to char and push to array
        asciiArray.push(String.fromCharCode(cypherChar));
      } else {
        asciiArray.push(message.charAt(i));
      } // Non-letter characters are pushed unchanged
      
    }

    return asciiArray.join("");
  }

  
})();

