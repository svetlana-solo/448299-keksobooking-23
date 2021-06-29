import { createAds } from './data.js';
import { printAd } from './ad.js';
import {
  disableForm,
  enableForm
} from './form.js';
import {
  disableFilters,
  enableFilters
} from './filters.js';

const QUANTITY = 10;

const mapCanvas = document.querySelector('.map__canvas');

const disablePage = () => {
  disableForm();
  disableFilters();
};

const enablePage = () => {
  enableForm();
  enableFilters();

  const similarAds = createAds(QUANTITY);
  const firstAd = similarAds[0];
  printAd(firstAd, mapCanvas);
};

disablePage();
setTimeout(() => {
  enablePage();
}, 2000);
