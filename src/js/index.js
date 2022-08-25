import {
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
} from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderTrandFilms } from './render-cards';
import {
  fetchTrendFilms,
  fetchSearchFilms,
  fetchSearchFilmById,
} from './fetch-films';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

form.addEventListener('submit', onClickRead);

console.log(form);
const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  page: 1,
};
const paganation = new Pagination(
  document.getElementById('pagination'),
  options
);

const page = paganation.getCurrentPage();

paganation.on('afterMove', popular);

function onClickRead(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  const value = event.target.query.value.toLowerCase().trim();
  console.log(value);
  console.log(page);

  if (!value) {
    Notify.failure('enter text!');
    return;
  }
  paganation.off('afterMove', popular);

  fetchSearchFilms(value, page).then(
    ({ total, total_pages: totalPages, results: images }) => {
      if (images.length === 0) {
        paginationEl.classList.add('is-hidden');
        Notify.failure(`Images by not found!`);
        return;
      }

      console.log(images);
      paginationEl.classList.remove('is-hidden');
      paganation.reset(total);

      return renderTrandFilms(images);
    }
  );
}

function popular(event) {
  const currentPage = event.page;
  fetchTrendFilms(currentPage).then(({ results: images }) => {
    renderTrandFilm(images);
  });
}
