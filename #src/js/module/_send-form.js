const sendForm = (cart) => {
  let form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    function formBody() {
      let content = ``;
      let name = form.querySelector('.order__input[name="Імя"]').value;
      let surname = form.querySelector('.order__input[name="Прізвище"]').value;
      let fatherName = form.querySelector('.order__input[name="По батькові"]').value;
      let tel = form.querySelector('.order__input[name="Телефон"]').value;
      let email = form.querySelector('.order__input[name="E-mail"]').value;


      cart.forEach(elem => {
        content += `
          <tr style="border: 1px solid rgb(208, 208, 208);">
            <td style="text-align: center; padding: 10px;">
              <a href="${elem.link}">
                <img style="display: block; width: 100%; height: 100%; pointer-events: none;" src="${(elem.img)}" alt="">
              </a>
            </td>
            <td style="text-align: center; padding: 10px;">
              <a href="${elem.link}">${elem.title} / наволочка ${elem.productSizeNavolochka}</a>
            </td>
            <td style="text-align: center; padding: 10px;">
              ${elem.productNumber}
            </td>
            <td style="text-align: center; padding: 10px;">
              <p>${(elem.productPrice)} грн</p>
            </td>
            <td style="text-align: center; padding: 10px;">
              <p>${elem.productPrice * elem.productNumber} грн</p>
            </td>
            <td style="text-align: center; padding: 10px;">
            </td>
          </tr>
        `;
      });

      let letterBody = `
      <div>
        <table style="border-collapse: collapse;  width: 100%;  min-height: 100px;" >
          <thead style="background-color: #f3f3f3; border: 1px solid rgb(208, 208, 208);">
            <tr>
              <th style="padding: 10px; min-width: 100px;" >Фото</th>
              <th style="padding: 10px; min-width: 100px;" >Назва товару</th>
              <th style="padding: 10px; min-width: 100px;" >Кількість</th>
              <th style="padding: 10px; min-width: 100px;" >Ціна</th>
              <th style="padding: 10px; min-width: 100px;" >Всього</th>
              <th ></th>
            </tr>
          </thead>
          
          <tbody>
            ${content}
          </tbody>
      
        </table>
    
        <div style="margin-top: 20px; text-align: right; font-weight: 700;">
          <span>Всього:</span>
          <span >0</span>
          <span>грн</span>
        </div>
    
        <div style="background-color: #f3f3f3; border: 1px solid rgb(208, 208, 208);display: flex; align-formBody: center; border: 1px solid rgb(208, 208, 208);  padding: 10px;  font-weight: 600;  margin-top: 20px;" >
          <span>Контактна інформація</span>
        </div>

        <ul>
          <li style="line-height: 1.5;">Імя: ${name} </li>
          <li style="line-height: 1.5;">Прізвище: ${surname} </li>
          <li style="line-height: 1.5;">По батькові: ${fatherName} </li>
          <li style="line-height: 1.5;">Телефон: ${tel} </li>
          <li style="line-height: 1.5;">E-mail: ${email} </li>
        </ul>
    
        <div style="background-color: #f3f3f3; border: 1px solid rgb(208, 208, 208);display: flex; align-formBody: center; border: 1px solid rgb(208, 208, 208);  padding: 10px;  font-weight: 600;  margin-top: 20px;" >
          <span>Спосіб доставки</span>
        </div>

        <ul>
          <li style="line-height: 1.5;">№</li>
          <li style="line-height: 1.5;">№</li>
          <li style="line-height: 1.5;">№</li>
          <li style="line-height: 1.5;">№</li>
          <li style="line-height: 1.5;">№</li>
          <li style="line-height: 1.5;">№</li>
        </ul>
    
        <div style="background-color: #f3f3f3; border: 1px solid rgb(208, 208, 208);display: flex; align-formBody: center; border: 1px solid rgb(208, 208, 208);  padding: 10px;  font-weight: 600;  margin-top: 20px;" >
          <span>Спосіб оплати</span>
        </div>

        <ul>
          <li style="line-height: 1.5;">№</li>
        </ul>
      </div>
    `;

      return letterBody;
    }

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
      Subject: "ЗАМОВЛЕННЯ",
      Body: formBody(),
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
  });
};