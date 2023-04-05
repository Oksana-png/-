
let swiperWork;
let swiperAdvantages;
let init = false;
function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 730px)");
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiperWork = new Swiper(".work-slider", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        centeredSlides: true,
        navigation: {
          nextEl: '.work-arrows-next',
          prevEl: '.work-arrows-prev',
        },
        spaceBetween: 30,
      });

      swiperAdvantages = new Swiper(".advantages-slider", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        loop: true,
        navigation: {
          nextEl: '.advantages-arrows-next',
          prevEl: '.advantages-arrows-prev',
        },
        spaceBetween: 30,
      });
    }
  } else {
    if (swiperWork) {
      swiperWork.destroy();
      swiperAdvantages.destroy();
    }
    init = false;
  }
}

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});


const swiperClients = new Swiper(".clients-slider", {
  slidesPerView: 1.5,
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  freeMode: true,
  navigation: {
    nextEl: '.clients-arrows-next',
    prevEl: '.clients-arrows-prev',
  },
  spaceBetween: 16,
  breakpoints: {
    580: {
      slidesPerView: 2,
    },
    730: {
      slidesPerView: 3.5,
    },
    790: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    }
  }
});

const swiperParthrers = new Swiper(".partners-slider", {
  direction: 'horizontal',
  slidesPerView: 1,
  centeredSlidesBounds: true,
  pagination: {
    el: ".partners-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.partners-arrows-next',
    prevEl: '.partners-arrows-prev',
  },
  spaceBetween: 24,
  breakpoints: {
    290: {
      slidesPerView: 2,
      centeredSlides: false,
      grid: {
        rows: 1,
      },
    },
    580: {
      slidesPerColumn: 1,
    },
    730: {
      slidesPerView: 3,
      centeredSlides: true,
      grid: {
        rows: 2,
      },
    },
  }
});

const swiperHero = new Swiper(".hero-slider", {
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".hero-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.hero-arrows-next',
    prevEl: '.hero-arrows-prev',
  },
});

const swiperPortfolio = new Swiper(".portfolio-slider", {
  direction: 'horizontal',
  spaceBetween: 48,
  slidesPerView: 1.95,
  loop: true,
  pagination: {
    el: ".portfolio-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.portfolio-arrows-next',
    prevEl: '.portfolio-arrows-prev',
  },
  breakpoints: {
    290: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    730: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 48,
    }
  }
});