const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Add functionality for a dark and light mode switch: 
// Use .addEventListener to set up an element to listen for an event: 
// Need to add HTML, make a switch underneath the '{JSONadalwhite}' logo

const themeSwitcher = docuement.querySelector("");
const container = document.querySelector("");

const mode = "dark";

themeSwitcher.addEventListener("click", function() {
    if(mode === "dark") {
        mode = "light";
        container.setAttribute("class", "light");
    }
    else{
        mode = "dark";
        container.setAttribute("class", "dark");
    }
});