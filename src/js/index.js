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
  backdrop,
} from './refs';
import { Notify } from 'notiflix';
import { renderTrandFilms } from './render-cards';
import {
  fetchTrendFilms,
  fetchSearchFilms,
  fetchSearchFilmById,
} from './fetch-films';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
//import toggleModal from 'render-modal-card';

form.addEventListener('submit', onClickRead);

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

  const value = event.target.query.value.toLowerCase().trim();

  if (!value) {
    Notify.failure('enter text!');
    return;
  }
  paganation.off('afterMove', popular);

  fetchSearchFilms(value, page).then(
    ({ total, total_pages: totalPages, results: images }) => {
      if (images.length === 0) {
        paginationEl.classList.add('visually-hidden');
        Notify.failure(`Images by not found!`);
        return;
      }

      paginationEl.classList.remove('visually-hidden');
      paganation.reset(total);
      return renderTrandFilms(images);
    }
  );
}

function popular(event) {
  const currentPage = event.page;
  fetchTrendFilms(currentPage).then(({ results: images }) => {
    return renderTrandFilm(images);
  });
}


gallery.addEventListener('click', onGalleryCardClick);


