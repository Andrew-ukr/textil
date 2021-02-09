const cart = () => {

  let cart = [];
  if (localStorage.getItem('cartItems')) {
    cart = JSON.parse(localStorage.getItem('cartItems'));
  }
  const productItem = document.querySelectorAll('[data-cart="productItem"]');
  const cartContent = document.querySelector('.cart__content');
  const cartItems = document.querySelector('.cart__total-row-span-number');
  const cartItemsSum = document.querySelector('.cart__total-row-span-sum');
  const topTotalSum = document.querySelector('[data-cart="topSum"]');
  let totalSum = 0;
  let totalquantity = 0;

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
    console.log('addItem');
  }

  function renderCartItems() {
    let cartItemsList = '';
    const cartImg = document.querySelector('[data-cart="cartImg"]')

    if (cart.length > 0) {
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
      showTotalSum();
      delСartItem();
      cartImg.setAttribute('src', 'img/icons/cart-blue.svg');
      cartImg.previousElementSibling.setAttribute('srcset', 'img/icons/cart-blue.svg');

    } else {
      cartContent.innerHTML = `
        <span class="cart__content-empty">
          Кошик порожній
        </span>
      `;
      cartItems.innerHTML = `0 шт.`;
      cartItemsSum.innerHTML = `0.00 грн.`;
      topTotalSum.innerHTML = ``;
      cartImg.setAttribute('src', 'img/icons/cart.svg');
      cartImg.previousElementSibling.setAttribute('srcset', 'img/icons/cart.svg');
    }
    console.log('rend');

  }

  function showTotalSum() {
    totalSum = 0;
    totalquantity = 0;

    cart.forEach(elem => {
      totalSum += parseInt(elem.productPrice.replace(/\D/, '')) * elem.productNumber;
      totalquantity += +elem.productNumber;
    });

    cartItems.innerHTML = `${totalquantity} шт.`;
    cartItemsSum.innerHTML = `${(totalSum).toFixed(2)} грн.`;
    topTotalSum.innerHTML = `${totalSum.toFixed(2)} грн.`;
    console.log('showTotalSum');

  }

  function addBtnAction() {
    productItem.forEach(elem => {
      elem.addEventListener('click', (e) => {
        if (e.target && e.target.dataset.cart === 'addBtn') {
          addItem(elem);
          renderCartItems();
          changeCartNumber();
        }
        console.log('addBtnAction');

      });
    });
  }

  function changeCartNumber() {
    let catrItems = document.querySelectorAll(`.cart__content-item`);

    catrItems.forEach((elem, i) => {
      elem.addEventListener('click', (e) => {
        let number = elem.querySelector('[data-cart="productNumber"]');
        if (e.target && e.target.classList.contains('product__quantity-plus')) {
          number.innerText = +number.innerText + 1;
        }
        if (e.target && e.target.classList.contains('product__quantity-minus')) {
          if (+number.innerText > 1) {
            number.innerText = +number.innerText - 1;
          }
        }
        cart[i].productNumber = number.innerText;
        localStorage.setItem('cartItems', (JSON.stringify(cart)));
        showTotalSum();
        console.log('changeCartNumber');

      });
    });
  }

  function delСartItem() {
    let catrItems = document.querySelectorAll(`.cart__content-item`);

    catrItems.forEach((elem, i) => {
      elem.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('cart__content-btn')) {
          cart.splice(i, 1);
          localStorage.setItem('cartItems', (JSON.stringify(cart)));
          renderCartItems();
          console.log('delСartItem');
        }
      });
    });
  }

  function init() {
    addBtnAction();
    renderCartItems();
    changeCartNumber();
    delСartItem();
  }

  init();








};