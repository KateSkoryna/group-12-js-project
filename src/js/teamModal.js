import * as basicLightbox from 'basiclightbox';
import { footerTeamLink, gallery } from './refs';
import sprite from "../images/sprite.svg";
import katya from "../images/team/Katya.jpg";
import ira from "../images/team/Ira.jpg";
import aleksiy from "../images/team/Aleksiy.jpg";
import andriy from "../images/team/andriy.jpg";
import lena from "../images/team/Lena.jpg";
import leonid from "../images/team/Leonid.jpg";
import yulia from "../images/team/Yulia.jpg";
import ulyana from "../images/team/Ulyana.jpg";

const teamModal = `
<div class="team__modal">
  <ul class="team__list">
    <li class="team__item">
      <img class="team__img" src="${katya}" alt="Katya">
      <ul class="team__info">
        <li class="team__name">Ekateryna,</li>
        <li class="team__role">Team Lead</li>
        <li class="team__location">Munich, Germany</li>
        <li class="team__github">
          <a href="https://github.com/KateSkoryna" target="_blank">
            <svg class="team__github">
            <use href="${sprite}#icon-github"></use>
            </svg>
          </a>
        </li>
        <li class="team__phone">
          <a href="tel:+49016099814255">
            <svg class="team__phone">
              <use href="${sprite}#icon-mobile"></use>
            </svg>
          </a>
        </li>
      </ul>
    </li>

    <li class="team__item">
      <img class="team__img" src="${ira}" alt="Ira">
      <ul class="team__info">
        <li class="team__name">Irina,</li>
        <li class="team__role">Scrum Master</li>
        <li class="team__location">Kyiv, Ukraine</li>
        <li class="team__github">
          <a href="https://github.com/IrinaZhuravel" target="_blank">
          <svg class="team__github">
            <use href="${sprite}#icon-github"></use>
            </svg>
          </a>
        </li>
        <li class="team__phone">
          <a href="tel:+380991278657">
            <svg class="team__phone">
              <use href="${sprite}#icon-mobile"></use>
            </svg>
          </a>
        </li>
      </ul>
    </li>
    <li class="team__item">
      <img class="team__img" src="${yulia}" alt="Yulya">
      <ul class="team__info">
        <li class="team__name">Yuliya,</li>
        <li class="team__role">Developer</li>
        <li class="team__location">Aachen, Germany</li>
        <li class="team__github">
          <a href="https://github.com/JuliaMykh" target="_blank">
            <svg class="team__github">
              <use href="${sprite}#icon-github"></use>
            </svg>
          </a>
        </li>
        <li class="team__phone">
          <a href="tel:+380731051797">
            <svg class="team__phone">
              <use href="${sprite}#icon-mobile"></use>
            </svg>
          </a>
        </li>
      </ul>
    </li>
    <li class="team__item">
      <img class="team__img" src="${aleksiy}" alt="Lyosha">
      <ul class="team__info">
        <li class="team__name">Aleksiy,</li>
        <li class="team__role">Developer</li>
        <li class="team__location">Dnipro, Ukraine</li>
        <li class="team__github">
          <a href="https://github.com/aleksei-v" target="_blank">
            <svg class="team__github">
              <use href="${sprite}#icon-github"></use>
            </svg>
          </a>
        </li>
        <li class="team__phone">
          <a href="tel:+380973541690">
            <svg class="team__phone">
              <use href="${sprite}#icon-mobile"></use>
            </svg>
          </a>
        </li>
      </ul>
    </li>
    <li class="team__item">
      <img class="team__img" src="${leonid}" alt="Lyonya">
      <ul class="team__info">
        <li class="team__name">Leonid,</li>
        <li class="team__role">Developer</li>
        <li class="team__location">Ivano-Frankivsk, Ukraine</li>
        <li class="team__github">
          <a href="https://github.com/Gaydashleo" target="_blank">
            <svg class="team__github">
              <use href="${sprite}#icon-github"></use>
            </svg>
          </a>
        </li>
        <li class="team__phone">
          <a href="tel:+380957153338">
            <svg class="team__phone">
              <use href="${sprite}#icon-mobile"></use>
            </svg>
          </a>
        </li>
      </ul>
    </li>
    <li class="team__item">
      <img class="team__img" src="${lena}" alt="Lena">
      <ul class="team__info">
        <li class="team__name">Elena,</li>
        <li class="team__role">Developer</li>
        <li class="team__location">Черкассы, Украина</li>
        <li class="team__github">
          <a href="https://github.com/ElenaTatsenko" target="_blank">
            <svg class="team__github">
              <use href="${sprite}#icon-github"></use>
            </svg>
          </a>
        </li>
        <li class="team__phone">
          <a href="tel:+380637292852">
            <svg class="team__phone">
              <use href="${sprite}#icon-mobile"></use>
            </svg>
          </a>
        </li>
      </ul>
    </li>
    <li class="team__item">
      <img class="team__img" src="${ulyana}" alt="Ulyana">
      <ul class="team__info">
        <li class="team__name">Ulyana,</li>
        <li class="team__role">Developer</li>
        <li class="team__location">Munich, Germany</li>
        <li class="team__github">
          <a href="https://github.com/KalinichenkoUlyana" target="_blank">
            <svg class="team__github">
              <use href="${sprite}#icon-github"></use>
            </svg>
          </a>
        </li>
        <li class="team__phone">
          <a href="tel:+4917666885075">
            <svg class="team__phone">
              <use href="${sprite}#icon-mobile"></use>
            </svg>
          </a>
        </li>
      </ul>
    </li>
    <li class="team__item">
      <img class="team__img" src="${andriy}" alt="Andrey">
        <ul class="team__info">
          <li class="team__name">Andrey,</li>
          <li class="team__role">Developer</li>
          <li class="team__location">Kyiv, Ukraine</li>
          <li class="team__github">
            <a href="https://github.com/Andrii-Vekker" target="_blank">
              <svg class="team__github">
                <use href="${sprite}#icon-github"></use>
              </svg>
            </a>
          </li>
          <li class="team__phone">
            <a href="tel:+380631879581">
              <svg class="team__phone">
                <use href="${sprite}#icon-mobile"></use>
              </svg>
            </a>
          </li>
        </ul>
      </li>
  </ul>
</div>`;




footerTeamLink.addEventListener('click', openModal);
const modal = basicLightbox.create(teamModal);

function openModal(evt) {
  
  modal.show();
  gallery.style.position="fixed";
  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(evt) {
    if (evt.code === 'Escape') {
      modal.close();
      gallery.style.position="static";
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}


export { openModal };
