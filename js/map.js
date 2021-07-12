import {
  createCard
} from './ad.js';
import {
  getFilters
} from './filters.js';
import {
  address
} from './form.js';
import {
  enablePage
} from './main.js';

const CENTER_LAT = 35.68950;
const CENTER_LNG = 139.69171;
const ZOOM = 10;
const QUANTITY = 10;
let markerGroup;
let map;

const getMap = () => {
  map = L.map('map-canvas')
    .on('load', () => {
      enablePage();
      address.value = `${CENTER_LAT}, ${CENTER_LNG}`;
    })
    .setView({
      lat: CENTER_LAT,
      lng: CENTER_LNG,
    }, ZOOM);

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

  mainMarker.on('moveend', (evt) => {
    address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  markerGroup = L.layerGroup().addTo(map);
};

const adIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

let markers = [];

const createAdPins = (ads) => {
  ads
    .filter(getFilters)
    .slice(0, QUANTITY)
    .forEach((ad) => {
      const {
        location,
      } = ad;
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

export {
  getMap,
  removeMarkers,
  setAddress,
  createAdPins
};
