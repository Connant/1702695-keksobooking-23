import {similarOffers} from './data.js';
import {createCards} from './card.js';
import {generateObject} from './data.js';
import { disableFilters, activateFilters, disableForm, activateForm } from './form.js';

const disableApp = () => {
  disableFilters();
  disableForm();
};

const activateApp = () => {
  activateFilters();
  activateForm();
};

disableApp();
activateApp();

createCards(generateObject());
// eslint-disable-next-line no-console
console.log(similarOffers());
