const changeDelivery = () => {
  let deliveryBlock = document.querySelector('[data-delivery="choice"]');
  const deliveryContent = deliveryBlock.querySelector('.order__delivery-var');
  const payContent = deliveryBlock.querySelector('.order__pay-features');

  deliveryBlock.addEventListener('click', (e) => {

    if (e.target && e.target.id === 'delivery1' && e.target.checked) {
      deliveryContent.innerHTML = `
      <select class="order__select" name="" data-delivery="adress">
      <option value="" selected>У відділення</option>
      <option value="">За адресою</option>
      </select>
      <div class="order__select-block">
      <input class="order__input" type="text" name="Місто" placeholder="Місто*" required>
      <input class="order__input" type="text" name="№ відділення" placeholder="№ відділення*" required>
      </div>
      `;

      showDeliveryAdressForm();
    }

    if (e.target && e.target.id === 'delivery2' && e.target.checked) {
      deliveryContent.innerHTML = `
      <div class="order__select-block">
      <input class="order__input" type="number" name="Індекс" placeholder="Індекс*" required>
      <input class="order__input" type="text" name="Місто" placeholder="Місто*" required>
      <input class="order__input" type="text" name="Вулиця" placeholder="Вулиця*" required>
      <input class="order__input" type="number" name="№ будинку" placeholder="№ будинку*" required>
      <input class="order__input" type="number" name="№ квартири" placeholder="№ квартири">
      </div>
      `;
    }

    if (e.target && e.target.id === 'pay1' && e.target.checked) {
      payContent.innerHTML = ``;
    }

    if (e.target && e.target.id === 'pay2' && e.target.checked) {
      payContent.innerHTML = `
      <div class="order__pay-features-wrapper">
        Відправлення накладеним платижем здійснюється при передоплаті за доставку
      </div>
      `;
    }

  });

  function showDeliveryAdressForm() {
    let deliveryAdress = document.querySelector('[data-delivery="adress"]');

    deliveryAdress.addEventListener('change', () => {
      if (deliveryAdress.selectedIndex === 1) {
        deliveryContent.innerHTML = `
        <select class="order__select" name="" data-delivery="adress">
        <option value="" >У відділення</option>
        <option value="" selected>За адресою</option>
        </select>
        <div class="order__select-block">
        <input class="order__input" type="text" name="Місто" placeholder="Місто*" required>
        <input class="order__input" type="text" name="Вулиця" placeholder="Вулиця*" required>
        <input class="order__input" type="number" name="№ будинку" placeholder="№ будинку*" required>
        <input class="order__input" type="number" name="№ квартири" placeholder="№ квартири">
        </div>
        `;

      } else {
        deliveryContent.innerHTML = `
        <select class="order__select" name="" data-delivery="adress">
        <option value="" selected>У відділення</option>
        <option value="">За адресою</option>
        </select>
        <div class="order__select-block">
        <input class="order__input" type="text" name="Місто" placeholder="Місто*" required>
        <input class="order__input" type="text" name="№ відділення" placeholder="№ відділення*" required>
        </div>
        `;
      }
      showDeliveryAdressForm();
    });
  }

  showDeliveryAdressForm();

};