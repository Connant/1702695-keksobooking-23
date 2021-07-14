import { disableFilters, activateFilters, disableForm, activateForm } from './form.js';

export const disableApp = () => {
  disableFilters();
  disableForm();
};

export const activateApp = () => {
  activateFilters();
  activateForm();
};

disableApp();
activateApp();
