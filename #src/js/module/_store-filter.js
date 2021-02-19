const storeFilter = (cartMain) => {
  const primaryProductArray = [];
  let productItem = document.querySelectorAll('[data-cart="productItem"]');
  let filterBtnBlock = document.querySelector('.main__block-inner');
  let newArray = primaryProductArray;
  let rightRangeInput = document.querySelector('.store__aside-input-right');
  let leftRangeInput = document.querySelector('.store__aside-input-left');

  let filterItemsCloth = [];
  let filterItemsSize = [];
  let filterItemsAvalible = [];

  function showFilter() {
    let filterBtn = document.querySelector('[data-cart="filterBtn"]');

    filterBtn.addEventListener('click', () => {
      filterBtn.nextElementSibling.classList.toggle('main__block-inner--show');
    });
  }

  function initProdCardList() {
    productItem.forEach(elem => {
      let item = {};

      item.cartClass = elem.className;
      item.cartLink = elem.querySelector('.card__img-link').pathname;
      item.imgPath = elem.querySelector('[data-cart="img"]').src;
      item.title = elem.querySelector('[data-cart="productTitle"]').innerText;
      item.cloth = (elem.querySelector('[data-cart="productСloth"]').innerText).toLowerCase();
      item.size = elem.querySelector('[data-cart="productSize"]').innerText;
      item.price = (elem.querySelector('[data-cart="productPrice"]').innerText).replace(/\D/g, '');
      item.avalible = elem.querySelector('.card__availability').className;
      item.filterArray = [(item.cloth.toLowerCase()), (item.size).toLowerCase(), (item.price.toLowerCase()), (item.avalible.toLowerCase())];

      primaryProductArray.push(item);
    });
  }

  function buildPriceFilteredArray(a, b, c) {
    newArray = a.filter(elem => {
      let check = false;

      if (+b <= +elem.price & +elem.price <= +c) {
        check = true;
      }

      if (check) {
        return true;
      }
    });
  }

  function initPriceRange() {
    let inputPriceMaxValue = document.querySelector('.store__aside-input-right');
    let inputPriceMinValue = document.querySelector('.store__aside-input-left');
    let minPrice = 9999999;
    let maxPrice = 0;

    primaryProductArray.forEach(elem => {

      if (+elem.price > maxPrice) {
        maxPrice = elem.price;
      }

      if (+elem.price < minPrice) {
        minPrice = elem.price;
      }
    });

    inputPriceMaxValue.max = maxPrice;
    inputPriceMaxValue.min = minPrice;
    inputPriceMinValue.max = maxPrice;
    inputPriceMinValue.min = minPrice;

    inputPriceMaxValue.value = maxPrice;
    inputPriceMinValue.value = minPrice;
  }

  function buildFilteredArray(a, b) {
    if (b.length > 0) {
      newArray = a.filter(elem => {
        let check = false;

        b.forEach(item => {
          elem.filterArray.forEach(filter => {
            if (item === filter) {
              check = true;
            }
          });
        });

        if (check) {
          return true;
        }
      });
    }
  }

  function delFilterItem(a, b) {
    a.forEach((elem, i) => {
      if (elem === (b).toLowerCase()) {
        a.splice(i, 1);
      }
    });
  } // a - curent array , b - comparative element

  function bildNewCardList(array) {
    let cardListBlock = document.querySelector('.main__products');
    let cardList = '';

    array.forEach(elem => {
      cardList += `
      <div class="${elem.cartClass}" data-cart="productItem">
      <div class="card__inner">
        <div class="card__img-block">
          <a class="card__img-link" href="${elem.cartLink}" data-cart="linkPath">
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

    if (array.length > 0) {
      cardListBlock.innerHTML = cardList;

    } else {
      cardListBlock.innerHTML = `
    <span class="cart__content-empty">
      Товарів з такими параметрами не знайдено :(
    </span>
    `;

    }
  }

  function checkFilterItems() {
    let filterCheckbox = document.querySelectorAll('.main__checkbox');

    filterCheckbox.forEach(elem => {
      elem.spellcheck = false;
    });
  }

  filterBtnBlock.addEventListener('click', (e) => {
    let filterElementText = e.target.nextElementSibling;
    if (e.target && e.target.checked) {
      switch (e.target && e.target.dataset.filter) {
        case 'cloth':
          filterItemsCloth.push((filterElementText.innerText).toLowerCase());
          break;

        case 'size':
          filterItemsSize.push((filterElementText.innerText).toLowerCase());
          break;

        case 'avalible':
          filterItemsAvalible.push(("card__availability avalible").toLowerCase());
          break;
      }
    } else {
      switch (e.target && e.target.dataset.filter) {
        case 'cloth':
          delFilterItem(filterItemsCloth, filterElementText.innerText);
          break;

        case 'size':
          delFilterItem(filterItemsSize, filterElementText.innerText);
          break;

        case 'avalible':
          delFilterItem(filterItemsAvalible, "card__availability avalible");
          break;
      }
    }

    newArray = primaryProductArray;

    buildPriceFilteredArray(newArray, leftRangeInput.value, rightRangeInput.value);
    buildFilteredArray(newArray, filterItemsCloth);
    buildFilteredArray(newArray, filterItemsSize);
    buildFilteredArray(newArray, filterItemsAvalible);
    bildNewCardList(newArray);

    cart(cartMain);
  });

  checkFilterItems();
  initProdCardList();
  initPriceRange();
  showFilter();
};