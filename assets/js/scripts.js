var msgIX = 0;
var msgs = new Array(
  "Cat's Human",
  "Cat's Lover",
  "Veterinarian",
  "Breeder",
  "Working for Cats and their Humans",
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

function openNews(evt, name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
