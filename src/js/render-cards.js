import { gallery } from './refs';

// рендер трендовых фильмов

function renderTrandFilms(data) {
  gallery.innerHTML = '';
  const markup = data
    .map(
      ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const year = parseInt(release_date);
        return `<li class="gallery__item" data-id="${id}">
    <div class="gallery__wrapper">
    <span class="gallery__vote">${vote_average}</span>
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

export { renderTrandFilms };
