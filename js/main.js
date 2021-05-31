function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomFloat(min, max, fractionalNumbers) {
  return (Math.random() * (max - min + 1) + min).toFixed(fractionalNumbers);
};

getRandomInt(0, 10);
getRandomFloat(0,10, 5);

// сама не додумалась, гуглить разрешили
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://myrusakov.ru/js-random-numbers.html
// p.s. ничего не понятно, но очень интересно
