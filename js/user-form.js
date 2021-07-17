import {
  sendData
} from './api.js';
import {
  form,
  address
} from './form.js';
import {
  filters
} from './filters.js';
import {
  mainMarker,
  CENTER_LAT,
  CENTER_LNG,
  setAddress
} from './map.js';
import {
  isEscEvent
} from './util.js';
import {
  initPhotoUploaders,
  resetPreview
} from './avatar.js';

const mainElement = document.querySelector('main');

const setUserFormSubmit = (onSuccess, onError) => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      onSuccess,
      onError,
      new FormData(evt.target),
    );
  });
};

const resetForm = () => {
  form.reset();
  setAddress();
};

const resetFiltersForm = () => {
  filters.reset();
};

const successTemplate = document.querySelector('#success').content;
const successDiv = successTemplate.querySelector('div');
const successElement = successDiv.cloneNode(true);

const errorTemplate = document.querySelector('#error').content;
const errorDiv = errorTemplate.querySelector('div');
const errorButton = errorDiv.querySelector('.error__button');
const errorElement = errorDiv.cloneNode(true);


const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    removeMessage();
  }
};

const onWindowClick = (evt) => {
  evt.preventDefault();
  // eslint-disable-next-line no-use-before-define
  removeMessage();
};

const removeMessage = () => {
  document.removeEventListener('click', onWindowClick);
  document.removeEventListener('keydown', onPopupEscKeydown);

  if (successElement) {
    successElement.remove();
  }
  errorButton.removeEventListener('click', onWindowClick);

  if (errorElement) {
    errorElement.remove();
  }
};

const showSuccessMessage = () => {
  mainElement.append(successElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowClick);
};

const showErrorMessage = () => {
  mainElement.append(errorElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowClick);
  errorButton.addEventListener('click', onWindowClick);
};


const resetAddForm = () => {
  resetForm();
  resetFiltersForm();
  mainMarker.setLatLng({
    lat: CENTER_LAT,
    lng: CENTER_LNG,
  });
  address.value = `${CENTER_LAT}, ${CENTER_LNG}`;
};

const setClearButtonClick = function () {
  const clearButton = document.querySelector('.ad-form__reset');
  clearButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetAddForm();
    resetPreview();
  });
};

setClearButtonClick();


const onFormSubmitSuccess = () => {
  showSuccessMessage();
  initPhotoUploaders();
  resetAddForm();
  resetPreview();
};

export {
  setUserFormSubmit,
  onFormSubmitSuccess,
  showErrorMessage,
  setClearButtonClick
};
