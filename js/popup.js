import { escEvent } from './utils.js';

const successPopupTemplate = document.querySelector('#success').content.querySelector('.success');
const errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');

let successPopup = null;
let errorPopup = null;

const closeSuccessPopup = () => {
  if (successPopup !== null) {
    successPopup.remove();
    successPopup = null;
  }
};

const closeErrorPopup = () => {
  if (errorPopup !== null) {
    errorPopup.remove();
    errorPopup = null;
  }
};

const onSuccessPopupKeydown = (evt) => {
  if (escEvent(evt)) {
    evt.preventDefault();
    closeSuccessPopup();
  }
};

const onErrorPopupKeydown = (evt) => {
  if (escEvent(evt)) {
    evt.preventDefault();
    closeErrorPopup();
  }
};

const showPopup = () => {
  successPopup = successPopupTemplate.cloneNode(true);
  document.body.insertAdjacentElement('afterbegin', successPopup);
  successPopup.addEventListener('click', closeSuccessPopup);
  document.addEventListener('keydown', onSuccessPopupKeydown);
};

const showErrorPopup = () => {
  errorPopup = errorPopupTemplate.cloneNode(true);
  document.body.insertAdjacentElement('afterbegin', errorPopup);
  errorPopup.addEventListener('click', closeErrorPopup);
  document.addEventListener('keydown', onErrorPopupKeydown);
};

export { showPopup, showErrorPopup };
