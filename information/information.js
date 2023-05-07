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
    "../files/FORMULIR_PENDAFTARAN_PESERTA_BARATA_MADYA_XI.pdf",
    "../files/JUKLAK_JUKNIS_BARATA_MADYA_XI.pdff"
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

  if (confirm("Izinkan unduh beberapa file?")) {
    // Loop melalui daftar URL dan memanggil fungsi downloadFile untuk setiap URL
    for (let i = 0; i < urls.length; i++) {
      downloadFile(urls[i]);
    }
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
  var countDownDate = new Date("June 4, 2023 00:00:00").getTime();
  // var countDownDate = new Date("May 7, 2023 18:04:00").getTime();

  const leadingZero = (number) => {
    return parseInt(number) < 10 ? "0" + number : "" + number;
  };

  // Run myfunc every second
  var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.querySelector(".days").innerHTML = leadingZero(days);
    document.querySelector(".hours").innerHTML = leadingZero(hours);
    document.querySelector(".minutes").innerHTML = leadingZero(minutes);
    document.querySelector(".seconds").innerHTML = leadingZero(seconds);
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.querySelector(".days").innerHTML = "00"
        document.querySelector(".hours").innerHTML = "00" 
        document.querySelector(".minutes").innerHTML = "00"
        document.querySelector(".seconds").innerHTML = "00"
        document.querySelector(".validation-btn").innerHTML = "DITUTUP";
        document.querySelector(".validation-btn").link.href = "#";
    }
  }, 1000);
}

function copyrightDate () {
  const year = document.querySelector('#current-year');
  const d = new Date();

  year.innerHTML = d.getFullYear();
}

navbarActive();
headerScroll();
togglePassword();
clickDownloadBtn();
shareModal();
// flip();
boxLogin();
dateInfo();
dateCountdown();
copyrightDate();