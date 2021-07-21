import {
  createCard
} from './ad.js';
import {
  isFilterCorrect
} from './filters.js';
import {
  address
} from './form.js';

const CENTER_LAT = 35.68950;
const CENTER_LNG = 139.69171;
const ZOOM = 10;
const QUANTITY = 10;
const DIGITS_AFTER_POINT = 5;

let ads = [];

const setData = (data) => {
  ads = data;
};

const map = L.map('map-canvas')
  .setView({
    lat: CENTER_LAT,
    lng: CENTER_LNG,
  }, ZOOM);

address.value = `${CENTER_LAT}, ${CENTER_LNG}`;

const initMap = new Promise ((resolve) => {
  map.on('load', () => {
    address.value = `${CENTER_LAT}, ${CENTER_LNG}`;
    resolve();
  });

});

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker({
  lat: CENTER_LAT,
  lng: CENTER_LNG,
}, {
  draggable: true,
  icon: mainPinIcon,
});

mainMarker.addTo(map);

mainMarker.on('move', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(DIGITS_AFTER_POINT)}, ${evt.target.getLatLng().lng.toFixed(DIGITS_AFTER_POINT)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const adIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

let markers = [];
const createAdPins = () => {
  for (let i = 0; i < ads.length && markers.length < QUANTITY; i++) {
    const ad = ads[i];
    if (isFilterCorrect(ad)) {
      const { location } = ad;
      const marker = L.marker({
        lat: location.lat,
        lng: location.lng,
      }, {
        icon: adIcon,
      });
      marker
        .addTo(markerGroup)
        .bindPopup(
          createCard(ad), {
            keepInView: true,
          },
        );
      markers.push(marker);
    }
  }
};

const setAddress = () => {
  address.value = `${CENTER_LAT}, ${CENTER_LNG}`;
};

const removeMarkers = () => {
  markers.forEach((marker) => {
    map.removeLayer(marker);
  });

  markers = [];
};

export {
  removeMarkers,
  setAddress,
  createAdPins,
  CENTER_LAT,
  CENTER_LNG,
  mainMarker,
  initMap,
  setData
};
