import {
  disableForm,
  enableForm
} from './form.js';
import {
  disableFilters,
  enableFilters
} from './filters.js';
import {
  getMap
} from './map.js';

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

export {
  disablePage,
  enablePage
};
