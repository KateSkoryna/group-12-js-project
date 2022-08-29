import { modalCloseBtn, modalWatchBtn, modalQueueBtn, backdrop } from './refs';
import { checkWatchBtn, checkQueueBtn } from './local-storage';

function onCloseModal(event) {

  window.removeEventListener('keydown', onEscPress);
  modalWatchBtn.removeEventListener('click', checkWatchBtn);
  modalQueueBtn.removeEventListener('click', checkQueueBtn);
  backdrop.classList.add('is-hidden');
  backdrop.removeEventListener('click', onBackdropClick);
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

export { onEscPress, onCloseModal, onBackdropClick };
