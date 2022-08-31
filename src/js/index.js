import { spinner } from './spinner';
import { paganation } from './pagination';
// import { bodyRef, toggleRef, footerDarktheme } from './themeChange';
import { form, gallery, paginationEl, footerTeamLink } from './data/refs';

import { Notify } from 'notiflix';
Notify.init({
  width: '320px',
  position: 'center-top',
  distance: '20px',
  clickToClose: true,
  cssAnimationStyle: 'from-top',
  cssAnimationDuration: 800,
});

import { renderTrandFilms, renderSearchFilms } from './render-cards';
import { fetchTrendFilms, fetchSearchFilms } from './fetch-films';
// import { bodyRef, toggleRef, footerDarktheme } from './themeChange';

import './themeChange';
import './local-storage-themeSwitch';
import { openModal } from './teamModal';

const page = paganation.getCurrentPage();
paganation.on('afterMove', search);

fetchTrendFilms(page).then(({ total_pages: totalPages, results: images }) => {
  paginationEl.classList.remove('visually-hidden');
  paganation.reset(totalPages);
  renderTrandFilms(images);
  paganation.off('afterMove', search);
  spinner.stop();
});

footerTeamLink.addEventListener('click', openModal);

form.addEventListener('submit', onClickRead);
let value = null;

paganation.on('afterMove', popular);

function onClickRead(event) {
  event.preventDefault();
  value = event.target.query.value.toLowerCase().trim();

  if (!value) {
    Notify.failure('I cant read your mind. Enter movie title, please!');
    spinner.stop();
    return;
  }

  fetchSearchFilms(value, page).then(
    ({ total_pages: totalPages, results: images }) => {
      form.reset();
      spinner.stop(); ////stoping spinner
      if (images.length === 0) {
        paginationEl.classList.add('visually-hidden');
        Notify.failure(`Sorry...Movie was not found...`);
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
  gallery.innerHTML = '';
  const currentPage = event.page;
  fetchTrendFilms(currentPage).then(({ results: images }) => {
    renderTrandFilms(images);
    spinner.stop();
  });
}

function search(event) {
  gallery.innerHTML = '';
  const currentPage = event.page;
  fetchSearchFilms(value, currentPage).then(({ results: images }) => {
    renderSearchFilms(images);
    spinner.stop();
  });
}
