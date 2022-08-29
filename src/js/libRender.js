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
import { WATCHSTORAGE_KEY } from './data/keys';

import {
  ref,
  form,
  gallery,
  paginationEl,
  galleryListEl,
  modalCloseBtn,
  modalWatchBtn,
  modalQueueBtn,
  footerTeamLink,
  myLibWatchBtn,
  myLibQueueBtn,
  spiner,
} from './refs';
console.log(gnrArr)
myLibWatchBtn.addEventListener('click', onClickWachedLib);

function onClickWachedLib(e) {
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];

  const arrMap = arr.map(i => {
    const number = parseInt(i);
    return fetchSearchFilmById(number).then(renderWachLib);
  });


  function renderWachLib(data) {
    const { poster_path, title, id, genres, release_date, vote_average } = data;
    const gnr = genres.map(i => i.name)
    const genreNamesSlice = [];
    if (gnr.length >= 2) {
      genreNamesSlice.push(`${gnr.slice(0, 2) + ','}`);
    }
    if (gnr.length === 1) {
      genreNamesSlice.push(`${gnr.slice(0, 1) + ','}`);
    }
    
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
        <p class="gallery__genres" data-id=${id}>${genreNamesSlice} Other</p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
</li>`;

    gallery.insertAdjacentHTML('beforeend', markup);
  }
}
