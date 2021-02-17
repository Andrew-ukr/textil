const cart = () => {

  let cart = [];
  if (localStorage.getItem('cartItems')) {
    cart = JSON.parse(localStorage.getItem('cartItems'));
  }
  let productItem = document.querySelectorAll('[data-cart="productItem"]');
  const cartContent = document.querySelector('.cart__content');
  const cartTableContent = document.querySelector('.order__table-body');
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
    item.productPrice = (elem.querySelector('[data-cart="productPrice"]').innerText).replace(/\D/g, '');
    item.img = elem.querySelector('[data-cart="img"]').getAttribute('src');

    // item.link = elem.querySelector('[data-cart="linkPath"]').pathname;

    cart.unshift(item);
    localStorage.setItem('cartItems', (JSON.stringify(cart)));
  }

  function checkingRepetition(elem) {
    let title = elem.querySelector('[data-cart="productTitle"]').innerText;
    let navolochka = elem.querySelector('[data-cart="productSizeNavolochka"]').value;

    let newCart = cart.some(item => {
      return (item.title === title && item.productSizeNavolochka === navolochka);
    });

    return newCart;
  }

  function checkImgPath(elem) {
    let newPath = elem;
    if (newPath.includes('mid')) {
      newPath = newPath.replace('-mid', '-small');
    }
    return newPath;
  }

  function renderCartItems() {
    let cartItemsList = '';
    let cartItemsTableList = '';
    const cartImg = document.querySelector('[data-cart="cartImg"]');

    if (cart.length > 0) {
      cart.forEach(elem => {
        cartItemsList += `
          <div class="cart__content-item">
            <div class="cart__content-title">${elem.title} / ${elem.productSizeNavolochka}</div>
            <div class="cart__content-wrapper">
              <div class="cart__content-block">
                <div class="cart__content-img">
                  <img src="${checkImgPath(elem.img)}" alt="">
                </div>
              </div>
              <div class="cart__content-block">
                <div class="cart__content-price">${(elem.productPrice)} грн / комплект</div>
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

        cartItemsTableList += `
        <tr class="order__item">
        <td class="order__table-photo">
          <a href="${elem.link}">
            <img src="${checkImgPath(elem.img)}" alt="">
          </a>
        </td>
        <td class="order__table-name">
          <a href="${elem.link}">${elem.title} / наволочка ${elem.productSizeNavolochka}</a>
        </td>
        <td class="order__table-qty">
          <div class="cart__content-number product__quantity">
            <div class="product__quantity-minus">-</div>
            <div class="product__quantity-number" data-cart="productNumber">${elem.productNumber}</div>
            <div class="product__quantity-plus">+</div>
          </div>
        </td>
        <td class="order__table-price">
          <p>${(elem.productPrice)} грн</p>
        </td>
        <td class="order__table-sum">
          <p>${elem.productPrice * elem.productNumber} грн</p>
        </td>
        <td class="order__table-del">
          <button class="order__btn-del">
            <img src="img/icons/close.svg" alt="">
          </button>
        </td>

      </tr>
        `;
      });

      cartContent.innerHTML = cartItemsList;
      if (cartTableContent) {
        cartTableContent.innerHTML = cartItemsTableList;
      }
      showTotalSum();
      delСartItem();
      changeCartNumber();
      cartImg.setAttribute('src', 'img/icons/cart-blue.svg');
      cartImg.previousElementSibling.setAttribute('srcset', 'img/icons/cart-blue.svg');

    } else {
      cartContent.innerHTML = `
        <span class="cart__content-empty">
          Кошик порожній
        </span>
      `;
      if (cartTableContent) {
        cartTableContent.innerHTML = `
        <span class="cart__content-empty">
          Кошик порожній
        </span>
      `;
      }
      cartItems.innerHTML = `0 шт.`;
      cartItemsSum.innerHTML = `0.00 грн.`;
      topTotalSum.innerHTML = ``;
      cartImg.setAttribute('src', 'img/icons/cart.svg');
      cartImg.previousElementSibling.setAttribute('srcset', 'img/icons/cart.svg');
    }
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
    topTotalSum.innerHTML = `${totalSum.toFixed(2)} грн.`;
    try {
    document.querySelector('[data-cart="totalSum"]').innerHTML = totalSum.toFixed(2);
      
    } catch (error) {}
  }

  function addBtnAction() {
    productItem.forEach(elem => {
      elem.addEventListener('click', (e) => {
        if (e.target && e.target.dataset.cart === 'addBtn') {

          if (!checkingRepetition(elem)) {
            addItem(elem);
            renderCartItems();
            shortMassage("modal-massage", "modal-massage__content", `Товар додано до корзину`, `#badc58`, 2);
          } else {
            shortMassage("modal-massage", "modal-massage__content", `Даний товар уже в корзині`, `#ffbe76`, 2);
          }
        }
      });
    });
  }

  function clearCart() {
    let clearBtn = document.querySelector(`[data-cart="clear"]`);

    clearBtn.addEventListener('click', () => {
      cart = [];
      localStorage.setItem('cartItems', (JSON.stringify(cart)));
      renderCartItems();
    });
  }

  function changeCartNumber() {
    let catrItems = document.querySelectorAll(`.cart__content-item`);
    let catrTableItems = document.querySelectorAll(`.order__item`);

    catrItems.forEach((elem, i) => {
      elem.addEventListener('click', (e) => {
        let number = elem.querySelector('[data-cart="productNumber"]');
        if (e.target && e.target.classList.contains('product__quantity-plus')) {
          number.innerText = +number.innerText + 1;
          cart[i].productNumber = number.innerText;
          localStorage.setItem('cartItems', (JSON.stringify(cart)));
          renderCartItems();
        }
        if (e.target && e.target.classList.contains('product__quantity-minus')) {
          if (+number.innerText > 1) {
            number.innerText = +number.innerText - 1;
            cart[i].productNumber = number.innerText;
            localStorage.setItem('cartItems', (JSON.stringify(cart)));
            renderCartItems();
          }
        }
      });
    });


    catrTableItems.forEach((elem, i) => {
      elem.addEventListener('click', (e) => {
        let number = elem.querySelector('[data-cart="productNumber"]');
        if (e.target && e.target.classList.contains('product__quantity-plus')) {
          number.innerText = +number.innerText + 1;
          cart[i].productNumber = number.innerText;
          localStorage.setItem('cartItems', (JSON.stringify(cart)));
          renderCartItems();
        }
        if (e.target && e.target.classList.contains('product__quantity-minus')) {
          if (+number.innerText > 1) {
            number.innerText = +number.innerText - 1;
            cart[i].productNumber = number.innerText;
            localStorage.setItem('cartItems', (JSON.stringify(cart)));
            renderCartItems();
          }
        }
      });
    });
  }

  function delСartItem() {
    let catrItems = document.querySelectorAll(`.cart__content-item`);
    let catrTableItems = document.querySelectorAll(`.order__item`);

    catrItems.forEach((elem, i) => {
      elem.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('cart__content-btn')) {
          cart.splice(i, 1);
          localStorage.setItem('cartItems', (JSON.stringify(cart)));
          renderCartItems();
        }
      });
    });

    catrTableItems.forEach((elem, i) => {
      elem.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('order__btn-del')) {
          cart.splice(i, 1);
          localStorage.setItem('cartItems', (JSON.stringify(cart)));
          renderCartItems();
        }
      });
    });
  }

  function init() {
    addBtnAction();
    renderCartItems();
    clearCart();
  }

  init();

};