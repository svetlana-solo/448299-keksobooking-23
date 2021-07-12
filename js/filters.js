import {
  toggleFormElements
} from './util.js';

const PRICE_TYPES = {
  'LOW': 10000,
  'HIGH': 50000,
};

const ANY_FILTER = 'any';

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

const typeFilter = filters.querySelector('#housing-type');
const priceFilter = filters.querySelector('#housing-price');
const roomsFilter = filters.querySelector('#housing-rooms');
const guestsFilter = filters.querySelector('#housing-guests');
const featuresFilter = filters.querySelector('#housing-features');

const getFilterByType = (type) => typeFilter.value === ANY_FILTER || type === typeFilter.value;

const getFilterByPrice = (price) => {
  switch (priceFilter.value) {
    case 'low':
      return price < PRICE_TYPES['LOW'];
    case 'middle':
      return (price >= PRICE_TYPES['LOW']) && (price <= PRICE_TYPES['HIGH']);
    case 'high':
      return price > PRICE_TYPES['HIGH'];
    default:
      return true;
  }
};

const getFilterByRooms = (rooms) => roomsFilter.value === ANY_FILTER || rooms === parseInt(roomsFilter.value, 10);

const getFilterByGuests = (guests) => (guestsFilter.value !== ANY_FILTER) ? guests === parseInt(guestsFilter.value, 10) : true;


const getFilterByFeatures = (features) => {
  const selectedFeatures = featuresFilter.querySelectorAll('input:checked');
  //if (!features) {
  //  return false;
  //}
  return Array.from(selectedFeatures).every((input) =>
    features.includes(input.value));
};

const getFilters = ({
  offer,
}) =>
  (
    getFilterByType(offer.type) &&
    getFilterByPrice(offer.price) &&
    getFilterByRooms(offer.rooms) &&
    getFilterByGuests(offer.guests) &&
    getFilterByFeatures(offer.features)
  );


const setFilterChange = (cb) => {
  filters.addEventListener('change', () => {
    cb();
  });
};

export {
  disableFilters,
  enableFilters,
  getFilters,
  setFilterChange
};
