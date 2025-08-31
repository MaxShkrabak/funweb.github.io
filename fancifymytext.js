function changeFont() {
  document.getElementById("textArea").style.fontSize = "3em";
}

function changeWeight() {
  if (document.getElementById("fancyButton").checked) {
    document.getElementById("textArea").style.fontWeight = "bold";
  } if (document.getElementById("boringButton").checked) {
    document.getElementById("textArea").style.fontWeight = "normal";
  }
}
