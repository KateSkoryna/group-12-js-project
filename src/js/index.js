import { Spinner } from 'spin.js';
import { opts } from './opts-spinner';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

import { bodyRef, toggleRef, footerDarktheme } from './themeChange';

import { ref, form, gallery, paginationEl } from './data/refs';
import { Notify } from 'notiflix';
import { renderTrandFilms, renderSearchFilms } from './render-cards';
import { fetchTrendFilms, fetchSearchFilms } from './fetch-films';
import { bodyRef, toggleRef, footerDarktheme } from './themeChange';
import './themeChange';
import './local-storage-themeSwitch';

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

const spinner = new Spinner(opts).spin(ref.spinner);

fetchTrendFilms(page).then(({ total_pages: totalPages, results: images }) => {
  paginationEl.classList.remove('visually-hidden');
  paganation.reset(totalPages);
  renderTrandFilms(images);
  paganation.on('afterMove', popular);
  paganation.off('afterMove', search);
  spinner.stop();
});

form.addEventListener('submit', onClickRead);
let value = null;

paganation.on('afterMove', popular);

function onClickRead(event) {
  event.preventDefault();
  const spinner = new Spinner(opts).spin(ref.spinner); ////create spinner
  value = event.target.query.value.toLowerCase().trim();

  if (!value) {
    Notify.failure('enter text!');
    spinner.stop();
    return;
  }

  fetchSearchFilms(value, page).then(
    ({ total_pages: totalPages, results: images }) => {
      form.reset();
      spinner.stop(); ////stoping spinner
      if (images.length === 0) {
        paginationEl.classList.add('visually-hidden');
        Notify.failure(`Images by not found!`);
        return;
      }

      paginationEl.classList.remove('visually-hidden');
      renderSearchFilms(images);
      paganation.reset(totalPages);
      paganation.on('afterMove', search);
      paganation.off('afterMove', popular);
    }
  );
}

function popular(event) {
  const spinner = new Spinner(opts).spin(ref.spinner);
  gallery.innerHTML = '';
  const currentPage = event.page;
  fetchTrendFilms(currentPage).then(({ results: images }) => {
    renderTrandFilms(images);
    spinner.stop();
  });
}

function search(event) {
  const spinner = new Spinner(opts).spin(ref.spinner);
  gallery.innerHTML = '';
  const currentPage = event.page;
  fetchSearchFilms(value, currentPage).then(({ results: images }) => {
    renderSearchFilms(images);
    spinner.stop();
  });
}
