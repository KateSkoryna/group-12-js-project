import { gallery } from './refs';
import { backdrop, modalCloseBtn, modalWatchBtn } from './refs';
import { renderModalCard } from './renderModalCard';
const arrayWatchedFilms = [];
const arrayQueueFilms = [];
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

  gallery.addEventListener('click', openModal);

  function openModal(e) {
    
    modalWatchBtn.textContent = 'add to watch';
    backdrop.classList.remove('is-hidden');
    if (arrayWatchedFilms.length !== 0) {
      updateWatchedFilms();
    }
    const value = parseInt(e.target.dataset.id);
    if (!value) {
      return;
    }
    const arr = [...data].filter(movie => movie.id === value);
    const movie = arr[0];
    renderModalCard(movie);
    function addToWatched() {
    const watchedFilm = 'remove from watched';

    if (modalWatchBtn.textContent === watchedFilm) {
      modalWatchBtn.textContent = 'add to watched';
      // removeFilmFromWatched();
      updateWatchedFilms();
      return;
    }
      
      modalWatchBtn.textContent = watchedFilm;
      const hasId = arrayWatchedFilms.find(f => f.movie.id === movie.id);
    if (hasId) {
      return
    }
      arrayWatchedFilms.push({ movie });
      // console.log(arrayWatchedFilms)

      localStorage.setItem('watched films', JSON.stringify(arrayWatchedFilms));
  updateWatchedFilms();
    }
//     function removeFilmFromWatched(movie) {
//       //  const hasId = arrayWatchedFilms.find(o => o.movie.id === movie.id);
// console.log("вызов removeFilmFromWatched")
//     const newIndex = arrayWatchedFilms.indexOf(movie);
//     const updatedWatchedFilms = arrayWatchedFilms.splice(newIndex, 1);
//     localStorage.setItem('watched films', JSON.stringify(updatedWatchedFilms));
//   }
  function updateWatchedFilms() {
  const watchedFilmsFromStorage = JSON.parse(localStorage.getItem('watched films'));
    gallery.innerHTML = '';
  const test = watchedFilmsFromStorage
    .map(
      ({ movie }) => {
        const year = parseInt(movie.release_date);
        return `<li class="gallery__item" data-id=${movie.id}>
    <div class="gallery__wrapper" data-id=${movie.id}>
    <span class="gallery__vote" data-id=${movie.id}>${movie.vote_average}</span>
        <img
            class="gallery__img"
            src="https://www.themoviedb.org/t/p/w500${movie.poster_path}"
            alt="${movie.title}"
            loading="lazy"
            data-id=$movie.{id}
            >
    </div>
    <div class="gallery__thumb" data-id=${movie.id}>
        <h3 class="gallery__name" data-id=${movie.id}>${movie.title}</h3>
        <p class="gallery__genres" data-id=${movie.id}>${movie.genre_ids}</p>
        <span class="gallery__year" data-id=${movie.id}>${year ? year : 'n/a'}</span>
    </div>
</li>`;
      }
    )
    .join('');
  gallery.innerHTML = test

}

    modalWatchBtn.addEventListener('click', addToWatched);
  }
}

// function renderSearchFilms(data) {
//   gallery.innerHTML = '';
//   const markup = data
//     .map(
//       ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
//         const year = parseInt(release_date);
//         const rating = vote_average.toFixed(1);

//         return `<li class="gallery__item" data-id="${id}">
//     <div class="gallery__wrapper">
//     <span class="gallery__vote">${rating}</span>
//         <img
//             class="gallery__img"
//             src="https://www.themoviedb.org/t/p/w500${poster_path}"
//             alt="${title}"
//             loading="lazy"
//             >
//     </div>
//     <div class="gallery__thumb">
//         <h3 class="gallery__name">${title}</h3>
//         <p class="gallery__genres">${genre_ids}</p>
//         <span class="gallery__year">${year ? year : 'n/a'}</span>
//     </div>
// </li>`;
//       }
//     )
//     .join('');
//   gallery.innerHTML = markup;
// }

export { renderTrandFilms, renderSearchFilms };
