//import { c } from './script.js';


// var student = document.getElementById("initials");
// var score = document.getElementById("score");
var initials = document.getElementById("init");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-initials");

function saveScore() {
  // Save related form data as an object
  var userInitialsScore = {
    // student: student.value,
    initials: initials.value,
    score: localStorage.getItem("cValue")
  };

  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("userInitialsScore", JSON.stringify(userInitialsScore));
}

function renderLastGrade() {
  // Use JSON.parse() to convert text to JavaScript object
  var fScore = JSON.parse(localStorage.getItem("userInitialsScore"));
  // Check if data is returned, if not exit out of the function
  if (fScore !== null) {
//   document.getElementById("saved-name").innerHTML = lastGrade.student;
  document.getElementById("saved-initials").innerHTML = fScore.initials;
  document.getElementById("saved-grade").innerHTML = fScore.score;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveScore();
renderLastGrade();
});

// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastGrade();
}
init();

//<script type="module" src="script.js"></script>