import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

// import Swiper JS
import Swiper, { Pagination } from 'swiper';
// import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

Swiper.use([Pagination]);

const heroSwiper = new Swiper('.hero__slider', {
  speed: 1000,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var coursesSwiper = new Swiper('.programs__slider', {
  slidesPerView: 4,
  spaceBetween: 35,
  initialSlide: 2,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
