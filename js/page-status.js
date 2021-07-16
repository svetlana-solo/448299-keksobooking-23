import {
  disableForm,
  enableForm
} from './form.js';
import {
  disableFilters,
  enableFilters
} from './filters.js';
import { initPhotoUploaders} from './avatar.js';

//const mapCanvas = document.querySelector('.map__canvas');

const disablePage = () => {
  disableForm();
  disableFilters();
};

const enablePage = () => {
  enableForm();
  enableFilters();
  initPhotoUploaders();
};

export {
  disablePage,
  enablePage
};
