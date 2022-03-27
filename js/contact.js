const form = document.querySelector("#form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const sendSuccess = document.querySelector(".send");

function formValidation(event) {
  event.preventDefault();

  if (minLength(fullName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (emailValidation(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (minLength(message.value, 0)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (minLength(fullName.value, 0 && message.value, 0) && emailValidation(email.value)) {
    return sendMessage();
  }
}

form.addEventListener("submit", formValidation);

function sendMessage() {
  if (form) {
    sendSuccess.style.display = "block";
  }
}

function minLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}
