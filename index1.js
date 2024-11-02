document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const users = [
    { email: "user1@example.com", password: "Password1!" },
    { email: "user2@example.com", password: "Password2!" },
  ];

  form.addEventListener("submit", (event) => {
    let isValid = true;

    if (!email.value || !validateEmail(email.value)) {
      isValid = false;
      emailError.textContent = "Veuillez entrer une adresse email valide.";
      email.style.borderColor = "red";
    } else {
      emailError.textContent = "";
      email.style.borderColor = "green";
    }

    if (!password.value) {
      isValid = false;
      passwordError.textContent = "Veuillez entrer votre mot de passe.";
      password.style.borderColor = "red";
    } else {
      passwordError.textContent = "";
      password.style.borderColor = "green";
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      const user = users.find(
        (user) => user.email === email.value && user.password === password.value
      );
      if (!user) {
        event.preventDefault();
        alert("Email ou mot de passe incorrect.");
      }
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
