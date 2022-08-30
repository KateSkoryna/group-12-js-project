import { modalWatchBtn, modalQueueBtn } from './data/refs';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './data/keys';

function checkWatchBtn(e) {
  e.target.dataset.id;
  const movieId = e.target.dataset.id;

  let arr1 = localStorage.getItem(WATCHSTORAGE_KEY);
  arr1 = arr1 ? JSON.parse(arr1) : [];

  const inStorage = arr1.find(storageId => storageId === movieId);

  if (!inStorage) {
    addToWatched(movieId);
    return;
  } else {
    deleteWatch(movieId);
  }
}

function addToWatched(id) {
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];
  const movieId = String(id);
  arr.push(movieId);
  const movieEl = JSON.stringify(arr);
  localStorage.setItem(WATCHSTORAGE_KEY, movieEl);
  modalWatchBtn.textContent = 'watched';
  return;
}

function deleteWatch(id) {
  let arr = localStorage.getItem(WATCHSTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];

  const filterArr = arr.filter(localId => localId !== id);
  const movieEl = JSON.stringify(filterArr);

  localStorage.setItem(WATCHSTORAGE_KEY, movieEl);
  modalWatchBtn.textContent = 'add to watched';
  if (arr.length === 0) {
    localStorage.removeItem(WATCHSTORAGE_KEY);
    return;
  }
}

function checkQueueBtn(e) {
  e.target.dataset.id;
  const movieId = e.target.dataset.id;

  let arr1 = localStorage.getItem(QUEUESTORAGE_KEY);
  arr1 = arr1 ? JSON.parse(arr1) : [];

  const inStorage = arr1.find(storageId => storageId === movieId);

  if (!inStorage) {
    addToQueue(movieId);
    return;
  } else {
    deleteToQueue(movieId);
  }
}

function addToQueue(id) {
  let arr = localStorage.getItem(QUEUESTORAGE_KEY);
  arr = arr ? JSON.parse(arr) : [];

  const movieId = String(id);

  arr.push(movieId);
  const movieEl = JSON.stringify(arr);

  localStorage.setItem(QUEUESTORAGE_KEY, movieEl);
  modalQueueBtn.textContent = 'added';
  return;
}

function deleteToQueue(id) {
  let arr2 = localStorage.getItem(QUEUESTORAGE_KEY);
  arr2 = arr2 ? JSON.parse(arr2) : [];

  const filterArr = arr2.filter(localId => localId !== id);
  const movieEl = JSON.stringify(filterArr);

  localStorage.setItem(QUEUESTORAGE_KEY, movieEl);
  modalQueueBtn.textContent = 'add to queue';

  if (arr2.length === 0) {
    localStorage.removeItem(QUEUESTORAGE_KEY);
    return;
  }
}

export { checkWatchBtn, checkQueueBtn };
