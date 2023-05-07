function navbarActive() {
  let menu = document.querySelector('.menu-icon');
  let navbar = document.querySelector('.navbar-right-section');
  let navbarLogin = document.querySelector('.btnActive');
  let wrapper = document.querySelector('.wrapper');

  menu.addEventListener('click', () => {
      navbar.classList.toggle('open-menu');
      menu.classList.toggle("move");
  });

  navbarLogin.addEventListener("click", () => {
      navbar.classList.remove("open-menu");
      menu.classList.remove("move");
      wrapper.classList.add('active-popup');
  });

  window.addEventListener('scroll', () => {
      navbar.classList.remove("open-menu");
      menu.classList.remove("move");
  });

  window.addEventListener("scroll", () => {
      wrapper.classList.remove('active-popup');
  });
}

function headerScroll () {
  let navbarScroll = document.querySelector(".navbar-section");

  window.addEventListener("scroll", () => {
  window.scrollY > 0 ? navbarScroll.classList.add("navbar-active") : navbarScroll.classList.remove("navbar-active");
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

  window.addEventListener("scroll", () => {
      wrapper.classList.remove('active-popup');
  });
}

function togglePassword () {
  const inputPassword = document.querySelector(".password-input");
  const toggleEyeBefore = document.querySelector(".icon-after");
  const toggleEyeAfter = document.querySelector(".icon-before");

  toggleEyeBefore.addEventListener('click', () => {
      if (inputPassword.type === "password") {
          inputPassword.type = "text";
      }
  })
  toggleEyeAfter.addEventListener("click", () => {
      if (inputPassword.type === "text") {
          inputPassword.type = "password";
      }
  })
}

function downloadBtn () {
  // Daftar URL file yang akan diunduh
  const urls = [
    "../files/BUKU_REFERENSI.pdf",
    "../files/KARTU_LUKA.pdf",
    "../files/FORM_BIODATA_PESERTA.xls",
    "../files/FORMULIR_PENDAFTARAN_PESERTA_BARATA_MADYA_XI.pdf"
  ];

  // Fungsi untuk mengunduh file
  function downloadFile(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Loop melalui daftar URL dan memanggil fungsi downloadFile untuk setiap URL
  for (let i = 0; i < urls.length; i++) {
    downloadFile(urls[i]);
  }
}

function clickDownloadBtn () {
  const download = document.querySelector(".download");

  download.addEventListener("click", () => {
    downloadBtn();
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

function dateInfo () {
  const dateMonth = new Date();
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const dateDay = new Date();
  const d = new Date();

  document.querySelector(".month").innerHTML = months[dateMonth.getMonth()];
  document.querySelector(".date-day").innerHTML = dateDay.getDate();
  document.querySelector(".day").innerHTML = days[d.getDay()];
}

function dateCountdown () {
  const date = new Date();
}

function copyrightDate () {
  const year = document.querySelector('#current-year');
  const d = new Date();

  year.innerHTML = d.getFullYear();
}

navbarActive();
headerScroll();
clickDownloadBtn();
shareModal();
// flip();
boxLogin();
dateInfo();
dateCountdown();
copyrightDate();