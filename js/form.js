import { defaultCoords } from './map.js';

const adForm = document.querySelector('.ad-form');
const formFieldsets = adForm.querySelectorAll('fieldset');

const mapForm = document.querySelector('.map__filters');
const mapSelects = mapForm.querySelectorAll('select');
const mapFeatures = mapForm.querySelector('.map__features');

const minTitleLength = 30;
const maxTitleLength = 100;

const adTitle = adForm.querySelector('#title');
const roomsSelect = adForm.querySelector('#room_number');
const guestsSelect = adForm.querySelector('#capacity');
const checkInTime = adForm.querySelector('#timein');
const checkOutTime = adForm.querySelector('#timeout');
const typeOfHouse = adForm.querySelector('#type');
const price = adForm.querySelector('#price');

const location = adForm.querySelector('#address');

const Rooms = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  ONE_HUNDRED: '100',
};

const Guests = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  NON_GUESTS: '0',
};

const MinPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const setAddressInput = ({ lat, lng }) => {
  location.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const resetAdForm = () => {
  adForm.reset();
  setAddressInput({ lat: defaultCoords.lat, lng: defaultCoords.lng });
};

const timeChange = (evt) => {
  checkInTime.value = evt.target.value;
  checkOutTime.value = evt.target.value;
};

checkInTime.addEventListener('change', timeChange);
checkOutTime.addEventListener('change', timeChange);

const onTypeOfHouseChange = () => {
  const typeOfHouseValue = typeOfHouse.value;
  price.setAttribute('min', MinPrice[typeOfHouseValue]);
  price.placeholder = MinPrice[typeOfHouseValue];
};

typeOfHouse.addEventListener('change', onTypeOfHouseChange);

const checkRoomsAvailable = () => {
  const numberOfRooms = roomsSelect.value;
  const numberOfGuests = guestsSelect.value;
  let error = '';

  if (numberOfRooms === Rooms.ONE_HUNDRED && numberOfGuests !== Guests.NON_GUESTS) {
    error += 'Не для гостей';
  } else if (numberOfRooms === Rooms.ONE_HUNDRED && numberOfGuests === Guests.NON_GUESTS) {
    guestsSelect.setCustomValidity('');
    return;
  } else if (numberOfRooms === Rooms.ONE && numberOfGuests !== Guests.ONE) {
    error += 'Для 1 гостя';
  } else if (numberOfGuests === Guests.NON_GUESTS || numberOfGuests > numberOfRooms) {
    error += `Не более ${numberOfRooms} гостей`;
  }

  guestsSelect.setCustomValidity(error);
  guestsSelect.reportValidity();
};

const checkTitleLength = () => {
  const valueLength = adTitle.value.length;
  let error = '';

  if (valueLength < minTitleLength) {
    error = `Добавьте еще ${minTitleLength - valueLength} символа`;
  } else if (valueLength > maxTitleLength) {
    error = `Удалите лишние ${valueLength - maxTitleLength} символа`;
  }
  adTitle.setCustomValidity(error);
  adTitle.reportValidity();
};

adTitle.addEventListener('input', checkTitleLength);
adForm.addEventListener('change', checkRoomsAvailable);

const disableFilters = () => {
  mapForm.classList.add('map__filters--disabled');
  mapSelects.forEach((select) => {
    select.disabled = true;
  });
  mapFeatures.disabled = true;
};

const activateFilters = () => {
  mapForm.classList.remove('map__filters--disabled');
  mapSelects.forEach((select) => {
    select.disabled = false;
  });
  mapFeatures.disabled = false;
};

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

export const resetButton = adForm.querySelector('.ad-form__reset');

export { adForm, mapForm, price, setAddressInput, MinPrice, resetAdForm, typeOfHouse, disableFilters, activateFilters, disableForm, activateForm };
