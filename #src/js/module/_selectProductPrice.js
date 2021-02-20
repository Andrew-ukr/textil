const selectProdPrice = () => {
  const prodSelector = document.querySelector('select.product__select');
  const prodSelectName = document.querySelectorAll('.product__select-name');
  const pillowvSelector = document.querySelector('[data-cart="productSizeNavolochka"]');
  const pillowSelectName = document.querySelectorAll('.product__pillow-select-name');
  const sizeName = document.querySelector('[data-product="sizeName"]');
  const size1 = document.querySelector('[data-product="підковдра"]');
  const size2 = document.querySelector('[data-product="простирадло"]');
  const size3 = document.querySelector('[data-product="наволочка"]');

  prodSelector.addEventListener('input', () => {
    document.querySelector('.product__price').innerHTML = `${prodSelector.value} <span>грн / комплект</span>`;
    document.querySelector('.product__title-size').innerText = `${prodSelectName[prodSelector.selectedIndex].innerText}`;
    sizeName.innerText = `${prodSelectName[prodSelector.selectedIndex].innerText}`;

    switch (prodSelectName[prodSelector.selectedIndex].innerText) {
      case 'Півтораспальний':
        size1.innerText = `1 шт / 150 * 215 см`;
        size2.innerText = `1 шт / 150 * 220 см`;
        break;

      case 'Двоспальний':
        size1.innerText = `1 шт / 180 * 215 см`;
        size2.innerText = `1 шт / 200 * 220 см`;
        break;

      case 'Євро':
        size1.innerText = `1 шт / 200 * 215 см`;
        size2.innerText = `1 шт / 240 * 220 см`;
        break;

      case 'Сімейний':
        size1.innerText = `2 шт / 150 * 215 см`;
        size2.innerText = `1 шт / 240 * 220 см`;
        break;
    }
  });

  pillowvSelector.addEventListener('input', () => {
    size3.innerText = `${pillowSelectName[pillowvSelector.selectedIndex].innerText} см`;
  });
};