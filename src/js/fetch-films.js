import axios from 'axios';

const KEY = 'fd7341fdf0f2e94a335192ece09ea376';

// функция без аргумента 
async function fetchAllFilms() {
    const url = 'https://api.themoviedb.org/3/trending/movie/week';

    try {
      const { data } = await axios.get(`${url}?api_key=${KEY}`);
        return data;
        
    } catch (error) {
      console.error('Something wrong! Can not get full trends' + error);
    }
}

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
      const { data } = await axios.get(`${url}?api_key=${KEY}&query=${text}&page=${page}`);
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

export { fetchAllFilms, fetchTrendFilms, fetchSearchFilms, fetchSearchFilmById }; 