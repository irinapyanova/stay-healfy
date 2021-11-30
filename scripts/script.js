const burgerBtn = document.querySelector('.burger-btn');
const mainNav = document.querySelector('.main-nav');
const exit = document.querySelector('.exit');

burgerBtn.addEventListener('click', () => {
  burgerBtn.style.opacity = '0';
  mainNav.classList.add('main-nav-open');
});

exit.addEventListener('click', () => {
  mainNav.classList.remove('main-nav-open');
  burgerBtn.style.opacity = '1';
});



new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-next-button',
    prevEl: '.swiper-prev-button'
  },

  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      updateOnWindowResize: true,
    },
    768: {
      slidesPerView: 2,
      allowTouchMove: true,
    },
    1280: {
      slidesPerView: 3,
      allowTouchMove: false,
    }
  }
});


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContents => tabContents.classList.remove('active'));

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');
    target.classList.add('active');
  });
});
