import { toggleFormElements } from './util.js';

const filters = document.querySelector('.map__filters');
const addFilterElements = Array.from(filters.elements);


const disableFilters = () => {
  filters.classList.add('map__filters--disabled');
  toggleFormElements(addFilterElements, true);
};

const enableFilters = () => {
  filters.classList.remove('map__filters--disabled');
  toggleFormElements(addFilterElements, false);
};

export {
  disableFilters,
  enableFilters
};
