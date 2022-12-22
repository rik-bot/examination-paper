let hamburger = document.querySelector(".hamburger");
let header_nav__collapse = document.querySelector(".header_nav__collapse");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  header_nav__collapse.classList.toggle("is-active");
});

let language = document.querySelector(".language");
let languageList = document.querySelector(".language-list");

language.addEventListener("click", () => {
  languageList.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 3,
    },
    1010: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper reviews", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 3,
    },
    1010: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
