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
