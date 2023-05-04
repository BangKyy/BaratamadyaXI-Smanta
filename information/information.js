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

function shareModal () {
  const iconShare = document.querySelector(".share-info");
  const popup = document.querySelector(".popup");
  const close = popup.querySelector(".close");
  const field = popup.querySelector(".field");
  const input = field.querySelector(".input-copy");
  const copy = field.querySelector(".btn-copy");

  iconShare.onclick = ()=>{
    popup.classList.toggle("show");
  }
  close.onclick = ()=>{
    iconShare.click();
  }
  copy.onclick = ()=>{
    input.select();
    input.setSelectionRange(0, 99999);
    if(document.execCommand("copy")){ //if the selected text copy
      field.classList.add("active");
      copy.innerText = "Disalin";
      navigator.clipboard.writeText(input.value);
      copyAlert();
      // popup.style.display = "none";
      setTimeout(()=>{
        window.getSelection().removeAllRanges(); //remove selection from document
        field.classList.remove("active");
        copy.innerText = "Salin";
      }, 1000);
    }
  }
}

function copyAlert () {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    // didOpen: (toast) => {
    //   toast.addEventListener('mouseenter', Swal.stopTimer)
    //   toast.addEventListener('mouseleave', Swal.resumeTimer)
    // }
  })
  Toast.fire({
    icon: 'success',
    title: 'Link berhasil disalin'
  })
}




// Footer copyright
function copyrightDate () {
  const year = document.querySelector('#current-year');

  year.innerHTML = new Date().getFullYear();
}

navbarActive();
shareModal();
// flip();
boxLogin();
headerScroll();
copyrightDate();