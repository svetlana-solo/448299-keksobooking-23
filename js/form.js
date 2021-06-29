import { toggleFormElements } from './util.js';

const form = document.querySelector('.ad-form');
const addFormElements = Array.from(form.elements);

const disableForm = () => {
  form.classList.add('ad-form--disabled');
  toggleFormElements(addFormElements, true);
};

const enableForm = () => {
  form.classList.remove('ad-form--disabled');
  toggleFormElements(addFormElements, false);
};

export {
  disableForm,
  enableForm
};
