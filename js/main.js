import { defaultCoords, createAdMarker, initMap, resetMap, removeAdMarkers } from './map.js';
import { showAlert } from './utils.js';
import { showErrorPopup, showPopup } from './popup.js';
import { sendData, getData } from './api.js';
import { getFilteredAds, filterForm } from './filters.js';
import { debounce } from './utils/debounce.js';
import {
  adForm, resetAdForm, mapForm, activateForm, disableForm,
  activateFilters, disableFilters, setAddressInput, resetButton, price, MinPrice, typeOfHouse
} from './form.js';


export const renderAds = (ads) => {
  ads.slice(0, 10).forEach((ad) => createAdMarker(ad));
};

let adsData;

const resetApp = () => {
  resetMap();
  resetAdForm();
  mapForm.reset();
  filterForm.reset();
  price.placeholder = MinPrice[typeOfHouse.value];
  price.min = MinPrice[typeOfHouse.value];
  renderAds(adsData);
};

const deactivateApp = () => {
  disableForm();
  disableFilters();
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

const showError = (error) => {
  showAlert(`При загрузке объявления произошла ошибка ${error}`);
};

const activateApp = () => {
  activateForm();
  getData()
    .then((ads) => {
      activateFilters();
      adsData = ads;
      renderAds(ads);
      filterForm.addEventListener('change', () => {
        onFilterChange(ads);
      });
    })
    .catch(showError);
};

const initApp = () => {
  deactivateApp();
  initMap({
    mapLoad: activateApp,
    onMainPinMoveEnd: setAddressInput,
  });
  setAddressInput({ lat: defaultCoords.lat, lng: defaultCoords.lng });
  setFormSubmit(sendData);

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetApp();
  });
};

initApp();
