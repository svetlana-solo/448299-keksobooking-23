import {
  toggleFormElements
} from './util.js';

const TYPE_MIN_COSTS = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const MAX_ROOM_COUNT = 100;
const MIN_ROOM_CAPACITY = 0;

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
const address = form.querySelector('#address');

const setPriceAtributes = () => {
  price.min = TYPE_MIN_COSTS[type.value];
  price.placeholder = TYPE_MIN_COSTS[type.value];
};

const onCheckTimeGroupChange = (evt) => {
  checkIn.value = evt.target.value;
  checkOut.value = evt.target.value;
};

const filterRoomCapacity = () => {
  if (roomNumber.value === MAX_ROOM_COUNT && capacity.value !== MIN_ROOM_CAPACITY) {
    capacity.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (roomNumber.value !== MAX_ROOM_COUNT && capacity.value === MIN_ROOM_CAPACITY) {
    capacity.setCustomValidity('Выберите другой вариант');
  } else if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity('Выберите меньшее число гостей');
  } else {
    capacity.setCustomValidity('');
  }
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
capacity.addEventListener('change', onRoomNumberChange);

title.addEventListener('input', () => {
  title.reportValidity();
});

price.addEventListener('input', () => {
  price.reportValidity();
});

address.setAttribute('readonly', 'readonly');

setPriceAtributes();
filterRoomCapacity();

export {
  disableForm,
  enableForm,
  form,
  address
};
