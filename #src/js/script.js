@@include('../../node_modules/swiper/swiper-bundle.min.js')
@@include('module/_modal.js')
@@include('module/_modal-mr.js')
@@include('module/_tabs.js')
@@include('module/_to-top-btn.js')
@@include('module/_openSizeTable.js')
@@include('module/_quantity.js')

window.addEventListener("DOMContentLoaded", () => {
  'use strict';

  quantity('product__quantity', 'product__quantity-number');
  openSizeTable('.product__size-table', '.modal__content');
  tabsInit('.tabs__header-item', '.tabs__content-item');
  tabsInit('.product__tabs-list-item', '.product__tabs-content-item');

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
    slidesPerView: 1.1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      450: {
        slidesPerView: 1.5,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }

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