import { modalWatchBtn, modalQueueBtn } from './refs';
import { renderTrandFilms } from './render-cards';

const WATCHSTORAGE_KEY = 'watchStorage';
const QUEUESTORAGE_KEY = 'queueStorage';

function checkWatchBtn(e) {
  e.target.dataset.id;
  const movieId = e.target.dataset.id;
  console.log('movieId', movieId);
  let arr1 = localStorage.getItem(WATCHSTORAGE_KEY);
  arr1 = arr1 ? JSON.parse(arr1) : [];
  console.log('b11', arr1);
  const inStorage = arr1.find(storageId => storageId === movieId);
  console.log('inStorage', inStorage);
  console.log('b14', arr1);
  if (!inStorage) {
    addToWatched(movieId);
    return;
  } else {
    deleteWatch(movieId);
  }
}

function addToWatched(id) {
  let arr2 = localStorage.getItem(WATCHSTORAGE_KEY);
  arr2 = arr2 ? JSON.parse(arr2) : [];
  console.log('b', arr2);
  arr2.push(id);
  console.log('a', arr2);
  const movieEl = JSON.stringify(arr2);
  localStorage.setItem(WATCHSTORAGE_KEY, movieEl);
  modalWatchBtn.textContent = 'remove';
  return;
}

function deleteWatch(id) {
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];
  const filterArr = arr.filter(localId => localId !== id);
  const movieEl = JSON.stringify(filterArr);

  localStorage.setItem(WATCHSTORAGE_KEY, movieEl);
  modalWatchBtn.textContent = 'add';
  if (arr.length === 0) {
    localStorage.removeItem(WATCHSTORAGE_KEY);
    return;
  }
}

function addToQueue(id) {
  let arr = localStorage.getItem(QUEUESTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];
  console.log(arr);
  console.log(id);
  const movieId = String(id);
  const index = arr.indexOf(movieId);
  console.log(index);

  arr.push(movieId);
  const movieEl = JSON.stringify(arr);

  localStorage.setItem(QUEUESTORAGE_KEY, movieEl);
  modalWatchBtn.textContent = 'watched';
  return;
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

export { checkWatchBtn };
