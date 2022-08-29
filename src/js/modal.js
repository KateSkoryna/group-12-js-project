import { modalCloseBtn, modalWatchBtn, modalQueueBtn, backdrop } from './refs';
import { checkWatchBtn, checkQueueBtn } from './local-storage';

backdrop.addEventListener('click', onBackdropClick);
modalCloseBtn.addEventListener('click', onCloseModal);

function onCloseModal(event) {
  window.removeEventListener('keydown', onEscPress);
  modalWatchBtn.removeEventListener('click', checkWatchBtn);
  modalQueueBtn.removeEventListener('click', checkQueueBtn);
 // backdrop.removeEventListener('click', onBackdropClick);
  backdrop.classList.add('is-hidden');
}

function onBackdropClick(e) {
  e.preventDefault();

  if (e.target === backdrop || e.target.getAttribute('data-close') == '') {
    onCloseModal();
  }
}
function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

export { onEscPress, onCloseModal };
