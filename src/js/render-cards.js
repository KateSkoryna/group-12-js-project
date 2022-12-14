import { gallery, backdrop } from './data/refs';
import { renderModalCard, renderMyLibModalCard } from './renderModalCard';
import { onEscPress } from './modal';
import { getGenres, getG } from './getGenres';

// рендер трендовых фильмов

function renderTrandFilms(data) {
  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const getNames = getGenres(genre_ids);
        const year = parseInt(release_date);
        const rating = vote_average.toFixed(1);
        return `<li class="gallery__item" data-id=${id}>
        <a href="/" class="gallery__link" data-id=${id}>
    <div class="gallery__wrapper" data-id=${id}>
    <span class="gallery__vote" data-id=${id}>${rating}</span>
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
    </a>
</li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  gallery.addEventListener('click', openModal);
  gallery.addEventListener('keydown', openModalbyEnter);

  function openModal(e) {
    e.preventDefault();
    if (!e.target.dataset.id) {
      return;
    }
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);

    const value = parseInt(e.target.dataset.id);
    if (!value) {
      return;
    }

    const arr = [...data].filter(movie => movie.id === value);

    const movie = arr[0];
    if (arr.length === 0 || undefined) {
      return;
    } else {
      renderModalCard(movie);
    }
  }

  function openModalbyEnter(e) {
    if (e.node !== 'Enter') {
      return;
    }
    if (!e.target.dataset.id) {
      return;
    }
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);

    const value = parseInt(e.target.dataset.id);
    if (!value) {
      return;
    }

    const arr = [...data].filter(movie => movie.id === value);
    const movie = arr[0];
    if (arr.length === 0 || undefined) {
      return;
    } else {
      renderModalCard(movie);
    }
  }
}

// рендер фильмов по запросу через форму

function renderSearchFilms(data) {
  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const getNames = getGenres(genre_ids);
        const year = parseInt(release_date);
        const rating = vote_average.toFixed(1);

        return `<li class="gallery__item" data-id="${id}">
        <a href="/" class="gallery__link" data-id=${id}>
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
        <p class="gallery__genres" data-id=${id}>${getNames} </p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
    </a>
</li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  gallery.addEventListener('click', openModal);
  gallery.addEventListener('keydown', openModalbyEnter);

  function openModal(e) {
    e.preventDefault();
    if (!e.target.dataset.id) {
      return;
    }
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);

    const value = parseInt(e.target.dataset.id);
    if (!value) {
      return;
    }
    const arr = [...data].filter(movie => movie.id === value);
    const movie = arr[0];
    if (arr.length === 0 || undefined) {
      return;
    } else {
      renderModalCard(movie);
    }
  }

  function openModalbyEnter(e) {
    if (e.node !== 'Enter') {
      return;
    }
    if (!e.target.dataset.id) {
      return;
    }
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);

    const value = parseInt(e.target.dataset.id);
    if (!value) {
      return;
    }
    const arr = [...data].filter(movie => movie.id === value);
    const movie = arr[0];
    if (arr.length === 0 || undefined) {
      return;
    } else {
      renderModalCard(movie);
    }
  }
}

function renderWachLib(data) {
  const { poster_path, title, id, genres, release_date, vote_average } = data;

  const genreName = getG(genres);
  const year = parseInt(release_date);

  const markup = `<li class="gallery__item" data-id=${id}>
  <a href="/" class="gallery__link" data-id=${id}>
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
        <p class="gallery__genres" data-id=${id}>${genreName} </p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
    </a>
</li>`;

  gallery.insertAdjacentHTML('beforeend', markup);

  gallery.addEventListener('click', e => openModal(e, data));
  gallery.addEventListener('keydown', openModalbyEnter);

  function openModal(e, data) {
    e.preventDefault();
    if (!e.target.dataset.id) {
      return;
    }
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);
    const value = parseInt(e.target.dataset.id);
    if (value === data.id && e.target) {
      renderMyLibModalCard(data);
    }
  }

  function openModalbyEnter(e) {
    if (e.node !== 'Enter') {
      return;
    }
    if (!e.target.dataset.id) {
      return;
    }
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);
    const value = parseInt(e.target.dataset.id);
    if (value === data.id && e.target) {
      renderMyLibModalCard(data);
    }
  }
}

export { renderTrandFilms, renderSearchFilms, renderWachLib };
