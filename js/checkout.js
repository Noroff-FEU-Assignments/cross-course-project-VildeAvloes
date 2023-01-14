import { displayMessage } from "./components/message.js";
import { checkLength, validateEmail } from "./components/globals.js";

const form = document.querySelector("#checkoutForm");
const name = document.querySelector("#cardname");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const cardnumber = document.querySelector("#cardnumber");
const cardnumberError = document.querySelector("#cardnumberError");
const exp = document.querySelector("#exp");
const expError = document.querySelector("#expError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");
const successMessage = document.querySelector(".success-message");

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
  if (validateCardNumber(cardnumber.value) === true) {
    cardnumberError.style.display = "none";
  } else {
    cardnumberError.style.display = "block";
    success = false;
  }
  if (validateExp(exp.value) === true) {
    expError.style.display = "none";
  } else {
    expError.style.display = "block";
    success = false;
  }
  if (validateCvv(cvv.value) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
    success = false;
  }
  if (success) {
    console.log("yay");
  }
}

form.addEventListener("submit", validateForm);

function validateCardNumber(cardnumber) {
  var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return regex.test(cardnumber.replaceAll(" ", ""));
}

function validateCvv(cvv) {
  let cvvRegEx = /^[0-9]{3,4}$/;
  const cvvPatternMatches = cvvRegEx.test(cvv);
  return cvvPatternMatches;
}

function validateExp(exp) {
  const expRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  const expPatternMatches = expRegEx.test(exp);
  return expPatternMatches;
}
