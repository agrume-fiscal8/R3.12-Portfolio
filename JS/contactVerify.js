const form = document.querySelector("form");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitButton = form.querySelector("button[type='submit']");

// Désactiver le bouton au chargement
submitButton.disabled = true;

function checkContact() {
    // Vérifier que tous les champs sont remplis
    const nomFilled = nom.value.trim() !== '';
    const emailFilled = email.value.trim() !== '';
    const messageFilled = message.value.trim() !== '';
    
    // Vérifier que l'email est valide (contient @)
    const emailValid = email.value.match(/@/)
    
    // Activer le bouton si toutes les conditions sont remplies
    if (nomFilled && emailValid && emailFilled && messageFilled) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// appelle les fonctions lorsqu'on modifie les champs 
nom.addEventListener("input", checkContact);
email.addEventListener("input", checkContact);
message.addEventListener("input", checkContact);

