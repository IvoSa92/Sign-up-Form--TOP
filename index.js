const passwordInputDiv = document.querySelector(".password-input");
const passwordInput = document.querySelector("#password");

document.addEventListener("DOMContentLoaded", () => {
  if (passwordInput.value === "") {
    let errorMessage = document.createElement("p");
    errorMessage.textContent = "*Passwords do not match";
    passwordInputDiv.appendChild(errorMessage);
    errorMessage.classList.add("password-error");
  }
});
