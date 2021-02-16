const shortMassage = (window, windowContent = null, windowContentText = null, windowColor = null, timeOut = null) => {
  let massageWindow = document.querySelector(`.${window}`);
  let windowContentBlock = massageWindow.querySelector(`.${windowContent}`);

  massageWindow.classList.add('active');
  
  windowContentBlock.style.backgroundColor = windowColor;
  windowContentBlock.innerHTML = windowContentText;

  setTimeout(() => {
    massageWindow.classList.remove('active');
  },(timeOut*1000));

};