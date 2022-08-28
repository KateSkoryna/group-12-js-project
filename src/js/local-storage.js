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

function checkQueueBtn(e) {
  e.target.dataset.id;
  const movieId = e.target.dataset.id;
  console.log('movieId', movieId);
  let arr1 = localStorage.getItem(QUEUESTORAGE_KEY);
  arr1 = arr1 ? JSON.parse(arr1) : [];
  console.log('b11', arr1);
  const inStorage = arr1.find(storageId => storageId === movieId);
  console.log('inStorage', inStorage);
  console.log('b14', arr1);
  if (!inStorage) {
    addToQueue(movieId);
    return;
  } else {
    deleteWatch(movieId);
  }
}

function addToQueue(id) {
  let arr2 = localStorage.getItem(QUEUESTORAGE_KEY);
  arr2 = arr2 ? JSON.parse(arr2) : [];
  console.log('b', arr2);
  arr2.push(id);
  console.log('a', arr2);
  const movieEl = JSON.stringify(arr2);
  localStorage.setItem(QUEUESTORAGE_KEY, movieEl);
  modalQueueBtn.textContent = 'remove';
  return;
}

function deleteWatch(id) {
  let arr2 = localStorage.getItem(QUEUESTORAGE_KEY);
  arr2 = arr2 ? JSON.parse(arr2) : [];
  const filterArr = arr2.filter(localId => localId !== id);
  const movieEl = JSON.stringify(filterArr);

  localStorage.setItem(QUEUESTORAGE_KEY, movieEl);
  modalQueueBtn.textContent = 'add';
  if (arr2.length === 0) {
    localStorage.removeItem(QUEUESTORAGE_KEY);
    return;
  }
}

export { checkWatchBtn, checkQueueBtn };
