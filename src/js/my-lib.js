import { Notify } from 'notiflix';
import { fetchSearchFilmById, gnrArr } from './fetch-films';
import { backdrop, jsLibrary, storageChoice, gallery } from './refs';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './data/keys';
import { renderModalCard } from './renderModalCard';
import { onEscPress } from './modal';
import { renderLibrary } from './render-cards';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './data/keys';

const watchedChoice = document.querySelector('#js-WatchedButton');
const queueChoice = document.querySelector('#js-QueueButton');

let watched = JSON.parse(localStorage.getItem(WATCHSTORAGE_KEY)) || [];
let queue = JSON.parse(localStorage.getItem(QUEUESTORAGE_KEY)) || [];


if (document.title === 'Your library') {
    renderFilmGallery()
    if (queue.length === 0) {
        Notify.failure('Now you don`t have films in queue')
    }
}

function renderFilmGallery() {
    if (watchedChoice.classList.contains('chosen') && watched.length !== 0) {
        try {
            watched.map((id) => (fetchSearchFilmById(id).then(renderLibrary)));
        } catch (error) {
            console.log(error);
        }
    }
    if (queueChoice.classList.contains('chosen') && queue.length !== 0) {
        try {           
            queue.map((id) => (fetchSearchFilmById(id).then(renderLibrary)));
        } catch (error) {
            console.log(error);
        }
    }}


function tupWatchBtn() {
    if (watched.length === 0) {
        Notify.failure('Now you don`t have films you watched');
        return
    }
    jsLibrary.innerHTML = ''
    if (watchedChoice.classList.contains('chosen')) return;
    watchedChoice.classList.add('chosen')
    queueChoice.classList.remove('chosen')
    watched = JSON.parse(localStorage.getItem(WATCHSTORAGE_KEY)) || [];
    renderFilmGallery(watched);
}


function tupQueueButton() {
     if (queue.length === 0) {
        Notify.failure('Now you don`t have films in queue');
        return
    }
    jsLibrary.innerHTML = ''
    if (queueChoice.classList.contains('chosen')) return;
    queueChoice.classList.add('chosen')
    watchedChoice.classList.remove('chosen')

    queue = JSON.parse(localStorage.getItem(QUEUESTORAGE_KEY)) || []; 
    renderFilmGallery(queue)
}


watchedChoice.addEventListener('click', tupWatchBtn);

queueChoice.addEventListener('click', tupQueueButton);


