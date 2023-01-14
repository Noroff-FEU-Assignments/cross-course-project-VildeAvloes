export function checkLength(value, len) {
  return value.trim().length > len;
}

export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailPatternMatches = regEx.test(email);
  return emailPatternMatches;
}

export function validatePassword(password) {
  const passwordRegEx = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  const passwordPatternMatches = passwordRegEx.test(password);
  return passwordPatternMatches;
}

export function myAccount() {
  window.location.href = "account.html";
}
