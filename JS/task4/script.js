function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  var isValid = true;

  // Validate Name
  if (name.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Validate Email
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  // Validate Password
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    isValid = false;
  }

  return isValid;
}