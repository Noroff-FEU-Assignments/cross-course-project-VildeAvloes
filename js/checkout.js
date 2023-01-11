import { displayMessage } from "./components/message.js";
import { checkLength } from "./components/globals.js";
import { validateEmail } from "./components/globals.js";

const form = document.querySelector("#checkoutForm");
const name = document.querySelector("#cardname");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
// const cardnumber = document.querySelector("#cardnumber");
// const cardnumberError = document.querySelector("#cardnumberError");
// const exp = document.querySelector("#exp");
// const expError = document.querySelector("#expError");
// const cvv = document.querySelector("#cvv");
// const cvvError = document.querySelector("#cvvError");
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
  //   if (validateCardnumber(cardnumber.value) === true) {
  //     cardnumberError.style.display = "none";
  //   } else {
  //     cardnumberError.style.display = "block";
  //     success = false;
  //   }
  //   if (checkLength(exp.value, 0) === true) {
  //     expError.style.display = "none";
  //   } else {
  //     expError.style.display = "block";
  //     success = false;
  //   }
  //   if (checkLength(cvv.value, 0) === true) {
  //     cvvError.style.display = "none";
  //   } else {
  //     cvvError.style.display = "block";
  //     success = false;
  //   }
  if (success) {
    successMessage.innerHTML = displayMessage("success", "You purchase was successfully comitted");
  }
}

form.addEventListener("submit", validateForm);

//Work with this validation
// function validateCardnumber() {
//   var ccNum = document.getElementById("cardnumber").value;
//   var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
//   var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
//   var amexpRegEx = /^(?:3[47][0-9]{13})$/;
//   var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
//   var isValid = false;

//   if (visaRegEx.test(ccNum)) {
//     isValid = true;
//   } else if (mastercardRegEx.test(ccNum)) {
//     isValid = true;
//   } else if (amexpRegEx.test(ccNum)) {
//     isValid = true;
//   } else if (discovRegEx.test(ccNum)) {
//     isValid = true;
//   }

//   if (isValid) {
//     alert("Thank You!");
//   } else {
//     alert("Please provide a valid Visa number!");
//   }
// }
