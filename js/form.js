const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');
const addFormElements = Array.from(form.elements);
const addFilterElements = Array.from(filters.elements);

const toggleElements = (elements, status) => {
  elements.forEach((item) => item.disabled = status);
};

const disablePage = () => {
  form.classList.add('ad-form--disabled');
  filters.classList.add('map__filters--disabled');
  toggleElements(addFormElements, true);
  toggleElements(addFilterElements, true);
};

const allowPage = () => {
  form.classList.remove('ad-form--disabled');
  filters.classList.remove('map__filters--disabled');
  toggleElements(addFormElements, false);
  toggleElements(addFilterElements, false);
};

export {
  disablePage,
  allowPage
};
