const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const errorMessage = document.getElementById("errorMessage");
const loginBtn = document.getElementById("loginBtn");

// Prompt 7: Add toggle to show/hide password with an eye icon
showPassword.addEventListener("change", () => {
  password.type = showPassword.checked ? "text" : "password";
});

/* Prompt 4: Validate email using regex and show error if it’s invalid */
// Skipped here since no email field — can modify `username` to be email if needed

/* Prompt 5: Validate that password contains at least 8 characters and one special symbol */
function isPasswordStrong(pwd) {
  const regex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return regex.test(pwd);
}

/* Prompt 8: Disable login button if email or password is invalid */
function validateInputs() {
  const validUsername = username.value.trim() !== "";
  const validPassword = isPasswordStrong(password.value);
  loginBtn.disabled = !(validUsername && validPassword);
}

username.addEventListener("input", validateInputs);
password.addEventListener("input", validateInputs);

// Prompt 6 applied in CSS for transition animation

// Prompt 10 applied in CSS with fadeIn animation

// Prompt: Validate form and simulate login
form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMessage.textContent = "";

  if (!isPasswordStrong(password.value)) {
    errorMessage.textContent = "Password must be at least 8 characters and contain a special symbol.";
    return;
  }

  // Simulate success
  loginBtn.disabled = true;
  setTimeout(() => {
    window.location.href = "success.html";
  }, 1000);
});