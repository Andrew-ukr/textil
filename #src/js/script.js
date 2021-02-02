@@include('../../node_modules/swiper/swiper-bundle.min.js')
@@include('module/_tabs.js')
@@include('module/_to-top-btn.js')


window.addEventListener("DOMContentLoaded", () => {
  'use strict';

  tabsInit();

  const heroSlider = new Swiper('.hero__container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  const blogSlider = new Swiper('.blog-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

});