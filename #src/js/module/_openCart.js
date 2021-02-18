const openCart = () => {
  let cartBtn = document.querySelector('.header__top-btn');
  let closeCartBtn = document.querySelector('.cart__close');
  let cartModal = document.querySelector('.cart');

  cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
    cartModal.firstElementChild.classList.toggle('active');
    document.body.classList.add('body--lock');
    document.body.style.paddingRight = `${modalMR()}px`;
  });

  closeCartBtn.addEventListener('click', () => {
    cartModal.classList.toggle('active');
    cartModal.firstElementChild.classList.toggle('active');
    document.body.classList.remove('body--lock');
    document.body.style.paddingRight = ``;
  });

  cartModal.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('cart')) {
      cartModal.classList.remove('active');
      document.body.classList.remove('body--lock');
      document.body.style.paddingRight = ``;
      document.body.style.paddingRight = ``;
    }
  });
};