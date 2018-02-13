// var mySwiper = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100
// });

// var mySwiper = document.querySelector('.swiper-container').swiper

// const nextSlide = document.querySelector('.swiper-button-next');
// const prevSlide = document.querySelector('.swiper-button-prev');

// nextSlide.addEventListener('click', () => mySwiper.slideNext());
// prevSlide.addEventListener('click', () => mySwiper.slidePrev());

var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


