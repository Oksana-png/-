const btnBurger = document.querySelector('.burger-menu__btn ');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('active');
});

const btnUp = document.querySelector('.btn-up');

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
});

window.addEventListener('scroll', () => {
  console.log(window);
  if (window.innerHeight < window.scrollY) {
    btnUp.style.display = 'flex';
  } else {
    btnUp.style.display = 'none';
  }
});