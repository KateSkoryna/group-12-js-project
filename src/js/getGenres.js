import { genres } from './data/genres';

const getGenres = ids => {
  const arr = [];
  ids.forEach(id => {
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

function getG(arr) {
  const array = [];
  arr.forEach(el => {
    array.push(el.name);
  });

  if (array.length <= 2) {
    return array;
  } else {
    return array.slice(0, 2) + ', Other';
  }
}

function getAllGenId(arr) {
  const array = [];
  arr.forEach(el => {
    array.push(el.name);
  });

  return array.join(', ');
}

function getAllGeners(ids) {
  const arr = [];
  ids.forEach(id => {
    if (genres[id]) {
      arr.push(genres[id]);
    }
  });
  return arr.join(', ');
}

export { getGenres, getG, getAllGenId, getAllGeners };
