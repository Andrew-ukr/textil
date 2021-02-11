const storeFilter = () => {
  const primaryProductArray = [];
  let productItem = document.querySelectorAll('[data-cart="productItem"]');
  let filterBtnBlock = document.querySelector('.main__block-inner');

  let filterItemsPrice = [];
  let filterItemsCloth = [];
  let filterItemsSize = [];
  let filterItemsAvalible = [];

  productItem.forEach(elem => {
    let item = {};

    item.cartClass = elem.className;
    item.cartLink = elem.querySelector('.card__img-link').pathname;
    item.imgPath = elem.querySelector('[data-cart="img"]').src;
    item.title = elem.querySelector('[data-cart="productTitle"]').innerText;
    item.cloth = elem.querySelector('[data-cart="productСloth"]').innerText;
    item.size = elem.querySelector('[data-cart="productSize"]').innerText;
    item.price = (elem.querySelector('[data-cart="productPrice"]').innerText).replace(/\D/g, '');
    item.avalible = elem.querySelector('.card__availability').className;
    item.filterArray = [(item.cloth.toLowerCase()), (item.size).toLowerCase(), (item.price.toLowerCase()), (item.avalible.toLowerCase())];

    primaryProductArray.push(item);
  });


  filterBtnBlock.addEventListener('click', (e) => {
    if (e.target.checked) {
      switch (e.target && e.target.dataset.filter) {
        case 'cloth':
          console.log(1);
  
  
          break;
  
      }
    } else {
      
    }
    


  });





















  function bildNewCardList(array) {
    let cardListBlock = document.querySelector('.main__products');
    let cardList = '';

    array.forEach(elem => {
      cardList += `
      <div class="${elem.cartClass}" data-cart="productItem">
      <div class="card__inner">
        <div class="card__img-block">
          <a class="card__img-link" href="${elem.cartLink}">
            <img class="card__img" src="${elem.imgPath}" alt="" data-cart="img">
          </a>
        </div>
        <div class="card__content">
          <a href="product.html" class="card__title _card-title" data-cart="productTitle">КОМПЛЕКТ ПОСТІЛЬНОЇ
            БІЛИЗНИ, <span class="product__title-size"  data-cart="productСloth">${elem.cloth}</span> (<span class="product__title-size"  data-cart="productSize">${elem.size}</span>)</a>
          <div class="card__price" data-cart="productPrice">${elem.price} <span>грн</span></div>
          <div class="${elem.avalible}">В наявності</div>

          <!-- hidden elements -->

          <div class="card__hidden" data-cart="productNumber">1</div>
          <select class="card__hidden" name="select" id="select" data-cart="productSizeNavolochka">
            <option value="70*70" selected>70 * 70</option>
            <option value="50*70">50 * 70</option>
          </select>

          <!-- hidden elements -->

        </div>
        <div class="card__btn-wrapper">
          <button class="card__btn _btn" data-cart="addBtn">
            До кошика
          </button>
        </div>
      </div>
    </div>
      `;
    });

    cardListBlock.innerHTML = cardList;
  }

};