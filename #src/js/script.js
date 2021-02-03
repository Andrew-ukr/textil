@@include('../../node_modules/swiper/swiper-bundle.min.js')
@@include('module/_tabs.js')
@@include('module/_to-top-btn.js')


window.addEventListener("DOMContentLoaded", () => {
  'use strict';

  tabsInit('.tabs__header-item','.tabs__content-item');
  tabsInit('.product__tabs-list-item','.product__tabs-content-item');

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

  const revisedSlider = new Swiper('.revised-container', {
    slidesPerView: 4,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  const productDownSlider = new Swiper('.product__down-slider-container', {
    direction: 'vertical',
    slidesPerView: 5,
    spaceBetween: 0,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  const productTopSlider = new Swiper('.product__top-slider-container', {
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    thumbs: {
      swiper: productDownSlider
    }

  });

});