var swiper = new Swiper('.mySwiper', {
  // loop: true,
  spaceBetween: 0,
  slidesPerView: 4,

  // watchSlidesProgress: true,

  breakpoints: {
    '@0.00': {
      slidesPerView: 3,
    },
    '@0.75': {
      slidesPerView: 3,
    },
    '@1.00': {
      slidesPerView: 4,
    },
    '@1.50': {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});
