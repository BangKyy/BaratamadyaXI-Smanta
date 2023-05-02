const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Header background change On Scroll
let navbar = document.querySelector(".navbar-section");

window.addEventListener("scroll", () => {
window.scrollY > 0 ?   navbar.classList.add("navbar-active") : navbar.classList.remove("navbar-active");
});

// Running text
// function runningText(textAnimation) {
//     let textSelected = 0;
//     for (let i = 0; i < textAnimation.options.length; i++) {
//       if (textAnimation.options[i].selected) {
//         textSelected++;
//       }
//     console.log(runningText);
//     }
//     return textSelected;
// }

// Slide down FAQ
let li = document.querySelectorAll(".faq-text li");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        let clickedLi;
        if(e.target.classList.contains("question-arrow")) {
            clickedLi = e.target.parentElement;
        } else {
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}


const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear(); 