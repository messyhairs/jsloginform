
var email = document.forms['vform']['email'];
var password_confirm = "12345";
var password = document.forms['vform']['password'];


// SELECTING ALL ERROR DISPLAY ELEMENTS

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

// SETTING ALL EVENT LISTENERS

email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

// validation function
function Validate() {
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate password
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // check if the two passwords match
  if (password.value != password_confirm) {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
  else
  {
    window.open('welcome.html');
  }

   
}
// event handler functions


function emailVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById('email_div').style.color = "#5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    password.style.border = "1px solid #5e6e66";
    document.getElementById('password_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  
  }
   
}
