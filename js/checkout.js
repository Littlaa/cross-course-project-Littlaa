const formCheckout = document.querySelector("#formCheckout");
const fullNameCheck = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const postcode = document.querySelector("#postcode");
const postError = document.querySelector("#postError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const cardholder = document.querySelector("#cardholder");
const cardholderError = document.querySelector("#cardholderError");
const cardnumber = document.querySelector("#cardnumber");
const cardError = document.querySelector("#cardError");
const monthYear = document.querySelector("#mmyy");
const monthError = document.querySelector("#monthError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

function formCheckoutValidation(event) {
  event.preventDefault();

  if (minLength(fullNameCheck.value, 0)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (minLength(address.value, 0)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (minLength(postcode.value, 3)) {
    postError.style.display = "none";
  } else {
    postError.style.display = "block";
  }
  if (minLength(country.value, 0)) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }
  if (minLength(cardholder.value, 0)) {
    cardholderError.style.display = "none";
  } else {
    cardholderError.style.display = "block";
  }
  if (minLength(cardnumber.value, 15)) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
  }
  if (minLength(monthYear.value, 3)) {
    monthError.style.display = "none";
  } else {
    monthError.style.display = "block";
  }
  if (minLength(cvc.value, 2)) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
  }
}

formCheckout.addEventListener("submit", formCheckoutValidation);

function minLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
