// import { modalWatchBtn, modalQueueBtn } from './refs';
// import { renderTrandFilms } from './render-cards';

// const arrayWatchedFilms = [];
// const arrayQueueFilms = [];

// function addToWatched(data) {
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
// }
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

// export { addToWatched, addToQueue };
