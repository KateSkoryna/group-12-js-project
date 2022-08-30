import { Notify } from 'notiflix';
import { fetchSearchFilmById, gnrArr } from './fetch-films';
import { backdrop, jsLibrary, storageChoice, gallery, watchedChoice, queueChoice, emptyGallery } from './refs';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './data/keys';
import { renderModalCard } from './renderModalCard';
import { onEscPress } from './modal';
import { renderLibrary } from './render-cards';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './data/keys';

let watched = JSON.parse(localStorage.getItem(WATCHSTORAGE_KEY)) || [];
let queue = JSON.parse(localStorage.getItem(QUEUESTORAGE_KEY)) || [];


if (document.title === 'Your library') {
    renderFilmGallery(watched)
    if (watched.length === 0) {
        emptyGallery.classList.remove('disguise');
        Notify.failure('Now you don`t have films in queue')
    }
};

function renderFilmGallery(varietyList) {
        try {
            varietyList.map(f => {
                const id = parseInt(f);
                return fetchSearchFilmById(id).then(renderLibrary);
            })
        } catch (error) {
            console.log(error);
        }
};

function tupWatchBtn() {
    if (watched.length === 0) {
        jsLibrary.innerHTML = ''
        emptyGallery.classList.remove('disguise');
        Notify.failure('Now you don`t have films you watched');
        return
    }
    jsLibrary.innerHTML = ''
    watchedChoice.classList.add('chosen');
    queueChoice.classList.remove('chosen');
    emptyGallery.classList.add('disguise');
    watched = JSON.parse(localStorage.getItem(WATCHSTORAGE_KEY)) || [];
    renderFilmGallery(watched);
};


function tupQueueButton() {
    if (queue.length === 0) {
        jsLibrary.innerHTML = '';
        emptyGallery.classList.remove('disguise');
        Notify.failure('Now you don`t have films in queue');
        return
    }
    jsLibrary.innerHTML = ''
    queueChoice.classList.add('chosen')
    watchedChoice.classList.remove('chosen')
    emptyGallery.classList.add('disguise');
    queue = JSON.parse(localStorage.getItem(QUEUESTORAGE_KEY)) || []; 
    renderFilmGallery(queue);
};


watchedChoice.addEventListener('click', tupWatchBtn);

queueChoice.addEventListener('click', tupQueueButton);
