import { gallery, jsLibrary } from './refs';
import { backdrop } from './refs';
import { renderModalCard } from './renderModalCard';
import { gnrArr } from './fetch-films';
import { onEscPress } from './modal';
// рендер трендовых фильмов

function renderTrandFilms(data) {
  const gnrArrCycle = gnrArr.flatMap(i => i);
  const idArr = gnrArrCycle.map(i => i);

  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const res = idArr.filter(i => {
          return genre_ids.includes(i.id);
        });
        const genreNames = res.map(i => i.name);
        const genreNamesSlice = [];
        if (genreNames.length >= 2) {
          genreNamesSlice.push(`${genreNames.slice(0, 2) + ','}`);
        }
        if (genreNames.length === 1) {
          genreNamesSlice.push(`${genreNames.slice(0, 1) + ','}`);
        }
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
        <p class="gallery__genres" data-id=${id}>${genreNamesSlice} Other</p>
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
  const gnrArrCycle = gnrArr.flatMap(i => i);
  const idArr = gnrArrCycle.map(i => i);
  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const res = idArr.filter(i => {
          return genre_ids.includes(i.id);
        });
        const genreNames = res.map(i => i.name);
        const genreNamesSlice = [];
        if (genreNames.length >= 2) {
          genreNamesSlice.push(`${genreNames.slice(0, 2) + ','}`);
        }
        if (genreNames.length === 1) {
          genreNamesSlice.push(`${genreNames.slice(0, 1) + ','}`);
        }
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
        <p class="gallery__genres" data-id=${id}>${genreNamesSlice} Other</p>
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

function renderLibrary(data) {
     const { poster_path, title, id, genres, release_date, vote_average } = data;
     const gnr = genres.map(i => i.name)
    const res = gnr.filter(i => {
      return genres.includes(i.id);
    });
    
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
        <h3 class="gallery__name" data-id=${id}>${title}</h3><p class="gallery__genres" data-id=${id}>${genreNamesSlice} Other</p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
</li>`;

    jsLibrary.insertAdjacentHTML('beforeend', markup);
     gallery.addEventListener('click', e => openModal(e, data));

 function openModal(e, data) {
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);

  const value = parseInt(e.target.dataset.id);
  if (!value) {
    return;
  }
    renderModalCard(data);
  }
}

export { renderTrandFilms, renderSearchFilms, renderLibrary };
