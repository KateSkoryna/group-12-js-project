import { checkWatchBtn, checkQueueBtn } from './local-storage';
import { fetchSearchFilmById } from './fetch-films';
import { backdrop, modalCloseBtn } from './refs';
import { renderModalCard } from './renderModalCard';
import { renderTrandFilms } from './render-cards';
import { gnrArr } from './fetch-films';
import { onEscPress } from './renderModalCard';
import { Spinner } from 'spin.js';
import { opts } from './opts-spinner';
import { Notify } from 'notiflix';
import { QUEUESTORAGE_KEY, WATCHSTORAGE_KEY } from './data/keys';

import {
  gallery,
  modalCloseBtn,
  myLibWatchBtn,
  myLibQueueBtn,
  backdrop,
  modal,
  libPage,
} from './refs';

window.addEventListener('DOMContentLoaded', onClickWachedLib);
myLibWatchBtn.addEventListener('click', onClickWachedLib);
myLibQueueBtn.addEventListener('click', onClickQueueLib);

function onClickWachedLib(e) {
  gallery.innerHTML = '';
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];

  if (arr.length === 0) {
    // Что-то тут должно быть
  } else {
    arr.map(i => {
      const number = parseInt(i);
      return fetchSearchFilmById(number).then(renderWachLib);
    });
  }
}

function onClickQueueLib(e) {
  gallery.innerHTML = '';
  let arr = localStorage.getItem(QUEUESTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];

  if (arr.length === 0) {
  } else {
    arr.map(i => {
      const number = parseInt(i);
      return fetchSearchFilmById(number).then(renderWachLib);
    });
  }
}

function renderWachLib(data) {
  const { poster_path, title, id, genres, release_date, vote_average } = data;
  // const gnrArrCycle = gnrArr.flatMap(i => i);
  // const idArr = gnrArrCycle.map(i => i);

  // console.log(data.id)
  // const res = idArr.filter(i => {
  //   return genre_ids.includes(i.id);
  // });
  // const genreNames = res.map(i => i.name);
  // const genreNamesSlice = [];
  // if (genreNames.length >= 2) {
  //   genreNamesSlice.push(`${genreNames.slice(0, 2) + ','}`);
  // }
  // if (genreNames.length === 1) {
  //   genreNamesSlice.push(`${genreNames.slice(0, 1) + ','}`);
  // }
  const year = parseInt(release_date);
  const markup = `<li class="gallery__item" data-id=${id}>
    <div class="gallery__wrapper" data-id=${id}>
    <span class="gallery__vote" data-id=${id}>${
    Math.round(vote_average * 10) / 10
  }</span>
        <img
            class="gallery__img"
            src="https://www.themoviedb.org/t/p/w500${poster_path}"
            alt="${title}"
            loading="lazy"
            data-id=${id}
            >
    </div>
    <div class="gallery__thumb" data-id=${id}>
        <h3 class="gallery__name" data-id=${id}>${title}</h3>
        <p class="gallery__genres" data-id=${id}>${genres} Other</p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
</li>`;

  gallery.insertAdjacentHTML('beforeend', markup);
  gallery.addEventListener('click', e => openModal(e, data));
}

function openModal(e, data) {
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);

  const value = parseInt(e.target.dataset.id);
  if (!value) {
    return;
  }
  renderModalCard(data);
}
