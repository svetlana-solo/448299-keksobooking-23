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

const title = form.querySelector('#title');
const price = form.querySelector('#price');
const type = form.querySelector('#type');

const checkIn = form.querySelector('#timein');
const checkOut = form.querySelector('#timeout');
const checkTimeGroup = form.querySelector('.ad-form__element--time');


const typeMinCosts = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const roomCapacity = {
  1: '<option value="1">для 1 гостя</option>',
  2: '<option value="2">для 2 гостей</option> <option value="1"> для 1 гостя</option>',
  3: '<option value="3">для 3 гостей</option> <option value="2">для 2 гостей</option> <option value="1">для 1 гостя</option>',
  100: '<option value="0">не для гостей</option>',
};

const typePriceFilterChange = () => {
  price.min = typeMinCosts[type.value];
  price.placeholder = typeMinCosts[type.value];
};

const checkTimeChange = (evt) => {
  checkIn.value = evt.target.value;
  checkOut.value = evt.target.value;
};

const roomCapacityFilterChange = () => {
  capacity.innerHTML = roomCapacity[roomNumber.value];
};

type.addEventListener('change', typePriceFilterChange);
checkTimeGroup.addEventListener('change', checkTimeChange);
roomNumber.addEventListener('change', roomCapacityFilterChange);

title.addEventListener('input', () => {
  title.reportValidity();
});

price.addEventListener('input', () => {
  price.reportValidity();
});

typePriceFilterChange();
roomCapacityFilterChange();
typePriceFilterChange();

export {
  disableForm,
  enableForm,
  typePriceFilterChange
};
