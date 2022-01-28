const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.title__percent');
const lines = document.querySelectorAll('.skills__scales__line-usage');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})