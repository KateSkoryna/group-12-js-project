import { gallery } from './refs';
import { backdrop, modalCloseBtn } from './refs';
import { renderModalCard } from './renderModalCard';
import { gnrArr } from './fetch-films';
import { onEscPress } from './renderModalCard';

// рендер трендовых фильмов

function renderTrandFilms(data) {
  const gnrArrCycle = gnrArr.flatMap(i => i)
  const idArr = gnrArrCycle.map(i => i)
  // const nameArr = gnrArrCycle.map(i => i.name)
  // idArr.map(i => i) /// acces to obj

  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const res = idArr.filter((i) => {
          return genre_ids.includes(i.id);
        });
        const genreNames = res.map(i => i.name);
       const genreNamesSlice = []
        if (genreNames.length >= 2) {
          genreNamesSlice.push(`${genreNames.slice(0, 2) + ","}`);
        };
        const year = parseInt(release_date);
        return `<li class="gallery__item" data-id=${id}>
    <div class="gallery__wrapper" data-id=${id}>
    <span class="gallery__vote" data-id=${id}>${Math.round(vote_average*10)/10}</span>
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
      }
    )
    .join('');
  gallery.insertAdjacentHTML("beforeend", markup);

  gallery.addEventListener('click', openModal);

  function openModal(e) {
    console.log(backdrop);
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
  const gnrArrCycle = gnrArr.flatMap(i => i)
  const idArr = gnrArrCycle.map(i => i)
  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const res = idArr.filter((i) => {
          return genre_ids.includes(i.id);
        });
        const genreNames = res.map(i => i.name);
       const genreNamesSlice = []
        if (genreNames.length >= 2) {
          genreNamesSlice.push(`${genreNames.slice(0, 2) + ","}`);
        };
        const year = parseInt(release_date);
        const rating = vote_average.toFixed(1);

        return `<li class="gallery__item" data-id="${id}">
    <div class="gallery__wrapper">
    <span class="gallery__vote">${rating}</span>
        <img
            class="gallery__img"
            src="https://www.themoviedb.org/t/p/w500${poster_path}"
            alt="${title}"
            loading="lazy"
            >
    </div>
    <div class="gallery__thumb">
        <h3 class="gallery__name">${title}</h3>
        <p class="gallery__genres">${genreNamesSlice} Other</p>
        <span class="gallery__year">${year ? year : 'n/a'}</span>
    </div>
</li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML("beforeend", markup);
}

export { renderTrandFilms, renderSearchFilms };
