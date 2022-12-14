const form = document.querySelector('.header__form');
const paginationEl = document.querySelector('#pagination');
const gallery = document.querySelector('.gallery__list');
const galleryListEl = document.querySelector('.gallery__item');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const modalWatchBtn = document.querySelector('.modal__watch-btn');
const modalQueueBtn = document.querySelector('.modal__queueBtn');
const footerTeamLink = document.querySelector('.footer__link');
const myLibWatchBtn = document.querySelector('.header__watch-btn');
const myLibQueueBtn = document.querySelector('.header__queue-btn');
const btnToTop = document.querySelector('.back-to-top');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalRenderBox = document.querySelector('.modal__render-box');
const jsLibrary = document.querySelector('.js-library');
const storageChoice = document.querySelector('.js-choice-storage');
const watchedChoice = document.querySelector('#js-WatchedButton');
const queueChoice = document.querySelector('#js-QueueButton');
const emptyGallery = document.querySelector('.unfilled-list');
const ref = {
  spinner: document.querySelector('#spinner'),
};

export {
  ref,
  form,
  gallery,
  paginationEl,
  galleryListEl,
  modalCloseBtn,
  modalWatchBtn,
  modalQueueBtn,
  footerTeamLink,
  spinner,
  myLibWatchBtn,
  myLibQueueBtn,
  btnToTop,
  backdrop,
  modal,
  modalRenderBox,
  jsLibrary,
  storageChoice,
  watchedChoice,
  queueChoice,
  emptyGallery,
};
