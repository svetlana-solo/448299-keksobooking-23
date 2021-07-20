import {
  setFilterChange
} from './filters.js';
import {
  initMap,
  createAdPins,
  removeMarkers,
  setData
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
    setData(ads);
    createAdPins();
    setFilterChange(debounce(
      () => {
        removeMarkers();
        createAdPins();
      }, RERENDER_DELAY));
    enablePage();
  }),
);

setUserFormSubmit(onFormSubmitSuccess, showErrorMessage);

setClearButtonClick();
