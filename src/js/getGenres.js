import { genres } from './data/genres';

const getGenres = ids => {
  const arr = [];
  ids.forEach(id => {
    console.log(genres[id]);
    if (genres[id]) {
      arr.push(genres[id]);
    }
  });
  if (arr.length <= 2) {
    return arr;
  } else {
    return arr.slice(0, 2) + ', Other';
  }
};

export { getGenres };
