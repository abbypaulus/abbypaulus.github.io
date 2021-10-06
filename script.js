function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

Example
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Form must be filled out");
    return false;
  }
}

var myText = document.getElementById("my-text");
var result = document.getElementById("result");

var limit = 100

result.textContent = 0 +"/" + limit

myText.addEventListener("input",function(){

  var textLength = myText.value.length;

  result.textContent = textLength + "/" + limit;

  if(textLength > limit){
      myText.style.borderColor = "#ff2851";
      result.style.color = "#ff2851";
  }
  else{
      myText.style.borderColor = "#31821b";
      result.style.color = "#31821b";
  }
});

