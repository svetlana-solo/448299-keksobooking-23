import {
  disableForm,
  enableForm
} from './form.js';
import {
  disableFilters,
  enableFilters,
  setFilterChange
} from './filters.js';
import {
  getMap,
  createAdPins,
  removeMarkers
} from './map.js';
import {
  getData
} from './api.js';


const mapCanvas = document.querySelector('.map__canvas');

const disablePage = () => {
  disableForm();
  disableFilters();
};

const enablePage = () => {
  enableForm();
  enableFilters();
};

disablePage();
getMap(mapCanvas);

getData((ads) => {
  createAdPins(ads);
  enableFilters();
  setFilterChange(() => {
    removeMarkers();
    createAdPins(ads);
  });

});

export {
  disablePage,
  enablePage
};
