import axios from 'axios';
import { page } from './pagination';

const KEY = 'fd7341fdf0f2e94a335192ece09ea376';

export async function fetchTrendFilms(page) {
    const url = 'https://api.themoviedb.org/3/trending/movie/week';

    try {
      const { data } = await axios.get(`${url}?api_key=${KEY}&page=${page}`);
        return data;
        
    } catch (error) {
      console.error('Something wrong! Can not get full trends' + error);
    }
}
  
export async function fetchSearchingFilms(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie';

    try {
      const { data } = await axios.get(`${url}?api_key=${KEY}&query=${text}&page=${page}`);
        return data;
        
    } catch (error) {
      console.error('Something wrong! Can not search films' + error);
    }
}