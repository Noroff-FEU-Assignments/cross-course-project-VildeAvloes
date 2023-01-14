import { checkLength, validateEmail, validatePassword, myAccount } from "./components/globals.js";

const form = document.querySelector("#signupForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const signUpButton = document.querySelector(".signup-button");

function validateForm(event) {
  event.preventDefault();
  let success = true;

  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    success = false;
  }
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
    signUpButton.onClick = myAccount();
  }
}

form.addEventListener("submit", validateForm);
