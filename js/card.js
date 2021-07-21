import {
  HOUSE_TYPE,
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

    const fillElementDataArray = (element, array, handler) => {
      element.innerHTML = '';
      if (!array) {
        element.classList.add('visually-hidden');
      } else {
        array.forEach(handler);
      }
    };

    fillElementDataArray(cardFeatures, offer.features, (arrayItem) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add(
        'popup__feature',
        `popup__feature--${arrayItem}`,
      );
      cardFeatures.appendChild(featureElement);
    });

    fillElementDataArray(cardPhotos, offer.photos, (arrayItem) => {
      const photoElement = document.createElement('img');
      photoElement.classList.add('popup__photo');
      photoElement.width = 45;
      photoElement.height = 40;
      photoElement.alt = 'Фотография жилья';
      photoElement.src = arrayItem;
      cardPhotos.appendChild(photoElement);
    });

    return card;
  }
};

export { fillTemplateCard };
