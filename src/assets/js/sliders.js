
let swiperWork;
let swiperAdvantages;
let swiperWeWork;

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
        autoplay: {
          delay: 3000,
        },
        loop: true,
        navigation: {
          nextEl: '.advantages-arrows-next',
          prevEl: '.advantages-arrows-prev',
        },
        spaceBetween: 30,
      });
    }

    swiperWeWork = new Swiper(".we-work-slider", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        centeredSlides: true,
        navigation: {
          nextEl: '.we-work-arrows-next',
          prevEl: '.we-work-arrows-prev',
        },
        spaceBetween: 30,
      });
  } else {
    if (swiperWork) {
      swiperWork.destroy();
      swiperAdvantages.destroy();
      swiperWeWork.destroy();
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
  autoplay: {
    delay: 3000,
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

const swiperMoreProject = new Swiper(".more-project-slider", {
  slidesPerView: 1.5,
  centeredSlidesBounds: true,
  pagination: {
    el: ".more-project-pagination",
    dynamicBullets: true,
  },
  
  navigation: {
    nextEl: '.more-project-arrows-next',
    prevEl: '.more-project-arrows-prev',
  },
  spaceBetween: 30,
  breakpoints: {
    200: {
      spaceBetween: 30,
      slidesPerView: 1.5,
    },
    580: {
      slidesPerView: 2,
    },
    790: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 48,
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


const swiperCertificates = new Swiper(".certificates-slider", {
  direction: 'horizontal',
  spaceBetween: 48,
  slidesPerView: 1.95,
  pagination: {
    el: ".certificates-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.certificates-arrows-next',
    prevEl: '.certificates-arrows-prev',
  },
  breakpoints: {
    290: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    730: {
      slidesPerView: 2.4,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
    1201: {
      slidesPerView: 4,
    }
  }
});


var swiperThumbsGallery = new Swiper(".thumbs-gallery", {
  spaceBetween: 24,
  slidesPerView: 4,
  watchSlidesProgress: true,
  centeredSlidesBounds: true,
  breakpoints: {
    290: {
      spaceBetween: 16,
    },
    730: {
      spaceBetween: 30,
    },
    1200: {
      spaceBetween: 24,
    },
  }
});
var swiperMainGallery = new Swiper(".main-gallery", {
  spaceBetween: 24,
  pagination: {
    el: ".portfolio-item-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.portfolio-item-arrows-next',
    prevEl: '.portfolio-item-arrows-prev',
  },
  thumbs: {
    swiper: swiperThumbsGallery,
  },
});


const quizClients = new Swiper(".quiz-slider", {
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.clients-arrows-next',
    prevEl: '.clients-arrows-prev',
  },
});



const swiperServises = new Swiper(".servises-slider", {
  spaceBetween: 48,
  slidesPerView: 2,
  pagination: {
    el: ".servises-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.servises-arrows-next',
    prevEl: '.servises-arrows-prev',
  },
  breakpoints: {
    290: {
      slidesPerView: 1,
    },
    730: {
      slidesPerView: 2,
    },
  }
});