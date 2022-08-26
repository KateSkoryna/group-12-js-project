import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
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
import { Notify } from 'notiflix';
import { renderTrandFilms, renderSearchFilms } from './render-cards';
import {
  fetchTrendFilms,
  fetchSearchFilms,
  fetchSearchFilmById,
  fetchGenres,
} from './fetch-films';

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
 paganation.on('afterMove', search);

fetchTrendFilms(page).then(({ total_pages: totalPages, results: images }) => {
  paginationEl.classList.remove('visually-hidden');
  paganation.reset(totalPages);
  renderTrandFilms(images);
  paganation.on('afterMove', popular);
  paganation.off('afterMove', search);
})
  
form.addEventListener('submit', onClickRead);

paganation.on('afterMove', popular);

function onClickRead(event) {
  event.preventDefault();
  
   value = event.target.query.value.toLowerCase().trim();

  if (!value) {
    Notify.failure('enter text!');
    return;
  }

  fetchSearchFilms(value, page).then(
    ({ total_pages: totalPages, results: images }) => {
      form.reset()
      if (images.length === 0) {
        paginationEl.classList.add('visually-hidden');
        Notify.failure(`Images by not found!`);
        return;
      };

      paginationEl.classList.remove('visually-hidden');
      renderSearchFilms(images);
      paganation.reset(totalPages);
     paganation.on('afterMove', search);
     paganation.off('afterMove', popular);
    }
  );
};

function popular(event) {
  gallery.innerHTML = ""
  const currentPage = event.page;
  fetchTrendFilms(currentPage).then(({ results: images }) => {
     renderTrandFilms(images);
  });
};

function search(event) {
  gallery.innerHTML = ""
  const currentPage = event.page;
  fetchSearchFilms(value, currentPage).then(({ results: images }) => {
     renderSearchFilms(images);
  });
};