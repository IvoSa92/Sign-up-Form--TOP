const passwordInputDiv = document.querySelector(".password-input");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
let errorMessage;

document.addEventListener("DOMContentLoaded", checkInput);
passwordInput.addEventListener("input", checkInput);
confirmPassword.addEventListener("input", checkInput);

function checkInput() {
  if (
    passwordInput.value == "" ||
    passwordInput.value !== confirmPassword.value
  )
    if (!errorMessage) {
      {
        errorMessage = document.createElement("p");
        errorMessage.textContent = "*Passwords do not match";
        errorMessage.classList.add("password-error");
        passwordInputDiv.appendChild(errorMessage);
      }
    } else if (errorMessage) {
      errorMessage.remove();
      errorMessage = null;
    }
}
