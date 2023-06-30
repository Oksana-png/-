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


const splitRange = (min, max) => {
  const range = max - min;
  const sectionLenght = range / 4;
  const result = [];
  for (let i = 0; i < 5; i++) {
    if (i == 0) {
      result.push(min);
    } else if (i == 4) {
      result.push(max);
    } else {
      const res = sectionLenght * i;
      result.push(res.toString());
    }
  }
  return result;
}

const addRange = (e) => {
  e.preventDefault();
  const range = document.querySelector('.quiz-range__item');
  document.querySelector('.btn-quiz-add').style.display = "none";

  const elem = range.cloneNode(true);
  const newInput = elem.querySelector('input');
  newInput.name = 'square2';
  newInput.addEventListener('input', () => {
    document.querySelectorAll('.quiz-range__value')[1].textContent = newInput.value;
    let value = newInput.value * 100 / 1000;
    newInput.style.setProperty('--progress2', `${value}%`);
  });

  document.querySelector('.quiz-range').append(elem);
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
    } else if (indexSlideActive == 3) {
      const input = slides[indexSlideActive].querySelector('input[type=range]');
      const rangeDatalist = document.querySelector('.quiz-range__datalist');
      const arrSplit = splitRange(input.min, input.max);
      const btnAdd = document.querySelector('.btn-quiz-add');
      btnAdd.addEventListener('click', addRange);

      arrSplit.forEach(item => {
        const elem = document.createElement('span');
        elem.textContent = item;
        rangeDatalist.append(elem);
      });

      input.addEventListener('input', () => {
        document.querySelector('.quiz-range__value').textContent = input.value;
        let value = input.value * 100 / 1000;
        input.style.setProperty('--progress', `${value}%`);
      });
      btnNext.disabled = false;


    } else if (indexSlideActive == 4) {
      isChecked = false;
      let agree = false;
      let data = false;
      btnPass.style.display = 'none';
      btnNext.style.display = 'none';
      btnFinish.style.display = 'flex';
      btnFinish.disabled = true;

      slides[indexSlideActive].querySelectorAll('input[type=checkbox][name=contact]').forEach((input, i, inputs) => {
        input.addEventListener('change', () => {
          isChecked = false;
          for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
              isChecked = true;
              break;
            }
          }
          submitForm();
        });
      });

      slides[indexSlideActive].querySelector('#agree-quiz').addEventListener('click', (e) => {
        if (e.target.disabled) {
          agree = false;
        } else {
          agree = true;
        }
        submitForm();
      });

      slides[indexSlideActive].querySelectorAll('.quiz-data > input').forEach((input, i, inputs) => {
        input.addEventListener('input', () => {
          data = true;
          for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value && data) {
              data = true;
            } else {
              data = false;
              break;
            }
          }
          submitForm();
        });
      });

      const submitForm = () => {
        if (isChecked && data && agree) {
          btnFinish.disabled = false;
        } else {
          btnFinish.disabled = true;
        }
      }
    }
  });
}

// выпадающее меню
const submenu = () => {
  const menu = document.querySelectorAll('.submenu');

  menu.forEach(item => {
    if (item.getBoundingClientRect().left + item.offsetWidth > window.innerWidth) {
      item.classList.add('submenu-left');
    }
  });
}

const maskPhone = () => {
  const element = document.querySelectorAll('.mask-phone');
  const maskOptions = {
      mask: '+7 (000) 000-00-00',
      lazy: false
  } 
  element.forEach(item => {
    let mask = new IMask(item, maskOptions);
  })
}

tabs();
modal();
quiz();
breadCrumbs();
submenu();
maskPhone();