const tabsInit = () => {
  let tabItem = document.querySelectorAll('.tabs__header-item');
  let contentItem = document.querySelectorAll('.tabs__content-item');

  tabItem.forEach((elem, i) => {
    elem.addEventListener('click', () => {
      tabItem.forEach(elem => {
        elem.classList.remove('active');
      });

      contentItem.forEach(elem => {
        elem.classList.remove('active');
      });

      elem.classList.add('active');
      contentItem[i].classList.add('active');
    });



  });

};