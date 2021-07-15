import {
  setFilterChange
} from './filters.js';
//import { initPhotoUploaders} from './avatar.js';
import {
  initMap,
  createAdPins,
  removeMarkers
} from './map.js';
import {
  getData
} from './api.js';
import {
  debounce
} from './util.js';
import {
  setUserFormSubmit,
  onFormSubmitSuccess,
  showErrorMessage,
  setClearButtonClick
}  from './user-form.js';
import {
  disablePage,
  enablePage
} from './page-status.js';

const RERENDER_DELAY = 500;

disablePage();
initMap.then(
  getData((ads) => {
    createAdPins(ads);
    setFilterChange(debounce(
      () => {
        removeMarkers();
        createAdPins(ads);
      }, RERENDER_DELAY));
    enablePage();
  }),
);

setUserFormSubmit(onFormSubmitSuccess, showErrorMessage);

setClearButtonClick();
