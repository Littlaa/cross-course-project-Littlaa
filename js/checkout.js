const checkoutForm = document.querySelector("#checkoutForm");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");


function formValidation(event) {
  event.preventDefault();

  if (minLength(fullName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  

checkoutForm.addEventListener("submit", formValidation);

function minLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
