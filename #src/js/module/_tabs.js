const tabsInit = (a, b) => {
  let tabItem = document.querySelectorAll(a);
  let contentItem = document.querySelectorAll(b);

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