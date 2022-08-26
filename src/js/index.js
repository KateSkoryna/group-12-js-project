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
import { renderTrandFilms } from './render-cards';
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

fetchTrendFilms(page).then(({total_pages: totalPages, results: images }) => {
  paginationEl.classList.remove('visually-hidden');
  paganation.reset(totalPages);
  renderTrandFilms(images);
})
  

form.addEventListener('submit', onClickRead);

paganation.on('afterMove', popular);

function onClickRead(event) {
  event.preventDefault();

  const value = event.target.query.value.toLowerCase().trim();

  if (!value) {
    Notify.failure('enter text!');
    return;
  }
  // paganation.off('afterMove', popular);

  fetchSearchFilms(value, page).then(
    ({ total, total_pages: totalPages, results: images }) => {
      if (images.length === 0) {
        paginationEl.classList.add('visually-hidden');
        Notify.failure(`Images by not found!`);
        return;
      }

      paginationEl.classList.remove('visually-hidden');
      paganation.reset(totalPages);
      renderTrandFilms(images);
      
    }
  );
}

function popular(event) {
  console.log(event)
  const currentPage = event.page;
  console.log(currentPage)
  fetchTrendFilms(currentPage).then(({ results: images }) => {
     renderTrandFilms(images);
  });
}
function popular(event) {
  refs.gallery.innerHTML = ""
  const currentPage = event.page;
     getImg(currentPage).then((photo) => {
       renderGallery(photo.data)
      })
}