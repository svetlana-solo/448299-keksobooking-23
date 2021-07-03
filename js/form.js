import { toggleFormElements } from './util.js';

const TYPE_MIN_COSTS = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const ROOM_CAPACITY = {
  1: '<option value="1">для 1 гостя</option>',
  2: '<option value="2">для 2 гостей</option> <option value="1"> для 1 гостя</option>',
  3: '<option value="3">для 3 гостей</option> <option value="2">для 2 гостей</option> <option value="1">для 1 гостя</option>',
  100: '<option value="0">не для гостей</option>',
};

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

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

const setPriceAtributes = () => {
  price.min = TYPE_MIN_COSTS[type.value];
  price.placeholder = TYPE_MIN_COSTS[type.value];
};

const onCheckTimeGroupChange = (evt) => {
  checkIn.value = evt.target.value;
  checkOut.value = evt.target.value;
};

const filterRoomCapacity = () => {
  capacity.innerHTML = ROOM_CAPACITY[roomNumber.value];
};

const onTypeChange = () => {
  setPriceAtributes();
};

const onRoomNumberChange = () => {
  filterRoomCapacity();
};

type.addEventListener('change', onTypeChange);
checkTimeGroup.addEventListener('change', onCheckTimeGroupChange);
roomNumber.addEventListener('change', onRoomNumberChange);

title.addEventListener('input', () => {
  title.reportValidity();
});

price.addEventListener('input', () => {
  price.reportValidity();
});

setPriceAtributes();
filterRoomCapacity();

export {
  disableForm,
  enableForm
};
