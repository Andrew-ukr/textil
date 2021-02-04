const openSizeTable = (a, b) => {
  let btn = document.querySelector(a);
  let modalContent = document.querySelector(b);

  btn.addEventListener('click', () => {
    modal('modal__close', 'modal__content', 'modal','modal__block');

    modalContent.innerHtML = `
    <table class="modal__size-table">
    <tr class="modal__size-table-row">
      <th class="modal__size-table-col">Назва</th>
      <th class="modal__size-table-col">Підковдра </th>
      <th class="modal__size-table-col">Простирадло </th>
    </tr>
    <tr class="modal__size-table-row">
      <td class="modal__size-table-col">Півтораспальний </td>
      <td class="modal__size-table-col">150х215</td>
      <td class="modal__size-table-col">150х220</td>
    </tr>
    <tr class="modal__size-table-row">
      <td class="modal__size-table-col">Двоспальний </td>
      <td class="modal__size-table-col">180х215</td>
      <td class="modal__size-table-col">200х220</td>
    </tr>
    <tr class="modal__size-table-row">
      <td class="modal__size-table-col">Євро </td>
      <td class="modal__size-table-col">200х215</td>
      <td class="modal__size-table-col">240х220</td>
    </tr>
    <tr class="modal__size-table-row">
      <td class="modal__size-table-col">Сімейний </td>
      <td class="modal__size-table-col">150х215</td>
      <td class="modal__size-table-col">240х220</td>
    </tr>
  </table>
    `
  });
};