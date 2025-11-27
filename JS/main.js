const body = document.querySelector("body")

// Skills bar animation on scroll
const progressBars = document.querySelectorAll('progress');

const animateProgressBar = (bar) => {
    const targetValue = parseInt(bar.dataset.value, 10);
    let currentValue = 0;

    //Create an interval for make the bar moving
    const interval = setInterval(() => {
        if (currentValue >= targetValue) {
            clearInterval(interval);
        } else {
            currentValue++;
            bar.value = currentValue;
        }
    }, 20); 
};

const progressBarObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            animateProgressBar(bar);
            observer.unobserve(bar);
        }
    });
}, {
    threshold: 0.5 //if 50% of the bars are visble, the animation start
});

progressBars.forEach(bar => progressBarObserver.observe(bar));

// Images
document.querySelectorAll(".zoomable").forEach(
    image => {
        image.addEventListener("click",
            event => {
                const background = document.createElement("div")
                background.id = "background"
                body.appendChild(background)

                const lightbox = document.createElement("div")
                lightbox.id = "lightbox"
                background.appendChild(lightbox)

                const newImage = document.createElement("img")
                newImage.src = image.src
                lightbox.appendChild(newImage)

                const rect = newImage.getBoundingClientRect()
                const width = rect.width
                lightbox.style.left = "calc(50vw - " + (width/2+20) + "px)"

                const close = _ => {
                    lightbox.classList.add("out")
                    setTimeout( _ => {
                        background.remove()
                    },1000)
                }

                const closeButton = document.createElement("div")
                closeButton.id = "closeButton"
                closeButton.innerText = "❌"
                lightbox.appendChild(closeButton)
                closeButton.addEventListener("click", event => {
                    close()
                })

                body.addEventListener("keyup", event => {
                    if (event.key == "Escape") {
                        close()
                    }
                })
            }
        )
    }
)

//Filters
document.addEventListener('DOMContentLoaded', function() {
    const buttonsFilter = document.querySelectorAll('.filterB');
    const projects = document.querySelectorAll('.projects');

    buttonsFilter.forEach(button => {
        button.addEventListener('click', function() {
            // 1 Catch the button type
            const filterCategorie = this.getAttribute('data-categorie');

            //2. Browse all the projects
            projects.forEach(project => {
                const projectCategories = project.getAttribute('data-categories');

                // 3. Hide/Affiched
                if (filterCategorie === 'tout' || (projectCategories && projectCategories.includes(filterCategorie))) {
                    // Make visible the project
                    project.style.display = 'block'
                } else {
                    // Hide the project
                    project.style.display = 'none';
                }
            });
        });
    });
});
