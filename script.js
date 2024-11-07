const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("registrationForm");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordStrength = document.getElementById("passwordStrength");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const formError = document.getElementById("formError");

username.addEventListener("keyup", () => {
  const usernamePattern = /^[a-zA-Z0-9]{5,20}$/;
  if (!usernamePattern.test(username.value)) {
    usernameError.textContent = "Username harus 5-20 karakter dan alfanumerik.";
  } else {
    usernameError.textContent = "";
  }
});

email.addEventListener("change", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Format email tidak valid.";
  } else {
    emailError.textContent = "";
  }
});

password.addEventListener("keyup", () => {
  const strongPasswordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  if (!strongPasswordPattern.test(password.value)) {
    passwordStrength.textContent =
      "Password harus minimal 8 karakter dan mencakup angka dan huruf.";
  } else {
    passwordStrength.textContent = "";
  }
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Password tidak cocok.";
  } else {
    confirmPasswordError.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !usernameError.textContent &&
    !emailError.textContent &&
    !passwordStrength.textContent &&
    !confirmPasswordError.textContent
  ) {
    formError.textContent = "";
    alert("Pendaftaran berhasil!");
    form.reset();
  } else {
    formError.textContent = "Harap perbaiki kesalahan di formulir.";
  }
});
