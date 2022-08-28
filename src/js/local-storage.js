import { modalWatchBtn, modalQueueBtn } from './refs';
import { renderTrandFilms } from './render-cards';

const WATCHSTORAGE_KEY = 'watchStorage';
const QUEUESTORAGE_KEY = 'queueStorage';

function addToWatched(e, id) {
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];
  console.log(arr);
  console.log(id);
  const movieId = String(id);
  const index = arr.indexOf(movieId);
  console.log(index);

  if (index < 0) {
    arr.push(movieId);
    const movieEl = JSON.stringify(arr);
    localStorage.setItem(WATCHSTORAGE_KEY, movieEl);
    modalWatchBtn.textContent = 'watched';
    return;
  } else {
    arr.splice(index, 1);
    console.log(arr);
    localStorage.removeItem(WATCHSTORAGE_KEY);
    localStorage.setItem(WATCHSTORAGE_KEY, arr);
    modalWatchBtn.textContent = 'add to watched';
    if (arr.length === 0) {
      localStorage.removeItem(WATCHSTORAGE_KEY);
      return;
    }
  }

  //   const watchedFilm = 'remove from watched';
  //   if (modalWatchBtn.textContent === watchedFilm) {
  //     modalWatchBtn.textContent = 'add to watched';
  //     removeFilmFromWatched();
  //     updateWatchedFilms();
  //     return;
  //   }
  //   modalWatchBtn.textContent = watchedFilm;
  //   arrayWatchedFilms.push({ data });
  //   localStorage.setItem('watched films', JSON.stringify(arrayWatchedFilms));
  //   updateWatchedFilms();
}

// function removeFilmFromWatched(data) {
//   const newIndex = arrayWatchedFilms.indexOf(data);
//   const updatedWatchedFilms = arrayWatchedFilms.splice(newIndex, 1);
//   localStorage.setItem('watched films', JSON.stringify(updatedWatchedFilms));
// }
// function updateWatchedFilms() {
//   const watchedFilmsFromStorage = JSON.parse(localStorage.getItem('list'));

//   watchedFilmsFromStorage.forEach(film => {
//     renderTrandFilms(film);
//   });
// }

// function addToQueue(data) {
//   const queueFilm = 'remove from queue';

//   if (modalQueueBtn.textContent === queueFilm) {
//     modalQueueBtn.textContent = 'add to queue';
//     removeFilmQueue();
//     updateQueueFilms();
//     return;
//   }

//   modalQueueBtn.textContent = queueFilm;
//   arrayQueueFilms.push({ data });
//   localStorage.setItem('queue', JSON.stringify(arrayQueueFilms));

//   updateQueueFilms();
// }

// function removeFilmQueue(data) {
//   const newIndex = arrayQueueFilms.indexOf(data);
//   const updatedQueueFilms = arrayQueueFilms.splice(newIndex, 1);
//   localStorage.setItem('queue', JSON.stringify(updatedQueueFilms));
// }
// function updateQueueFilms() {
//   const queueFilmsFromStorage = JSON.parse(localStorage.getItem('list'));

//   queueFilmsFromStorage.forEach(film => {
//     renderTrandFilms(film);
//   });
// }

export { addToWatched, addToQueue };
