
//   Initilize Swiper
const swiper = new Swiper('.slider-wrapper', {
loop: true,
grabCusor: true,
spaceBetween: 25,   





  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// Resposive breakpoint

  breakpoint{
    0: {
        sliderPerView: 1
    },
     768: {
        sliderPerView: 2
    },
    1024: {
        sliderPerView: 3
    },

  }

 
});
