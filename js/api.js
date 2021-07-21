const getData = () => fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(response.status);
  })
  .then((response) => response.json());

const sendData = (form) => fetch('https://23.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    body: new FormData(form),
  },
).then((response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(response.status);
});

export { getData, sendData };
