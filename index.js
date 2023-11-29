const passwordInputDiv = document.querySelector(".password-input");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const showPassword = document.querySelector(".show-pw");
const createAccountBtn = document.querySelector(".account-btn");
let errorMessage;

// Function and Event listener for error message:

document.addEventListener("DOMContentLoaded", checkInput);
passwordInput.addEventListener("input", checkInput);
confirmPassword.addEventListener("input", checkInput);

function checkInput() {
  if (errorMessage) {
    passwordInputDiv.removeChild(errorMessage);
    errorMessage = null;
  }
  if (
    passwordInput.value == "" ||
    passwordInput.value !== confirmPassword.value
  ) {
    {
      errorMessage = document.createElement("p");
      errorMessage.textContent = "*Passwords do not match";
      errorMessage.classList.add("password-error");
      passwordInputDiv.appendChild(errorMessage);
    }
  }
}

// function and event listener for "show password" button:

showPassword.addEventListener("click", showPw);

function showPw() {
  if (showPassword.textContent == "show password") {
    showPassword.textContent = "hide password";
    passwordInput.setAttribute("type", "text");
    confirmPassword.setAttribute("type", "text");
  } else {
    showPassword.textContent = "show password";
    passwordInput.setAttribute("type", "password");
    confirmPassword.setAttribute("type", "password");
  }
}

//function create account button:
