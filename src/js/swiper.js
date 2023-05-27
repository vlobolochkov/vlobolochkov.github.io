var swiper = new Swiper('.mySwiper', {
  spaceBetween: 0,
  slidesPerView: 1.2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

var swiper = new Swiper('.main-price__swiper', {
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: false
})
