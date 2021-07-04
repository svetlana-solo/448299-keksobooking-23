import { printAd } from './ad.js';
import { address } from './form.js';
import {
  enablePage,
  QUANTITY
} from './main.js';

const CENTER_LAT = 35.68950;
const CENTER_LNG = 139.69171;
const ZOOM = 10;

const map = L.map('map-canvas')
  .on('load', () => {
    enablePage();
    address.value = `${CENTER_LAT}, ${CENTER_LNG}`;
  })
  .setView({
    lat: CENTER_LAT,
    lng: CENTER_LNG,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
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

mainMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});


const adIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

let markers = [];

const createAdPins = (ads) => {
  ads
    .slice()
    .filter()
    .slice(0, QUANTITY)
    .forEach((offer) => {
      const marker = L.marker(
        {
          lat: offer.location.lat,
          lng: offer.location.lng,
        },
        {
          icon: adIcon,
        },
      );

      markers.push(marker);

      marker
        .addTo(map)
        .bindPopup(
          printAd(offer),
          {
            keepInView: true,
          },
        );
    });
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

export { createAdPins, setAddress, mainMarker, CENTER_LAT, CENTER_LNG, removeMarkers };
