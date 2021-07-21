import { defaultCoords, createAdMarker, initializationMap, resetMap, removeAdMarkers } from './map.js';
import { showAlert } from './utils.js';
import { showErrorPopup, showPopup } from './popup.js';
import { sendData, getData } from './api.js';
import { getFilteredAds, filterForm } from './filtres.js';
import { debounce } from './utils/debounce.js';
import {
  adForm, resetAdForm, mapForm, activateForm, disableForm,
  activateFilters, disableFilters, setAddressInput, resetButton
} from './form.js';


export const renderAds = (ads) => {
  ads.slice(0, 10).forEach((ad) => createAdMarker(ad));
};

const showError = (error) => {
  showAlert(`При загрузке объявления произошла ошибка ${error}`);
};

let adsData;

const resetApp = () => {
  resetMap();
  resetAdForm();
  mapForm.reset();
  filterForm.reset();
  renderAds(adsData);
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

const onFilterChange = debounce((ads) => {
  const newAds = getFilteredAds(ads);
  removeAdMarkers();
  renderAds(newAds);
});

const initApp = () => {
  deactivateApp();
  initializationMap({
    mapLoad: activateApp,
    onMainPinMoveEnd: setAddressInput,
  });
  setAddressInput({ lat: defaultCoords.lat, lng: defaultCoords.lng });
  setFormSubmit(sendData);
  getData()
    .then((ads) => {
      adsData = ads;
      renderAds(ads);
      filterForm.addEventListener('change', () => {
        onFilterChange(ads);
      });
    })
    .catch(showError);

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetApp();
  });
};

initApp();
