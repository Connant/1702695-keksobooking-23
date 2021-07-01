import {similarOffers} from './data.js';
import {createCards} from './card.js';
import {generateObject} from './data.js';


createCards(generateObject());
// eslint-disable-next-line no-console
console.log(similarOffers());
