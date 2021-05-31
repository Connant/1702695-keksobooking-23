function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomFloat(0,10)
getRandomInt(0, 10)

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://myrusakov.ru/js-random-numbers.html
