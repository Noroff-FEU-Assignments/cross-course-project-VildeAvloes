import { validateEmail, validatePassword, myAccount } from "./components/globals.js";

const form = document.querySelector("#signinForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const signInButton = document.querySelector(".signin-button");

function validateForm(event) {
  event.preventDefault();
  let success = true;

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    success = false;
  }
  if (validatePassword(password.value) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
    success = false;
  }
  if (success) {
    signInButton.onClick = myAccount();
  }
}

form.addEventListener("submit", validateForm);
