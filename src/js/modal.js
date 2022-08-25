// import modalWatchBtn from './refs'
const arrayWatchedFilms = [];
const arrayQueueFilms = [];
const modalWatchBtn = document.querySelector('.modal__watch-btn');
const modalQueueBtn = document.querySelector('.modal__queueBtn')


// const updateListOfWatchedFilms = (id) => {
//     addToWatched(id)

//    // updateOutput()
//     //Функция, которая будет перебирать массив локальных данных и рендерить список просмотренных фильмов
// }
const addToWatched = () => {
    const watchedFilm = 'remove from watched';
    // const filmId = `Film №${data.id}`
    if (modalWatchBtn.textContent === watchedFilm) {
        modalWatchBtn.textContent = 'add to watched';
        // localStorage.removeItem(`${filmId}${data.id}`)
        return;
    }
    
   modalWatchBtn.textContent = watchedFilm;
    // arrayWatchedFilms.push(localStorage.setItem(`${filmId}`, JSON.stringify(data.id)));
 

    return arrayWatchedFilms
}
const addToQueue = () => {
    const filmInQueue = 'remove from queue';
    // const filmId = `Film №${data.id}`
    if (modalQueueBtn.textContent === filmInQueue) {
        modalQueueBtn.textContent = 'add to queue';
        // localStorage.removeItem(`${filmId}${data.id}`)
        return;
    }
    modalQueueBtn.textContent = filmInQueue;
}
modalWatchBtn.addEventListener('click', addToWatched);
modalQueueBtn.addEventListener('click', addToQueue);



