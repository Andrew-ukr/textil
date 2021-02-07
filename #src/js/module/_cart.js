const cart = () => {

  let cart = [];
  if (localStorage.getItem('cartItems')) {
    cart = JSON.parse(localStorage.getItem('cartItems'));
  }
  const addBtn = document.querySelector('[data-cart="addBtn"]');
  const productItem = document.querySelectorAll('[data-cart="productItem"]');
  const cartContent = document.querySelector('.cart__content');

  function addItem(elem) {
    const item = {};

    item.title = elem.querySelector('[data-cart="productTitle"]').innerText;
    item.productSize = elem.querySelector('[data-cart="productSize"]').innerText;
    item.productSizeNavolochka = elem.querySelector('[data-cart="productSizeNavolochka"]').value;
    item.productNumber = elem.querySelector('[data-cart="productNumber"]').innerText;
    item.productPrice = elem.querySelector('[data-cart="productPrice"]').innerText;
    item.img = elem.querySelector('[data-cart="img"]').getAttribute('src');

    cart.unshift(item);
    localStorage.setItem('cartItems', (JSON.stringify(cart)));
  }

  function renderCartItems() {
    let cartItemsList = '';

    if(cart.length > 0) {
      cart.forEach(elem => {
        cartItemsList += `
          <div class="cart__content-item">
            <div class="cart__content-title">${elem.title}</div>
            <div class="cart__content-wrapper">
              <div class="cart__content-block">
                <div class="cart__content-img">
                  <img src="${elem.img}" alt="">
                </div>
              </div>
              <div class="cart__content-block">
                <div class="cart__content-price">${elem.productPrice}</div>
                <div class="cart__content-number product__quantity">
                  <div class="product__quantity-minus">-</div>
                  <div class="product__quantity-number" data-cart="productNumber">${elem.productNumber}</div>
                  <div class="product__quantity-plus">+</div>
                </div>
              </div>
            </div>
            <button class="cart__content-btn _btn">видалити</button>
          </div>
        `;
      });
  
      cartContent.innerHTML = cartItemsList;
    } else {
      cartContent.innerHTML = `
        <span class="cart__content-empty">
          Кошик порожній
        </span>
      `;
    }

  }


  function addBtnAction() {
    productItem.forEach(elem => {
      elem.addEventListener('click', (e) => {
        if (e.target && e.target.dataset.cart === 'addBtn') {
          addItem(elem);
          renderCartItems();


        }
      });
    });
  }

  addBtnAction();
  renderCartItems();













};