// HomePage
const divHome = document.getElementById("homeView")
const homeName = document.createElement("div")
homeName.classList.add("home-header")

const presentationContainer = document.createElement("div")
presentationContainer.classList.add("flex-container")


// Création de l'observateur pour les animations
const homeElementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            homeElementObserver.unobserve(entry.target); // Stopping observa when it's done
        }
    });
}, {
    threshold: 0.1
});

// Function to create, add and look an element
function createAndAnimateElement(tag, text, className, delay, parent, id = null, src = null, styles = {}) {
    const classNames = Array.isArray(className) ? className : [className];

    setTimeout(() => {
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(...classNames);
        }
        if (text) element.innerText = text;
        if (id) element.id = id;
        if (src) element.src = src;

        Object.keys(styles).forEach(key => {
            element.style[key] = styles[key];
        });

        parent.appendChild(element);
        homeElementObserver.observe(element); // On demande à l'observateur de surveiller ce nouvel élément
    }, delay);
}

// Cration of the reception elements

divHome.appendChild(homeName);
createAndAnimateElement('h1', "Hello 👋", 'homeTransition', 1000, homeName, 'hello');
createAndAnimateElement('h2', "I'm Clément VESIN", 'homeTransition', 1500, homeName, 'me');

divHome.appendChild(presentationContainer);
createAndAnimateElement('p', "I am a French student in second year of computer science studies at University of Savoy in France, specializing in Application Integration and Information System Management. I am looking for an internship to deepen my skills. I am motivated to contribute my skills and expertise to innovative projects.", ['homeTransition', 'presentation-text'], 2000, presentationContainer, "about");
createAndAnimateElement('img', null, 'homeTransition', 2500, presentationContainer, 'imgMe', 'sources/index/clement.jpg', {
    width: '300px',
    height: '300px',
});
