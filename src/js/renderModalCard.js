import { modal, backdrop, modalRenderBox } from './refs';
import { modalCloseBtn, modalQueueBtn, modalWatchBtn } from './refs';
import { checkWatchBtn } from './local-storage';

const WATCHSTORAGE_KEY = 'watchStorage';
const QUEUESTORAGE_KEY = 'queueStorage';

export default function renderModalCard(movie) {
  modalRenderBox.innerHTML = '';
  const {
    poster_path,
    title,
    id,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genre_ids,
    overview,
  } = movie;

  const movieId = String(id);
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];
  const inStorage = arr.find(storageId => storageId === movieId);
  console.log('inStorage', inStorage);

  const markup = `<div class="modal__poster-wrap">
            <img class="modal__poster" src="https://www.themoviedb.org/t/p/w500${poster_path}" alt="${title}">
        </div>
        <div class="modal__card">
            <h2 class="modal__title" data-id=${id}>${title}</h2>
            <div class="modal__list-wrap">
                <ul class="modal__list">
                    <li class="modal__item">Vote / Votes</li>
                    <li class="modal__item">Popularity</li>
                    <li class="modal__item">Original Title</li>
                    <li class="modal__item">Genre</li>
                </ul>
                <ul class="modal__list-render">
                    <li class="modal__item-render"><span class="modal__item-vote">${
                      Math.round(vote_average * 10) / 10
                    }</span> <span class="modal__item-slash">/</span>
                    <span class="modal__item-votes">${vote_count}</span></li>
                    <li class="modal__item-render">${popularity}</li>
                    <li class="modal__item-render">${original_title}</li>
                    <li class="modal__item-render">${genre_ids}</li>
                </ul>
                </div>
            <h3 class="modal__about">About</h3>
            <p class="modal__description">${overview}</p>
        </div>`;
  modalRenderBox.insertAdjacentHTML('beforeend', markup);

  modalWatchBtn.textContent = inStorage ? 'remove' : 'add';

  modalWatchBtn.dataset.id = id;
  modalWatchBtn.addEventListener('click', checkWatchBtn);
  // modalQueueBtn.addEventListener('click', e => addToQueue(e, id));
  //   modalQueueBtn.addEventListener('click', addToQueue);
}
backdrop.addEventListener('click', onBackdropClick);
modalCloseBtn.addEventListener('click', onCloseModal);

function onCloseModal(event) {
  window.removeEventListener('keydown', onEscPress);
  modalWatchBtn.removeEventListener('click', checkWatchBtn);
  backdrop.removeEventListener('click', onBackdropClick);
  backdrop.classList.add('is-hidden');
}

function onBackdropClick(e) {
  e.preventDefault();

  if (e.target === backdrop || e.target.getAttribute('data-close') == '') {
    onCloseModal();
  }
}
function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

export { renderModalCard, onEscPress };
