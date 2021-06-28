import {getRandomInt, getRandomFloat, getRandomElement} from './utils.js';

const AVATAR = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png',
  'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png', 'img/avatars/user09.png', 'img/avatars/user10.png'];
const TITLE = ['Old palace', 'Spacious apartment', 'Two-storey house', 'Tree house', 'Dollhouse'];

export const HOUSE_TYPE = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

const DESCRIPTION = ['House with the ghosts', 'Sunny side', 'Large loggia', 'Next to the park'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/duonguyen-8LrGtIxxa4w.randomIdxpg',
  'https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.randomIdxpg',
  'https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.randomIdxpg'];

const numberObjects = 10;

const generateObject = () => {
  const COORDINATES = {
    lat: getRandomFloat(30, 40, 6),
    lng: getRandomFloat(10, 15, 6),
  };

  return {
    author: {
      avatar: AVATAR.splice(getRandomInt(0, AVATAR.length - 1), 1),
    },
    offer: {
      title: getRandomElement(TITLE),
      address: `Coordinates: ${COORDINATES.lat}, ${COORDINATES.lng}`,
      price: getRandomInt(0, 10000),
      type: getRandomElement(HOUSE_TYPE),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 5),
      checkin: getRandomElement(TIME),
      checkout: getRandomElement(TIME),
      features: getRandomElement(FEATURES),
      description: getRandomElement(DESCRIPTION),
      photos: getRandomElement(PHOTOS),
    },
    location: {
      lat: COORDINATES.lat,
      lng: COORDINATES.lng,
    },
  };
};

export const cardTemplate = document.querySelector('#card').content.querySelector('.popup');


export const card = cardTemplate.cloneNode(true);
export const cardTitle = card.querySelector('.popup__title');
export const cardAddress = card.querySelector('.popup__text--address');
export const cardPrice = card.querySelector('.popup__text--price');
export const cardType = card.querySelector('.popup__type');
export const cardCapacity = card.querySelector('.popup__text--capacity');
export const cardCheckTime = card.querySelector('.popup__text--time');
export const cardFeatures = card.querySelector('.popup__features');
export const cardPhotos = card.querySelector('.popup__photos');
export const cardAvatar = card.querySelector('.popup__avatar');
export const cardDescription = card.querySelector('.popup__description');

const similarOffers = new Array(numberObjects).fill(null).map(() => generateObject());

similarOffers();

export {similarOffers};
