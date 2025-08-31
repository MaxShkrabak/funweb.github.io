function changeFont() {
  document.getElementById("textArea").style.fontSize = "3em";
}

function changeWeight() {
  if (document.getElementById("fancyButton").checked) {
    document.getElementById("textArea").className = "fancy";
  } if (document.getElementById("boringButton").checked) {
    document.getElementById("textArea").className = "boring";
  }
}

function moo() {
  let text = document.getElementById("textArea");

  let currentText = text.value.toUpperCase();
  let parts = currentText.split(".");

  for (let i = 0; i < parts.length; i++) {
    let trimmedPart = parts[i].trim();

    // Add '-Moo' if there's at least one letter
    if (/[A-Z]/.test(trimmedPart)) {
      parts[i] = trimmedPart + "-Moo"; 
    } else {
      // Do nothing
    }
  }
  
  text.value = parts.join(".");
}