const sendEmail = () => {
  let form = document.querySelector('form.cta__input-wrapper');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputValue = form.querySelector('.cta__input').value;

    modal('modal__close', 'modal__content', 'modal', `
    <p style="text-align: center;">Надсилання ...</p>
    <br>
    <img src="img/icons/loading.gif" alt="" style=" display: block; margin: 0 auto;">
    `);

    Email.send({
      Host: "smtp.gmail.com",
      Username: "svityaz.centr@gmail.com",
      Password: "iykdxgvdcztlatek",
      To: `svityaz.centr@gmail.com`,
      From: "svityaz.centr@gmail.com",
      Subject: "ПІДПИСКА",
      Body: inputValue,
    }).then(() => {
      modal('modal__close', 'modal__content', 'modal', `
      <p style="text-align: center;">Успішно надіслано</p>
    `);
    }).catch(() => {
      modal('modal__close', 'modal__content', 'modal', `
        <p style="text-align: center;">Сталася помилка. Спробуйте пізніше</p>
        `);
    }).finally(() => {
      form.reset();
    });
  });
};