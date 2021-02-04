const selectProdPrice = () => {
  const prodSelector = document.querySelector('select.product__select');
  const prodSelectName = document.querySelectorAll('.product__select-name');

  prodSelector.addEventListener('input', () => {
    document.querySelector('.product__price').innerHTML = `${prodSelector.value} <span>грн / комплект</span>`;
    document.querySelector('.product__title-size').innerText = `${prodSelectName[prodSelector.selectedIndex].innerText}`;
  });

}