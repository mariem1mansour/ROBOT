document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("registerForm");
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const fullnameError = document.getElementById("fullnameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const users = [];

  form.addEventListener("submit", (event) => {
    let isValid = true;

    if (!fullname.value) {
      isValid = false;
      fullnameError.textContent = "Veuillez entrer votre nom complet.";
      fullname.style.borderColor = "red";
    } else {
      fullnameError.textContent = "";
      fullname.style.borderColor = "green";
    }

    if (!email.value || !validateEmail(email.value)) {
      isValid = false;
      emailError.textContent = "Veuillez entrer une adresse email valide.";
      email.style.borderColor = "red";
    } else {
      emailError.textContent = "";
      email.style.borderColor = "green";
    }

    if (!password.value || !validatePassword(password.value)) {
      isValid = false;
      passwordError.textContent =
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un symbole.";
      password.style.borderColor = "red";
    } else {
      passwordError.textContent = "";
      password.style.borderColor = "green";
    }

    if (!isValid) {
      event.preventDefault(); 
    } else {
      
      users.push({
        fullname: fullname.value,
        email: email.value,
        password: password.value,
      });
      console.log("Nouvel utilisateur ajouté:", users);
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  }
});
