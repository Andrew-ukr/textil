@@include('../../node_modules/swiper/swiper-bundle.min.js')
@@include('module/_tabs.js')
@@include('module/_to-top-btn.js')


window.addEventListener("DOMContentLoaded", () => {
  'use strict';
  tabsInit();
  const heroSlider = new Swiper('.hero__container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

});