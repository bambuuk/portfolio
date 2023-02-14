function hamburger() {
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    menuOverlay = document.querySelector('.menu__overlay')

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = "hidden";
  });

  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = "";
  });
  
  menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = "";
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Escape' && menu.classList.contains('active')) {
      menu.classList.remove('active');
      document.body.style.overflow = "";
    }
  })
}

export default hamburger;