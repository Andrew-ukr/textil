window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {


    if (document.documentElement.scrollTop > 400) {
      document.querySelector('.mobile-block').style.paddingRight = '65px';
      document.querySelector('.up-btn').style.opacity = '1';
      document.querySelector('.up-btn').style.visibility = 'visible';
    } else {
      document.querySelector('.up-btn').style.opacity = '0';
      document.querySelector('.up-btn').style.visibility = 'hidden';
      document.querySelector('.mobile-block').style.paddingRight = '0px';
    }

    if (document.documentElement.scrollTop > 400) {
      document.querySelector('.mobile-block').classList.add('mobile-block--active');
      document.querySelector('.mobile-block').style.opacity = '1';
    } else {
      document.querySelector('.mobile-block').classList.remove('mobile-block--active');
      document.querySelector('.mobile-block').style.opacity = '0';
    }

  });
});