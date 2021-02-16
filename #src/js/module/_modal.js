const modal = (a, b, c, d = null) => {
  let modalWindow = document.querySelector(`.${c}`);
  let btnClose = document.querySelector(`.${a}`);
  let modalContent = document.querySelector(`.${b}`);

  modalWindow.classList.add('active');
  document.body.classList.add('body--lock');
  document.body.style.paddingRight = `${modalMR()}px`;

  btnClose.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    document.body.classList.remove('body--lock');
    document.body.style.paddingRight = ``;
  });

  modalWindow.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains(c)) {
      modalWindow.classList.remove('active');
      document.body.classList.remove('body--lock');
      document.body.style.paddingRight = ``;
    }
  });

  modalContent.innerHTML = `${d}`;
};