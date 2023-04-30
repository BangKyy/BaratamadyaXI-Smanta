const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('.active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// loginLink.addEventListener('click', () => {
//     wrapper.classList.add('.active');
// });

// Header background change On Scroll
let navbar = document.querySelector(".navbar-section");

window.addEventListener("scroll", () => {
window.scrollY > 0 ?   navbar.classList.add("navbar-active") : navbar.classList.remove("navbar-active");
});

// Icon password eye
const iconEye = document.querySelector('.icon');
const iconEye1 = document.querySelector('.bi-eye');
const iconEye2 = document.querySelector('icon-active');

iconEye1.addEventListener('click', () => {
    iconEye.classList.add()
})


// Slide down FAQ
let li = document.querySelectorAll(".faq-text li");
// let question = document.querySelector(".question-arrow");
// let arrow = document.querySelectorAll(".arrow-active");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        let clickedLi;
        if(e.target.classList.contains("question-arrow")) {
            clickedLi = e.target.parentElement;
            // question.classList.add("arrowActive");
        } else {
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}

var slideIndex = 1;
    showSlide(slideIndex);

    function nextslide(n){
        showSlide(slideIndex += n);
    }

    function dotslide(n){
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        var i;
        var slides = document.getElementsByClassName("imgslide");
        var dot = document.getElementsByClassName("dot");
            
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {            
            slides[i].style.display = "none";
        }
        for (i = 0; i < slides.length; i++) {              
            dot[i].className = dot[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dot[slideIndex - 1].className += " active";
}

const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear(); 