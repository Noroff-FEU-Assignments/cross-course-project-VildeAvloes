import { displayMessage } from "./components/message.js";
import { checkLength } from "./components/globals.js";
import { validateEmail } from "./components/globals.js";

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
const purchaseButton = document.querySelector(".purchase-button");

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
  if (validateCardnumber(cardnumber.value) === true) {
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
    console.log("YAY!");
  }
}

form.addEventListener("submit", validateForm);

function validateCardnumber() {
  let cardnumberValue = cardnumber.value;
  let visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
  let mastercardRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
  let amexpRegEx = /^3[47][0-9]{13}$/;
  let isValid = false;

  if (visaRegEx.test(cardnumberValue)) {
    isValid = true;
  } else if (mastercardRegEx.test(cardnumberValue)) {
    isValid = true;
  } else if (amexpRegEx.test(cardnumberValue)) {
    isValid = true;
  }
}

function validateCvv(cvv) {
  const cvvRegEx = /^[0-9]{3,4}$/;
  const cvvPatternMatches = cvvRegEx.test(cvv);
  return cvvPatternMatches;
}

function validateExp(exp) {
  const expRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  const expPatternMatches = expRegEx.test(exp);
  return expPatternMatches;
}
