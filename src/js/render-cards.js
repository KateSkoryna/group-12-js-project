import { gallery } from './refs';

// рендер трендовых фильмов

function renderTrandFilms(data) {
  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const year = parseInt(release_date);
        return `<li class="gallery__item" data-id=${id}>
    <div class="gallery__wrapper" data-id=${id}>
    <span class="gallery__vote" data-id=${id}>${vote_average}</span>
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
        <p class="gallery__genres" data-id=${id}>${genre_ids}</p>
        <span class="gallery__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
</li>`;
      }
    )
    .join('');
  gallery.innerHTML = markup;
  return gallery;
}

function renderSearchFilms(data) {
  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
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
        <p class="gallery__genres">${genre_ids}</p>
        <span class="gallery__year">${year ? year : 'n/a'}</span>
    </div>
</li>`;
      }
    )
    .join('');
  gallery.innerHTML = markup;
  return gallery;
}

export { renderTrandFilms, renderSearchFilms };
