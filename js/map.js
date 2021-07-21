import { fillTemplateCard } from './card.js';

const defaultCoords = {
  lat: 35.6895000,
  lng: 139.6917100,
};

let map;
let adMarkersGroup;

const mainPin = L.marker(
  {
    lat: defaultCoords.lat,
    lng: defaultCoords.lng,
  },
  {
    draggable: true,
    icon: L.icon({
      iconUrl: '../img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    }),
  },
);

const initializationMap = ({ onMapLoad, onMainPinMoveEnd }) => {
  map = L.map('map-canvas')
    .on('load', onMapLoad)
    .setView({
      lat: defaultCoords.lat,
      lng: defaultCoords.lng,
    }, 11);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPin.addTo(map);

  adMarkersGroup = L.layerGroup().addTo(map);

  mainPin.on('moveend', (evt) => {
    onMainPinMoveEnd(evt.target.getLatLng());
  });
};

const resetMap = () => {
  mainPin.setLatLng({
    lat: defaultCoords.lat,
    lng: defaultCoords.lng,
  });
  map.setView({
    lat: defaultCoords.lat,
    lng: defaultCoords.lng,
  }, 11);
};

const createAdMarker = (ad) => {
  const { lat, lng } = ad.location;
  const adMarker = L.marker(
    { lat, lng },
    {
      icon: L.icon({
        iconUrl: '../img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      }),
    },
  );

  adMarker
    .addTo(adMarkersGroup)
    .bindPopup(
      fillTemplateCard(ad),
      {
        keepInView: true,
      },
    );
};

export { defaultCoords, createAdMarker, initializationMap, resetMap };


// import { resetButton } from './form.js';
// import { activateApp } from './stateApp.js';
// import { similarOffers } from './data.js';
// import { fillTemplateCard } from './card.js';
// import { setAddressInput } from './form.js';

// export const defaultCoords = {
//   lat: 35.6895000,
//   lng: 139.6917100,
// };

// const pins = similarOffers(5);

// const map = L.map('map-canvas')
//   .on('load', () => activateApp())
//   .setView({
//     lat: defaultCoords.lat,
//     lng: defaultCoords.lng,
//   }, 15);

// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//   {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
//   },
// ).addTo(map);

// const defaultMainPin = L.icon({
//   iconUrl: '../img/main-pin.svg',
//   iconSize: [52, 52],
//   iconAnchor: [26, 52],
// });

// const mainPin = L.marker(
//   {
//     lat: defaultCoords.lat,
//     lng: defaultCoords.lng,
//   },
//   {
//     draggable: true,
//     icon: defaultMainPin,
//   },
// );

// mainPin.addTo(map);

// const getMainPinCoords = () => {
//   setAddressInput({ lat: defaultCoords.lat, lng: defaultCoords.lng });

//   mainPin.on('move', (evt) => {
//     const newCoordlat = (evt.target.getlatLng().lat);
//     const newCoordLng = (evt.target.getlatLng().lng);
//     setAddressInput({ lat: newCoordLat, lng: newCoordLng });
//   });
// };


// resetButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   mainPin.setLatLng({
//     lat: defaultCoords.lat,
//     lng: defaultCoords.lng,
//   });
//   map.setView({
//     lat: defaultCoords.lat,
//     lng: defaultCoords.lng,
//   }, 15);
//   setAddressInput(`${defaultCoords.lat}, ${defaultCoords.lng}`);
// });

// const addMarkersGroup = L.layerGroup().addTo(map);
// const adMarkerIcon = L.icon({
//   iconUrl: '../img/pin.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });

// const createAdMarker = (ad) => {
//   const { lat, lng } = ad.location;
//   const adMarker = L.marker(
//     {
//       lat,
//       lng,
//     },
//     {
//       adMarkerIcon,
//     },
//   );
//   adMarker
//     .addTo(addMarkersGroup)
//     .bindPopup(
//       fillTemplateCard(ad),
//       {
//         keepInView: true,
//       },
//     );
// };

// export const resetMap = () => {
//   mainPin.setLatLng({
//     lat: defaultCoords.lat,
//     lng: defaultCoords.lng,
//   });
//   map.setView({
//     lat: defaultCoords.lat,
//     lng: defaultCoords.lng,
//   }, 11);
// };

// pins.forEach((pin) => createAdMarker(pin));

// getMainPinCoords();
