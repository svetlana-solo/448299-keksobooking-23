import { createAds } from './data.js';
import { printAds } from './map-canvas.js';
import { disablePage, allowPage } from './form.js';
const QUANTITY = 10;
const similarAds = createAds(QUANTITY);
printAds(similarAds);
//console.log(similarAds);

disablePage();
//allowPage();
