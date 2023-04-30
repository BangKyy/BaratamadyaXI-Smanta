// Header background change On Scroll
let navbar = document.querySelector(".navbar-section");

window.addEventListener("scroll", () => {
window.scrollY > 0 ?   navbar.classList.add("navbar-active") : navbar.classList.remove("navbar-active");
});

// Footer copyright
const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear(); 