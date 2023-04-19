const btnBurger = document.querySelector('.burger-menu__btn ');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('active');
  const menu = document.querySelector(".header-nav");
  const overlay = document.querySelector('.overlay');
  console.log(overlay);

  if (btnBurger.classList.contains('active')) {
    menu.classList.add('header-nav-active');
    overlay.classList.add('active');
  } else {
    menu.classList.remove('header-nav-active');
    overlay.classList.remove('active');
  }

  overlay.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
    overlay.classList.remove('active');
    btnBurger.classList.remove('active');
  });
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
  if (window.innerHeight < window.scrollY) {
    btnUp.style.display = 'flex';
  } else {
    btnUp.style.display = 'none';
  }
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

window.addEventListener('click', (event) => {
  const target = event.target.closest('.open-mobile__menu');

  if (target) {
    const subMenu = event.target.closest('.has-submenu').querySelector('.submenu');
    subMenu.classList.toggle('show');
    event.target.closest('.has-submenu').classList.toggle('active');
  }
});