

import './inputmask.min.js';
import AnimateHeaders from './animate.js';
import modal from './modal.js';
import tabs from './tabs.js';
import showCards from './render-cards.js';
import scrolling from './scrolling.js';
import accordion from './accordion.js';
import showBurger from './showBurger.js';
import forms from './form.js';
import customSelect from './select.js';
import phoneMask from "./phone-mask.js";
import showSlide from "./main-slider.js";

  document.addEventListener("DOMContentLoaded", () => {
  showBurger();

  AnimateHeaders();
  modal('.order-btn', '.overlay', '.popup__close');
  tabs('.menu-tabs','.tabs-btn', '.menu-cards-wrap', 'active');
  tabs('.delivery-card-header', '.delivery-card-btn', '.delivery-card-content', 'active');
  showSlide('.slide-image__content','.slide-image__content .slide-header','', '.next', );
  showCards();
  scrolling();
  accordion();
  forms();
  phoneMask();
  customSelect();

// localStorage.clear();
});
