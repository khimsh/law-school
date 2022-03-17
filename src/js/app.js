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

  console.log(dropdownClicked);

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
