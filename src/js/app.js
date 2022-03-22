import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

// import Swiper JS
import Swiper, { Pagination } from 'swiper';
// import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

Swiper.use([Pagination]);

const heroSwiper = new Swiper('.hero__slider', {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var coursesSwiper = new Swiper('.programs__slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  initialSlide: 2,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    680: {
      slidesPerView: 1.4,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2.2,
    },
    // when window width is >= 1366px
    1366: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    // when window width is >= 1920px
    1920: {
      slidesPerView: 4,
    },
  },
});

// Nav dropdown
const dropdowns = document.querySelectorAll('[data-dropdown]');

window.addEventListener('click', (e) => {
  const dropdownClicked = e.target.parentNode;

  if (dropdownClicked.classList.contains('dropdown')) return;

  dropdowns.forEach((dropdown) => closeDropdown(dropdown));
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      closeDropdown(dropdown);
    } else {
      dropdowns.forEach((dropdown) => closeDropdown(dropdown));
      openDropdown(dropdown);
    }
  });
});

function openDropdown(dropdown) {
  dropdown.classList.add('active');
}
function closeDropdown(dropdown) {
  dropdown.classList.remove('active');
}

// modal
if (document.querySelector('[data-modal]')) {
  const modal = document.querySelector('[data-modal]');
  const backdrop = modal.querySelector('.modal__backdrop');
  const openModal = document.querySelector('[data-modal-open]');
  const closeModal = document.querySelector('[data-modal-close]');

  openModal.addEventListener('click', () => {
    modal.classList.add('active');
  });
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  backdrop.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}

// tabs
if (document.querySelectorAll('[data-tab-target]')) {
  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active');
      });
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
      target.classList.add('active');
    });
  });
}

// filters
if (document.querySelector('[data-filter]')) {
  const filters = document.querySelectorAll('[data-filter]');

  filters.forEach((filter) => {
    const filterBtn = filter.querySelector('.filter__trigger');
    const filterSelected = filter.querySelector('.filter__selected');

    filter.addEventListener('click', (e) => {
      if (e.target == filterBtn) {
        filter.classList.toggle('active');
      }

      if (e.target.classList.contains('filter__option')) {
        filterSelected.textContent = e.target.textContent;
        filter.classList.remove('active');
      }
    });
  });
}

// navigation
const nav = document.querySelector('.nav');
const openNav = document.querySelector('[ data-nav-open]');
const closeNav = document.querySelector('[ data-nav-close]');

openNav.addEventListener('click', () => {
  nav.classList.add('active');
});
closeNav.addEventListener('click', () => {
  nav.classList.remove('active');
});

// accordion
if (document.querySelector('[data-accordion]')) {
  const accordions = document.querySelectorAll('[data-accordion]');

  console.log(accordions);

  accordions.forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-trigger]');

    trigger.addEventListener('click', function () {
      const clickedItem = this.closest('[data-accordion]');

      accordions.forEach((item) => {
        if (clickedItem === item) {
          clickedItem.classList.toggle('active');
          return;
        }

        item.classList.remove('active');
      });
    });
  });
}
