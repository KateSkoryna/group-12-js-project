import { gallery, backdrop } from './data/refs';
import { renderModalCard } from './renderModalCard';
import { gnrArr } from './fetch-films';
import { onEscPress } from './modal';

import { getGenres } from './getGenres';
// рендер трендовых фильмов

function renderTrandFilms(data) {
  const gnrArrCycle = gnrArr.flatMap(i => i);
  const idArr = gnrArrCycle.map(i => i);

  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const getNames = getGenres(genre_ids);
        const year = parseInt(release_date);
        return `<li class="gallery__item" data-id=${id}>
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
            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"
            >
    </div>
    <div class="gallery__thumb" data-id=${id}>
        <h3 class="gallery__name" data-id=${id}>${title}</h3>
        <p class="gallery__genres" data-id=${id}>${getNames}</p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
</li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  gallery.addEventListener('click', openModal);

  function openModal(e) {
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);

    const value = parseInt(e.target.dataset.id);
    if (!value) {
      return;
    }
    const arr = [...data].filter(movie => movie.id === value);
    const movie = arr[0];
    renderModalCard(movie);
  }
}

function renderSearchFilms(data) {
  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const year = parseInt(release_date);
        const rating = vote_average.toFixed(1);

        return `<li class="gallery__item" data-id="${id}">
    <div class="gallery__wrapper" data-id=${id}>
    <span class="gallery__vote" data-id=${id}>${rating}</span>
        <img
            class="gallery__img"
            src="https://www.themoviedb.org/t/p/w500${poster_path}"
            alt="${title}"
            loading="lazy"
            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"
            data-id=${id}
            >
    </div>
    <div class="gallery__thumb" data-id=${id}>
        <h3 class="gallery__name" data-id=${id}>${title}</h3>
        <p class="gallery__genres" data-id=${id}>${genre_ids} </p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
</li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  gallery.addEventListener('click', e => openModal(e, data));

  function openModal(e, data) {
    const value = e.target.dataset.id;
    if (!value) {
      return;
    }
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);
    console.log(data);
    renderModalCard(data);
  }
}

function renderWachLib(data) {
  const { poster_path, title, id, genres, release_date, vote_average } = data;
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
        <p class="gallery__genres" data-id=${id}>${genres} </p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
</li>`;

  gallery.insertAdjacentHTML('beforeend', markup);

  gallery.addEventListener('click', e => openModal(e, data));

  function openModal(e) {
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);
    const value = parseInt(e.target.dataset.id);
    if (value === data.id && e.target) {
      renderModalCard(data);
    }
  }
}

export { renderTrandFilms, renderSearchFilms, renderWachLib };
