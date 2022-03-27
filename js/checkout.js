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
const cardNumber = document.querySelector("#cardnumber");
const cardError = document.querySelector("#cardError");
const monthYear = document.querySelector("#mmyy");
const monthError = document.querySelector("#monthError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");
const success = document.querySelector("#successCheck");

function formCheckoutValidation(form) {
  form.preventDefault();

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
  if (minLength(cardNumber.value, 15)) {
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
  if (
    minLength(
      fullNameCheck.value,
      0 && address.value,
      0 && postcode.value,
      3 && country.value,
      0 && cardholder.value,
      0 && cardNumber.value,
      15 && monthYear.value,
      3 && cvc.value,
      2
    )
  ) {
    return successMessage();
  }
}

formCheckout.addEventListener("submit", formCheckoutValidation);

function successMessage() {
  if (formCheckout) {
    success.style.display = "block";
  }
}

function minLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
