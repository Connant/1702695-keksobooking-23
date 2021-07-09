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

const rooms = {
  one: '1',
  two: '2',
  three: '3',
  oneHundreed: '100',
};

const guests = {
  one: '1',
  two: '2',
  three: '3',
};

const checkRoomsAvailable = () => {
  const numberOfRooms = roomsSelect.value;
  const numberOfguests = guestsSelect.value;
  let error = '';

  if (numberOfRooms === rooms.one && numberOfguests !== guests.one) {
    error += 'Для 1 гостя';
  } else if (numberOfRooms === rooms.two && numberOfguests !== guests.two) {
    error += 'Для 2 гостей';
  } else if (numberOfRooms === rooms.three && numberOfguests !== guests.three) {
    error += 'Для 3 гостей';
  } else if (numberOfRooms === rooms.oneHundreed) {
    error += 'Не для гостей';
  }
  guestsSelect.setCustomValidity(error);
  guestsSelect.reportValidity();
};

const checkTitleLength = () => {
  const valueLength = adTitle.value.length;

  if (valueLength < minTitleLength) {
    adTitle.setCustomValidity(`Добавьте еще ${minTitleLength - valueLength} символа`);
  } else if (valueLength > maxTitleLength) {
    adTitle.setCustomValidity(`Удалите лишние ${valueLength - maxTitleLength} символа`);
  } else {
    adTitle.setCustomValidity('');
  }
  adTitle.reportValidity();
};

adTitle.addEventListener('input', checkTitleLength);
adForm.addEventListener('change', checkRoomsAvailable);

export const disableFilters = () => {
  mapForm.classList.add('map__filters--disabled');
  mapSelects.forEach((select) => {
    select.disabled = true;
  });
  mapFeatures.disabled = true;
};

export const activateFilters = () => {
  mapForm.classList.remove('map__filters--disabled');
  mapSelects.forEach((select) => {
    select.disabled = false;
  });
  mapFeatures.disabled = false;
};

export const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

export const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};
