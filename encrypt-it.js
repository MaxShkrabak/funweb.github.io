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
   * Initializes the program, setting up event listeners for the buttons.
   * This function is called when the "load" event fires on the window.
   */
  function init() {
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncryption);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  function handleEncryption() {
    let text = document.getElementById("input-text").value;
    let encryptedMsg = encryptMessage(text);
    
    let outputText = document.getElementById("result");
    outputText.textContent = encryptedMsg;
  }

  function handleReset() {
    let textField = document.getElementById("input-text");
    textField.value = "";
  }
})();

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