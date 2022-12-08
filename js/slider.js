var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  breakpoints: {
    320: { spaceBetween: 30 },
    768: { spaceBetween: 100 },
    1024: { spaceBetween: 150 },
    1600: { spaceBetween: 150 },
    1920: { spaceBetween: 0 },
  },
});
