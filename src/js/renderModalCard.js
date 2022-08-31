import {
  modalRenderBox,
  backdrop,
  modalQueueBtn,
  modalWatchBtn,
  modalCloseBtn,
} from './data/refs';

import { checkWatchBtn, checkQueueBtn } from './local-storage';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './data/keys';
import { onBackdropClick, onCloseModal } from './modal';
import { getGenres, getG, getAllGenId, getAllGeners } from './getGenres';

// функция рендера модального окна на странице home

function renderModalCard(movie) {
  modalRenderBox.innerHTML = '';
  const {
    title,
    id,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genre_ids,
    overview,
  } = movie;

  const getNames = getAllGeners(genre_ids);
  const rating = vote_average.toFixed(1);

  const movieId = String(id);
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];
  let arr2 = localStorage.getItem(QUEUESTORAGE_KEY);
  arr2 = arr2 ? JSON.parse(arr2) : [];
  const inStorage = arr.find(storageId => storageId === movieId);
  const inStorage2 = arr2.find(storageId => storageId === movieId);

  const markup = `<div class="modal__poster-wrap">
            <img class="modal__poster" src="https://www.themoviedb.org/t/p/w500${poster_path}" alt="${title}"
            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';">
        </div>
        <div class="modal__card">
            <h2 class="modal__title" data-id=${id}>${title}</h2>
            <div class="modal__list-wrap">
                <ul class="modal__list">
                    <li class="modal__item">Vote / Votes</li>
                    <li class="modal__item">Popularity</li>
                    <li class="modal__item">Original Title</li>
                    <li class="modal__item">Genre</li>
                </ul>
                <ul class="modal__list-render">
                    <li class="modal__item-render"><span class="modal__item-vote">${rating}</span> <span class="modal__item-slash">/</span>
                    <span class="modal__item-votes">${vote_count}</span></li>
                    <li class="modal__item-render">${popularity}</li>
                    <li class="modal__item-render modal__original-title">${original_title}</li>

                    <li class="modal__item-render">${getNames}</li>
                </ul>
                </div>
            <h3 class="modal__about">About</h3>
            <p class="modal__description">${overview}</p>
        </div>`;
  modalRenderBox.insertAdjacentHTML('beforeend', markup);

  modalWatchBtn.textContent = inStorage ? 'watched' : 'add to watched';
  modalQueueBtn.textContent = inStorage2 ? 'added' : 'add to queue';

  modalWatchBtn.dataset.id = id;
  modalQueueBtn.dataset.id = id;
  modalWatchBtn.addEventListener('click', checkWatchBtn);
  modalQueueBtn.addEventListener('click', checkQueueBtn);

  backdrop.addEventListener('click', onBackdropClick);
  modalCloseBtn.addEventListener('click', onCloseModal);
}

// функция рендера модального окна на странице myLib

function renderMyLibModalCard(movie) {
  modalRenderBox.innerHTML = '';
  const {
    title,
    id,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = movie;

  const getNames = getAllGenId(genres);
  const rating = vote_average.toFixed(1);

  const movieId = String(id);
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];
  let arr2 = localStorage.getItem(QUEUESTORAGE_KEY);
  arr2 = arr2 ? JSON.parse(arr2) : [];
  const inStorage = arr.find(storageId => storageId === movieId);
  const inStorage2 = arr2.find(storageId => storageId === movieId);

  const markup = `<div class="modal__poster-wrap">
            <img class="modal__poster" src="https://www.themoviedb.org/t/p/w500${poster_path}" alt="${title}"
            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';">
        </div>
        <div class="modal__card">
            <h2 class="modal__title" data-id=${id}>${title}</h2>
            <div class="modal__list-wrap">
                <ul class="modal__list">
                    <li class="modal__item">Vote / Votes</li>
                    <li class="modal__item">Popularity</li>
                    <li class="modal__item">Original Title</li>
                    <li class="modal__item">Genre</li>
                </ul>
                <ul class="modal__list-render">
                    <li class="modal__item-render"><span class="modal__item-vote">${rating}</span> <span class="modal__item-slash">/</span>
                    <span class="modal__item-votes">${vote_count}</span></li>
                    <li class="modal__item-render">${popularity}</li>
                    <li class="modal__item-render modal__original-title">${original_title}</li>

                    <li class="modal__item-render">${getNames}</li>
                </ul>
                </div>
            <h3 class="modal__about">About</h3>
            <p class="modal__description">${overview}</p>
        </div>`;

  modalRenderBox.insertAdjacentHTML('beforeend', markup);

  modalWatchBtn.textContent = inStorage ? 'watched' : 'add to watched';
  modalQueueBtn.textContent = inStorage2 ? 'added' : 'add to queue';

  modalWatchBtn.dataset.id = id;
  modalQueueBtn.dataset.id = id;
  modalWatchBtn.addEventListener('click', checkWatchBtn);
  modalQueueBtn.addEventListener('click', checkQueueBtn);

  backdrop.addEventListener('click', onBackdropClick);
  modalCloseBtn.addEventListener('click', onCloseModal);
}

export { renderModalCard, renderMyLibModalCard };
