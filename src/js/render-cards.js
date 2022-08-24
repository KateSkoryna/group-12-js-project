import { gallery } from './refs';

// рендер трендовых фильмов

export function renderTrandFilms(data){
    const markup = data.map(({poster_path, title, id, genres, year, vote_average}) => {
      return  `<li class="gallery__item" data-action="#">
    <div class="gallery__wrapper">
        <img
            class="gallery__img"
            src="https://www.themoviedb.org/t/p/w500${poster_path}"
            alt="${title}"
            data-id="${id}">
    </div>
    <div class="gallery__thumb">
        <h3 class="gallery__name" data-id="${id}">${title}</h3>
        <p class="gallery__genres">${genres.name}</p>
        <p class="gallery__year">${year}</p>
        <span class="gallery__vote">${vote_average}</span>
    </div>
</li>`;
    }).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}