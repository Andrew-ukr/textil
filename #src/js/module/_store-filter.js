const storeFilter = () => {
  let primaryProductArray = [];
  let productItem = document.querySelectorAll('[data-cart="productItem"]');
  let filterBtn = document.querySelectorAll('.main__checkbox');
  let filterItems = [];

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

  console.log(primaryProductArray);

  filterBtn.forEach(elem => {
    elem.addEventListener('click', () => {
      if (elem.checked) {
        filterItems.push((elem.nextElementSibling.innerText).toLowerCase());
      } else {

      }
      console.log(filterItems);

    });
  });



};