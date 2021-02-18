const sendForm = () => {
  let sendBtn = document.querySelector('.order__btn');
  let form = document.querySelector('form');

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (cart.length > 0) {
      let letterBody = `

      `;

      modal('modal__close', 'modal__content', 'modal', `
      <p style="text-align: center;">Надсилання ...</p>
      <br>
      <img src="img/icons/loading.gif" alt="" style=" display: block; margin: 0 auto;">
      `);

      Email.send({
        Host: "smtp.gmail.com",
        Username: "svityaz.centr@gmail.com",
        Password: "hgwwzjwldbtjunsu",
        To: `svityaz.centr@gmail.com`,
        From: "svityaz.centr@gmail.com",
        Subject: "Зворотний звязок. Питання від відвідувача",
        Body: letterBody,
      }).then(() => {
        modal('modal__close', 'modal__content', 'modal', `
        <p style="text-align: center;">Замовлення успішно надіслано</p>
      `);
      }).catch(() => {
        modal('modal__close', 'modal__content', 'modal', `
          <p style="text-align: center;">Сталася помилка. Спробуйте пізніше</p>
          `);
      }).finally(() => {
        form.reset();
      });
    } else {
      modal('modal__close', 'modal__content', 'modal', `
      <p style="text-align: center;">Корзина порожня</p>
      `);
    }

  });
};