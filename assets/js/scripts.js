var msgIX = 0;
var msgs = new Array(
  "Cat's Human",
  "Cat's Lover",
  "Veterinarian",
  "Breeder",
  "Working for Cats and their Human",
  "Human"
);

function displayMessage(milliseconds) {
  if (msgIX < msgs.length) {
    var heading = document.getElementById("catWatchers");
    heading.firstChild.nodeValue = msgs[msgIX];
    msgIX++;
    window.setTimeout(function () {
      displayMessage(milliseconds);
    }, milliseconds);
    if (msgIX >= msgs.length) {
      msgIX = 0;
    }
  }
}
