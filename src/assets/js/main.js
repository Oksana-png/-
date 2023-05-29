// menu burger

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

// плавный скролл
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

// tabs
const openTab = (index, buttons) => {
  const contentTabs = document.querySelectorAll('.tabs__content');

  contentTabs.forEach((item, i) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
    if (i == index) {
      item.classList.add('active');
    }
  });

  buttons.forEach((item, i) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
    if (i == index) {
      item.classList.add('active');
    }
  });
}

const tabs = () => {
  if (document.querySelector('.tabs')) {
    const buttonTabs = document.querySelectorAll('.tabs__btn');

    buttonTabs.forEach((item, i) => {
      if (item.classList.contains('active')) {
        openTab(i, buttonTabs);
      }
    });

    buttonTabs.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        openTab(i, buttonTabs);
      });
    });
  }
}

const modalOpen = () => {
  const modal = document.querySelector('.modal__form');
  const modalBody = modal.querySelector('.modal__body');

  modal.classList.add('active');
  modalBody.classList.add('active');
  document.querySelector('html').style.overflowY = 'hidden';

  modal.addEventListener('click', (e) => {
    if (e.target.closest(".modal__body")) {
      return;
    }
    modal.classList.remove('active');
    modalBody.classList.remove('active');
    document.querySelector('html').style.overflowY = 'scroll';
  });
}

const modal = () => {
  const buttonOpenForm = document.querySelectorAll('.btn-open-form');

  buttonOpenForm.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOpen();
    });
  });

}



tabs();
modal();