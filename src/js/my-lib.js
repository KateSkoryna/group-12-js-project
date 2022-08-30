import { fetchSearchFilmById } from './fetch-films';
import { gallery, watchedChoice, queueChoice, emptyGallery } from './refs';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './data/keys';
import { renderWachLib } from './render-cards';

import { bodyRef, toggleRef, footerDarktheme } from './themeChange';

let watched = JSON.parse(localStorage.getItem(WATCHSTORAGE_KEY)) || [];
let queue = JSON.parse(localStorage.getItem(QUEUESTORAGE_KEY)) || [];

if (watched.length === 0) {
  emptyGallery.classList.remove('disguise');
} else {
  gallery.innerHTML = '';
  tupWatchBtn();
}

watchedChoice.addEventListener('click', tupWatchBtn);
queueChoice.addEventListener('click', tupQueueButton);

function tupWatchBtn() {
  if (watched.length === 0) {
    gallery.innerHTML = '';
    emptyGallery.classList.remove('disguise');
    return;
  } else {
    gallery.innerHTML = '';
    watchedChoice.classList.add('chosen');
    queueChoice.classList.remove('chosen');
    emptyGallery.classList.add('disguise');
    renderFilmGallery(watched);
  }
}

function tupQueueButton() {
  if (queue.length === 0) {
    gallery.innerHTML = '';
    emptyGallery.classList.remove('disguise');
    return;
  } else {
    gallery.innerHTML = '';
    queueChoice.classList.add('chosen');
    watchedChoice.classList.remove('chosen');
    emptyGallery.classList.add('disguise');
    renderFilmGallery(queue);
  }
}

function renderFilmGallery(varietyList) {
  try {
    varietyList.map(f => {
      const id = parseInt(f);
      return fetchSearchFilmById(id).then(renderWachLib);
    });
  } catch (error) {
    console.log(error);
  }
}
