import { btnToTop } from './data/refs';

const trackScroll = () => {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    btnToTop.classList.add('back-to-top--show');
  }
  if (scrolled < coords) {
    btnToTop.classList.remove('back-to-top--show');
  }
};

const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
};
//vdnfjkbnfjk
window.addEventListener('scroll', trackScroll);
btnToTop.addEventListener('click', backToTop);
