// import './stateApp.js';
import './card.js';
// import './form.js';
import './popup.js';
import './api.js';
import './map.js';

import { defaultCoords, createAdMarker, initializationMap, resetMap } from './map.js';
import { showAlert } from './utils.js';
import {
  adForm, resetAdForm, mapForm, activateForm, disableForm,
  activateFilters, disableFilters, setAddressInput, resetButton
} from './form.js';
import { showErrorPopup, showPopup } from './popup.js';
import { sendData, getData } from './api.js';

const renderAds = (ads) => {
  ads.slice(0, 10).forEach((ad) => createAdMarker(ad));
};

const showMessageError = (error) => {
  showAlert(`При загрузке объявления произошла ошибка ${error}`);
};

const resetApp = () => {
  resetMap();
  resetAdForm();
  mapForm.reset();
};

const deactivateApp = () => {
  disableForm();
  disableFilters();
};

const activateApp = () => {
  activateForm();
  activateFilters();
};

const setFormSubmit = (send) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    send(evt.target)
      .then(showPopup)
      .then(resetApp)
      .catch(showErrorPopup);
  });
};

const initApp = () => {
  deactivateApp();
  initializationMap({
    onMapLoad: activateApp,
    onMainPinMoveEnd: setAddressInput,
  });
  setAddressInput({ lat: defaultCoords.lat, lng: defaultCoords.lng });
  setFormSubmit(sendData);
  getData()
    .then(renderAds)
    .catch(showMessageError);

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetApp();
  });
};

initApp();
