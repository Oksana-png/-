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

// открытие, закрытие модалок
const modalClose = (selector) => {
  const modal = document.querySelector(selector);
  const modalBody = modal.querySelector('.modal__body');
  const inputs = document.querySelectorAll(".modal.active input");

  modal.classList.remove('active');
  modalBody.classList.remove('active');
  document.querySelector('html').style.overflowY = 'scroll';

  if (modal.querySelector('.default-checkbox')) {
    modal.querySelector('.default-checkbox').checked = false;
  }
  if (modal.querySelector("textarea")) {
    modal.querySelector("textarea").value = "";
  }

  inputs.forEach(input => {
    input.value = "";
  });
}

const modalOpen = (selector) => {
  const elem = selector;

  const modal = document.querySelector(elem);
  const modalBody = modal.querySelector('.modal__body');

  modal.classList.add('active');
  modalBody.classList.add('active');
  document.querySelector('html').style.overflowY = 'hidden';

  modal.addEventListener('click', (e) => {
    if (e.target.closest(".modal-close")) {
      modalClose(elem);
    }
    if (e.target.closest(".modal__body")) {
      return;
    }
    modalClose(elem);
  });
}

const modal = () => {
  const buttonOpenForm = document.querySelectorAll('.btn-open-form');

  buttonOpenForm.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOpen('.modal__form');
    });
  });

  const buttonOpenFormBell = document.querySelectorAll('.btn-open-form-bell');
  buttonOpenFormBell.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOpen('.modal__bell');
    });
  })

  const buttonOpenQuiz = document.querySelectorAll('.btn-open-form-quiz');
  buttonOpenQuiz.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOpen('.quiz');
    });
  });

}

// проверка хлебных крошек
const breadCrumbs = () => {
  if (!document.querySelector('.breadcrumbs')) {
    return;
  }
  const bread = document.querySelector('.breadcrumbs');

  if (document.querySelector('.hero')) {
    bread.classList.add('bread-hero');
  } else if (document.querySelector('.new-item-page')) {
    bread.querySelector('ol').classList.add('pad');
  }
}

// квиз
const quiz = () => {
  const quizClients = new Swiper(".quiz-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.quiz-button-next',
      prevEl: '.clients-arrows-prev',
    },
    allowTouchMove: false,
  });

  quizClients.on('slideChange', () => {
    const indexSlideActive = quizClients.activeIndex;
    const btnNext = document.querySelector('#quiz-next');
    const btnPass = document.querySelector('#quiz-pass');
    const btnFinish = document.querySelector('#quiz-finish');
    const slides = document.querySelectorAll('.swiper-slide__quiz');
    let isChecked = false;
    btnNext.disabled = !isChecked;

    if (indexSlideActive == 1) {
      btnNext.innerHTML = `Далее<svg class="icon icon-arrow"><use xlink:href="assets/image/svg/sprite.svg#next-arrow"></use></svg>`;
      btnPass.style.display = 'inline-block';
      btnNext.disabled = true;

      slides[indexSlideActive].querySelectorAll('input').forEach((input, i, inputs) => {
        input.addEventListener('change', (e) => {
          isChecked = false;
          for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
              isChecked = true;
              break;
            }
          }
          btnNext.disabled = !isChecked;
        });
      });
    } else if (indexSlideActive == 2) {
      slides[indexSlideActive].querySelectorAll('input').forEach((input, i, inputs) => {
        input.addEventListener('change', (e) => {
          isChecked = false;
          for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
              isChecked = true;
              break;
            }
          }
          btnNext.disabled = !isChecked;
        });
      });
    } else if (indexSlideActive == 4) {
      isChecked = false;
      btnPass.style.display = 'none';
      btnNext.style.display = 'none';
      btnFinish.style.display = 'flex';
      btnFinish.disabled = !isChecked;

      
    }
  });
}

// выпадающее меню
const submenu = () => {
  const menu = document.querySelectorAll('.submenu');

  menu.forEach(item => {
    console.log(window.innerWidth);
    if (item.getBoundingClientRect().left + item.offsetWidth > window.innerWidth) {
      item.classList.add('submenu-left');
    }
  });
}

tabs();
modal();
quiz();
breadCrumbs();
submenu();