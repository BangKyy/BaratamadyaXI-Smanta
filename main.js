function navbarActive() {
    let menu = document.querySelector('.menu-icon');
    let navbar = document.querySelector('.navbar-right-section');
    let navbarLogin = document.querySelector('.btnActive');
    let wrappers = document.querySelector('.wrapper');

    menu.addEventListener('click', () => {
        navbar.classList.toggle('open-menu');
        menu.classList.toggle("move");
    });

    navbarLogin.addEventListener("click", () => {
        navbar.classList.remove("open-menu");
        menu.classList.remove("move");
        wrappers.classList.add('active-popup');
    });

    window.addEventListener('scroll', () => {
        navbar.classList.remove("open-menu");
        menu.classList.remove("move");
    });
}

function boxLogin () {
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });
}

function headerScroll () {
    let navbarScroll = document.querySelector(".navbar-section");

    window.addEventListener("scroll", () => {
    window.scrollY > 0 ? navbarScroll.classList.add("navbar-active") : navbarScroll.classList.remove("navbar-active");
    });
}

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

function slideDownfaq () {
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
}

function scrollTop () {
    let scrollTopBtn = document.querySelector(".scroll-top");

    window.addEventListener("scroll", () => {
        scrollTopBtn.classList.toggle("scroll-active", window.scrollY >= 400);
    });
}

function copyrightDate () {
    const year = document.querySelector('#current-year');

    year.innerHTML = new Date().getFullYear();
}

navbarActive();
boxLogin();
headerScroll();
slideDownfaq();
scrollTop();
copyrightDate();