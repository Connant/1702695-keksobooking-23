const adForm = document.querySelector('.ad-form');
const formFieldsets = adForm.querySelectorAll('fieldset');

const mapForm = document.querySelector('.map__filters');
const mapSelects = mapForm.querySelectorAll('select');
const mapFeatures = mapForm.querySelector('.map__features');

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
