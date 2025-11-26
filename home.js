// HomePage
const divHome = document.getElementById("homeView")
const homeName = document.createElement("div")
homeName.classList.add("home-header") // <-- ajout pour centrer le header

const presentationContainer = document.createElement("div")
presentationContainer.classList.add("flex-container") // On utilise la classe flex-container


// Création de l'observateur pour les animations
const homeElementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            homeElementObserver.unobserve(entry.target); // On arrête d'observer une fois l'animation jouée
        }
    });
}, {
    threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
});

// Fonction pour créer, ajouter et observer un élément
function createAndAnimateElement(tag, text, className, delay, parent, id = null, src = null, styles = {}) {
    // Permettre à className d'être un tableau de classes
    const classNames = Array.isArray(className) ? className : [className];

    setTimeout(() => {
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(...classNames);
        }
        if (text) element.innerText = text;
        if (id) element.id = id;
        if (src) element.src = src;

        // Appliquer les styles
        Object.keys(styles).forEach(key => {
            element.style[key] = styles[key];
        });

        parent.appendChild(element);
        homeElementObserver.observe(element); // On demande à l'observateur de surveiller ce nouvel élément
    }, delay);
}

// Création des éléments de la page d'accueil

divHome.appendChild(homeName);
createAndAnimateElement('h1', "Hello 👋", 'homeTransition', 1000, homeName, 'hello');
createAndAnimateElement('h2', "I'm Clément VESIN", 'homeTransition', 1500, homeName, 'me');

divHome.appendChild(presentationContainer);
createAndAnimateElement('p', "I’m a French student in second year of computer science studies at University of Savoy in France, specializing in Application Integration and Information System Management. I am looking for an internship to deepen my skills that i’m study. I’m motived about contributing to innovative projects", ['homeTransition', 'presentation-text'], 2000, presentationContainer, "about");
createAndAnimateElement('img', null, 'homeTransition', 2500, presentationContainer, 'imgMe', 'sources/clement.jpg', {
    width: '300px',
    height: '300px',
});
