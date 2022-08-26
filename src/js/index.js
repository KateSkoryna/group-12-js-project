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

export const page = paganation.getCurrentPage();
let pageNum
 paganation.on('afterMove', search);

fetchTrendFilms(page).then(({ total_pages: totalPages, results: images }) => {
  paginationEl.classList.remove('visually-hidden');
  paganation.reset(totalPages);
  renderTrandFilms(images);
})
  

form.addEventListener('submit', onClickRead);


let value = null

function onClickRead(event) {
  event.preventDefault();

   value = event.target.query.value.toLowerCase().trim();

  if (!value) {
    Notify.failure('enter text!');
    return;
  }

  fetchSearchFilms(value, page).then(
    ({ total, total_pages: totalPages, results: images }) => {
      if (images.length === 0) {
        paginationEl.classList.add('visually-hidden');
        Notify.failure(`Images by not found!`);
        return;
      }

      paginationEl.classList.remove('visually-hidden');
      renderSearchFilms(images);
      paganation.reset(totalPages);
     
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
};

function search(event) {
  console.log(event)
  const currentPage = event.page;
  console.log(currentPage)
  fetchSearchFilms(value, currentPage).then(({ results: images }) => {
     renderSearchFilms(images);
  });
}
// function popular(event) {
//   refs.gallery.innerHTML = ""
//   const currentPage = event.page;
//      getImg(currentPage).then((photo) => {
//        renderGallery(photo.data)
//       })
// }