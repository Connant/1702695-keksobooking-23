const fillElementAdsData = (adsData, element, text) => {
  if (!adsData) {
    element.classList.add('visually-hidden');
    return;
  }
  element.textContent = text;
};

const HOUSE_TYPE = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

const ELEMENT_WIDTH = 45;
const ELEMENT_HEIGHT = 60;

const fillTemplateCard = ({ author, offer }) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.popup__title');
  const cardAddress = card.querySelector('.popup__text--address');
  const cardPrice = card.querySelector('.popup__text--price');
  const cardType = card.querySelector('.popup__type');
  const cardCapacity = card.querySelector('.popup__text--capacity');
  const cardCheckTime = card.querySelector('.popup__text--time');
  const cardFeatures = card.querySelector('.popup__features');
  const cardPhotos = card.querySelector('.popup__photos');
  const cardAvatar = card.querySelector('.popup__avatar');
  const cardDescription = card.querySelector('.popup__description');

  fillElementAdsData(offer.title, cardTitle, offer.title);
  fillElementAdsData(offer.address, cardAddress, offer.address);
  fillElementAdsData(offer.price, cardPrice, `${offer.price} ₽/ночь`);
  fillElementAdsData(offer.type, cardType, HOUSE_TYPE[offer.type]);
  fillElementAdsData(offer.description, cardDescription, offer.description);

  if (!author.avatar) {
    cardAvatar.classList.add('visually-hidden');
  } else {
    cardAvatar.src = author.avatar;
    if (!(offer.rooms) || !(offer.guests)) {
      cardCapacity.classList.add('visually-hidden');
    } else {
      cardCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    }
    if (!(offer.checkin) || !(offer.checkout)) {
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
      photoElement.width = ELEMENT_WIDTH;
      photoElement.height = ELEMENT_HEIGHT;
      photoElement.alt = 'Фотография жилья';
      photoElement.src = arrayItem;
      cardPhotos.appendChild(photoElement);
    });

    return card;
  }
};

export { fillTemplateCard };
