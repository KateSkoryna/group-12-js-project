import {
  modalRenderBox,
  backdrop,
  modalQueueBtn,
  modalWatchBtn,
  modalCloseBtn,
} from './refs';
import { checkWatchBtn, checkQueueBtn } from './local-storage';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './data/keys';
// import { gnrArr } from './fetch-films';
import { onBackdropClick, onCloseModal } from './modal';

function renderModalCard(movie) {
  // const gnrArrCycle = gnrArr.flatMap(i => i);
  // const idArr = gnrArrCycle.map(i => i);
  modalRenderBox.innerHTML = '';
  const {
    title,
    id,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genre_ids,
    overview,
  } = movie;

  // const res = idArr.filter((i) => {
  //    return genre_ids.includes(i.id)

  //   });
  // const genreNames = res.map(i => i.name);
  // const genreNamesSlice = [];
  // if (genreNames.length >= 2) {
  //   genreNamesSlice.push(`${genreNames.slice(0, 2)}`);
  // }
  // if (genreNames.length === 1) {
  //   genreNamesSlice.push(`${genreNames.slice(0, 1)}`);
  // }

  const movieId = String(id);
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];
  let arr2 = localStorage.getItem(QUEUESTORAGE_KEY);
  arr2 = arr2 ? JSON.parse(arr2) : [];
  const inStorage = arr.find(storageId => storageId === movieId);
  const inStorage2 = arr2.find(storageId => storageId === movieId);

  const markup = `<div class="modal__poster-wrap">
            <img class="modal__poster" src="https://www.themoviedb.org/t/p/w500${poster_path}" alt="${title}"
            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';">
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
                    <li class="modal__item-render modal__original-title">${original_title}</li>

                    <li class="modal__item-render">${genre_ids}</li>
                </ul>
                </div>
            <h3 class="modal__about">About</h3>
            <p class="modal__description">${overview}</p>
        </div>`;
  modalRenderBox.insertAdjacentHTML('beforeend', markup);

  modalWatchBtn.textContent = inStorage ? 'watched' : 'add to watched';
  modalQueueBtn.textContent = inStorage2 ? 'added' : 'add to queue';

  modalWatchBtn.dataset.id = id;
  modalQueueBtn.dataset.id = id;
  modalWatchBtn.addEventListener('click', checkWatchBtn);
  modalQueueBtn.addEventListener('click', checkQueueBtn);

  backdrop.addEventListener('click', onBackdropClick);
  modalCloseBtn.addEventListener('click', onCloseModal);
}
// function renderModalLibraryCard(movie) {
//   console.log(movie);
//   modalRenderBox.innerHTML = '';
//   const {
//     title,
//     id,
//     poster_path,
//     vote_average,
//     vote_count,
//     popularity,
//     original_title,
//     genres,
//     overview,
//   } = movie;
//   //  const gnr = genres.map(i => i.name)
//   //   const genreNamesSlice = [];
//   //   if (gnr.length >= 2) {
//   //     genreNamesSlice.push(`${gnr.slice(0, 2)}`);
//   //   }
//   //   if (gnr.length === 1) {
//   //     genreNamesSlice.push(`${gnr.slice(0, 1)}`);
//   //   }
//   const movieId = String(id);
//   let arr = localStorage.getItem(WATCHSTORAGE_KEY);
//   arr = arr ? JSON.parse(arr) : [];

//   let arr2 = localStorage.getItem(QUEUESTORAGE_KEY);
//   arr2 = arr2 ? JSON.parse(arr2) : [];

//   const inStorage = arr.find(storageId => storageId === movieId);
//   const inStorage2 = arr2.find(storageId => storageId === movieId);

//   const markup = `<div class="modal__poster-wrap">
//             <img class="modal__poster" src="https://www.themoviedb.org/t/p/w500${poster_path}" alt="${title}"
//             onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';">
//         </div>
//         <div class="modal__card">
//             <h2 class="modal__title" data-id=${id}>${title}</h2>
//             <div class="modal__list-wrap">
//                 <ul class="modal__list">
//                     <li class="modal__item">Vote / Votes</li>
//                     <li class="modal__item">Popularity</li>
//                     <li class="modal__item">Original Title</li>
//                     <li class="modal__item">Genre</li>
//                 </ul>
//                 <ul class="modal__list-render">
//                     <li class="modal__item-render"><span class="modal__item-vote">${
//                       Math.round(vote_average * 10) / 10
//                     }</span> <span class="modal__item-slash">/</span>
//                     <span class="modal__item-votes">${vote_count}</span></li>
//                     <li class="modal__item-render">${popularity}</li>
//                     <li class="modal__item-render modal__original-title">${original_title}</li>
//                     <li class="modal__item-render">${genres}</li>
//                 </ul>
//                 </div>
//             <h3 class="modal__about">About</h3>
//             <p class="modal__description">${overview}</p>
//         </div>`;
//   modalRenderBox.insertAdjacentHTML('beforeend', markup);

//   modalWatchBtn.textContent = inStorage ? 'watched' : 'add to watched';
//   modalQueueBtn.textContent = inStorage2 ? 'added' : 'add to queue';

//   modalWatchBtn.dataset.id = id;
//   modalQueueBtn.dataset.id = id;
//   modalWatchBtn.addEventListener('click', checkWatchBtn);
//   modalQueueBtn.addEventListener('click', checkQueueBtn);

//   backdrop.addEventListener('click', onBackdropClick);
//   modalCloseBtn.addEventListener('click', onCloseModal);
// }

export { renderModalCard };
