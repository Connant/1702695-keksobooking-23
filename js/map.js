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

const initializationMap = ({ mapLoad, onMainPinMoveEnd }) => {
  map = L.map('map-canvas')
    .on('load', mapLoad)
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

  mainPin.on('move', (evt) => {
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
