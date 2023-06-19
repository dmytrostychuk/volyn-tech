var swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: false,
  watchSlidesProgress: true,

  breakpoints: {
    '@0.00': {
      slidesPerView: 3,
    },
    '@0.75': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});
