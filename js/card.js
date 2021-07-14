// import { generateObject } from './data.js';
import { HOUSE_TYPE } from './data.js';

import {
  card,
  cardTitle,
  cardAddress,
  cardPrice,
  cardType,
  cardCapacity,
  cardCheckTime,
  cardFeatures,
  cardPhotos,
  cardAvatar,
  cardDescription
} from './data.js';

const fillElementAdsData = (adsData, element, text) => {
  if (!adsData) {
    return element.classList.add('visually-hidden');
  }
  element.textContent = text;
};

const fillTemplateCard = ({ author, offer }) => {

  fillElementAdsData(offer.title, cardTitle, offer.title);
  fillElementAdsData(offer.address, cardAddress, offer.address);
  fillElementAdsData(offer.price, cardPrice, `${offer.price} ₽/ночь`);
  fillElementAdsData(offer.type, cardType, HOUSE_TYPE[offer.type]);
  fillElementAdsData(offer.description, cardDescription, offer.description);

  if (!author.avatar) {
    cardAvatar.classList.add('visually-hidden');
  } else {
    cardAvatar.src = author.avatar;
  }

  if (!(offer.rooms) & !(offer.guests)) {
    cardCapacity.classList.add('visually-hidden');
  } else {
    cardCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  }

  if (!(offer.checkin) & !(offer.checkout)) {
    cardCheckTime.classList.add('visually-hidden');
  } else {
    cardCheckTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }

  cardFeatures.innerHTML = '';
  if (!offer.features) {
    cardFeatures.classList.add('visually-hidden');
  } else {
    offer.features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add(
        'popup__feature',
        `popup__feature--${feature}`,
      );
      cardFeatures.appendChild(featureElement);
    });
  }

  cardPhotos.innerHTML = '';
  if (!offer.features) {
    cardFeatures.classList.add('visually-hidden');
  } else {
    offer.photos.forEach((photo) => {
      const photoElement = document.createElement('img');
      photoElement.classList.add('popup__photo');
      photoElement.width = 45;
      photoElement.height = 40;
      photoElement.alt = 'Фотография жилья';
      photoElement.src = photo;
      cardPhotos.appendChild(photoElement);
    });
  }

  return card;
};

// export const createCards = (data) => {
//   const similarAdsFragment = document.createDocumentFragment();
//   const element = fillTemplateCard(data);
//   similarAdsFragment.appendChild(element);

//   return mapCanvas.appendChild(similarAdsFragment);
// };

export { fillTemplateCard };
