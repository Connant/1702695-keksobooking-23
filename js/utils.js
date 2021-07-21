// eslint-disable-next-line id-length
function getRandomFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

// eslint-disable-next-line id-length
function getRandomInt(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomElement = (items) => items[getRandomInt(0, items.length - 1)];

const escEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const enterEvent = (evt) => evt.key === 'Enter';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = '95px';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'black';
  alertContainer.style.backgroundColor = 'white';
  alertContainer.style.boxShadow =  '0px 0px 15px rgba(0, 0, 0, 0.8)';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 120000);
};


export { getRandomInt, getRandomFloat, getRandomElement, escEvent, enterEvent, showAlert };
