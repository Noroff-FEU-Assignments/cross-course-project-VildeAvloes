export function displayMessage(type = "sucess", message = "No message") {
  return `<div class="message ${type}">${message}</div>`;
}
