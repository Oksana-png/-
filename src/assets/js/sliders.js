
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
        loop: true,
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