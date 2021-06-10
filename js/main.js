const AVATAR = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png',
  'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png', 'img/avatars/user09.png', 'img/avatars/user10.png'];
const TITLE = ['Old palace', 'Spacious apartment', 'Two-storey house', 'Tree house', 'Dollhouse'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const DESCRIPTION = ['House with the ghosts', 'Sunny side', 'Large loggia', 'Next to the park'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/duonguyen-8LrGtIxxa4w.randomIdxpg',
  'https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.randomIdxpg',
  'https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.randomIdxpg'];

const numberObjects = 10;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, fractionalNumbers) {
  return (Math.random() * (max - min + 1) + min).toFixed(fractionalNumbers);
}

const getRandomElement = (items) => items[getRandomInt(0, items.length - 1)];

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
      type: getRandomElement(TYPE),
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

const similarOffers = new Array(numberObjects).fill(null).map(() => generateObject());

similarOffers.splice();
