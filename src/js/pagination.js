// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// export { page, options, paganation, popular };
// import { renderTrandFilms } from './render-cards';
// import { fetchSearchFilms } from './fetch-films';
// import { fetchTrendFilms } from './fetch-films';
// import { gallery } from './refs';
// const options = {
//   totalItems: 0,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   centerAlign: true,
//   page: 1,
// };
// const paganation = new Pagination(
//   document.getElementById('pagination'),
//   options
// );
// const page = paganation.getCurrentPage();

// paganation.on('afterMove', popular);

// function popular(event) {
//   const currentPage = event.page;
//   gallery.innerHTML = ""
//   fetchTrendFilms(currentPage).then(data => {
//     renderTrandFilms(data);
//   });
// }

// function searchFilm(event) {
//   const currentPage = event.page;
//   fetchSearchingFilms(currentPage).then(data => {
//     fetchSearchFilms(data);
//   });
// }
