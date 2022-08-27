import { modal } from './refs';
import { modalCloseBtn, modalQueueBtn, modalWatchBtn, backdrop } from './refs';
export default function renderModalCard(movie) {
  modal.innerHTML = '';
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genre_ids,
    overview,
  } = movie;

  const markup = `<div class="modal__poster-wrap">
            <img class="modal__poster" src="https://www.themoviedb.org/t/p/w500${poster_path}" alt="${title}">
        </div>
        <div class="modal__card">
            <h2 class="modal__title">${title}</h2>
            <div class="modal__list-wrap">
                <ul class="modal__list">
                    <li class="modal__item">Vote / Votes</li>
                    <li class="modal__item">Popularity</li>
                    <li class="modal__item">Original Title</li>
                    <li class="modal__item">Genre</li>
                </ul>
                <ul class="modal__list-render">
                    <li class="modal__item-render"><span class="modal__item-vote">${vote_average}</span> <span class="modal__item-slash">/</span>
                    <span class="modal__item-votes">${vote_count}</span></li>
                    <li class="modal__item-render">${popularity}</li>
                    <li class="modal__item-render">${original_title}</li>
                    <li class="modal__item-render">${genre_ids}</li>
                </ul>
                </div>
            <h3 class="modal__about">About</h3>
            <p class="modal__description">${overview}</p>
        </div>`;
  modal.insertAdjacentHTML('beforeend', markup);

  // Какого-то хрена выдает Null на кнопки ниже. Гляньте все. Рефы проверяла.

    

}
//  
//   modalQueueBtn.addEventListener('click', addToQueue);
  modalQueueBtn.addEventListener('click', closeModal);

    function closeModal(e) {
    
    backdrop.classList.add('is-hidden');
  }


export { renderModalCard };
