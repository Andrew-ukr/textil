const quantity = (a, b) => {
  let btns = document.querySelector(`.${a}`);
  let number = document.querySelector(`.${b}`);

  btns.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('product__quantity-plus')) {
      number.innerText = +number.innerText + 1;
    }
    if (e.target && e.target.classList.contains('product__quantity-minus')) {
      if (+number.innerText > 1) {
        number.innerText = +number.innerText - 1;
      }
    }
  });

};