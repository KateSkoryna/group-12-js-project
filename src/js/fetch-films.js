import axios from 'axios';
import { page } from './index';
const KEY = 'fd7341fdf0f2e94a335192ece09ea376';

<<<<<<< Updated upstream
export let gnrArr = []

=======
const gnrArr = {}
>>>>>>> Stashed changes
// функция для пагинации

async function fetchTrendFilms(page) {
  const url = 'https://api.themoviedb.org/3/trending/movie/week';

  try {
    const { data } = await axios.get(`${url}?api_key=${KEY}&page=${page}`);
    return data;
  } catch (error) {
    console.error('Something wrong! Can not get full trends' + error);
  }
}

// функция для поиска по названию

async function fetchSearchFilms(text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie';

  try {
    const { data } = await axios.get(
      `${url}?api_key=${KEY}&query=${text}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error('Something wrong! Can not search films' + error);
  }
}

// функция для поиска по id

async function fetchSearchFilmById(id) {
  const url = 'https://api.themoviedb.org/3/movie';

  try {
    const { data } = await axios.get(`${url}${id}?api_key=${KEY}`);
    return data;
  } catch (error) {
    console.error('Something wrong! Can not search films by ID' + error);
  }
}

async function fetchGenres() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list';
  const KEY = 'fd7341fdf0f2e94a335192ece09ea376';

    try {
      const { data } = await axios.get(`${url}?api_key=${KEY}`);
<<<<<<< Updated upstream
      // console.log(data)
=======
      console.log(data)
>>>>>>> Stashed changes
        return data;

    } catch (error) {
      console.error('Something wrong!' + error);
    }
}
fetchGenres().then(gener => {
  const arr = gener.genres
<<<<<<< Updated upstream
  const item = arr.map(i => i)
  gnrArr.push(item)
  return item
})
// fetchGenres()

=======
  const item = arr.map(i => console.log(i))
  gnrArr[item.id] = name

})
>>>>>>> Stashed changes

// функция без аргумента

// async function fetchAllFilms() {
//     const url = 'https://api.themoviedb.org/3/trending/movie/week';

//     try {
//       const { data } = await axios.get(`${url}?api_key=${KEY}`);
//         return data;

//     } catch (error) {
//       console.error('Something wrong! Can not get full trends' + error);
//     }
// }

export { fetchTrendFilms, fetchSearchFilms, fetchSearchFilmById, fetchGenres };
