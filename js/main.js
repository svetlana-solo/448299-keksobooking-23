function getRandomPositiveInteger(alfa, betta) {
  const lower = Math.ceil(Math.min(Math.abs(alfa), Math.abs(betta)));
  const upper = Math.floor(Math.max(Math.abs(alfa), Math.abs(betta)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomPositiveFloat(alfa, betta, digits = 1) {
  const lower = Math.min(Math.abs(alfa), Math.abs(betta));
  const upper = Math.max(Math.abs(alfa), Math.abs(betta));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const AVATAR_AUTHOR = 'img/avatars/user' + getRandomPositiveInteger(1, 10) + '.png';

const TYPE_LODGING = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHEK_IN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHEK_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_LODGING = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION_LODGING = [
  'уютное',
  'светлое',
  'просторное',
];

const PHOTOS_LODGING = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LOCATION_LAT = getRandomPositiveFloat(35.65000, 35.70000, 5);
const LOCATION_LNG = getRandomPositiveFloat(139.70000, 139.80000, 5);

const location = {
  lat: LOCATION_LAT,
  lng: LOCATION_LNG,
};

const getRandomArrayElement = (elements) => {
  return elements[_.getRandomPositiveInteger(0, elements.length - 1)];
};

const createOffer = () => {
  return {
    title: 'Заголовок',
    address: [location.lat, location.lng],
    price: getRandomPositiveInteger(0, 1000000),
    type: getRandomArrayElement(TYPE_LODGING),
    rooms: getRandomPositiveInteger(1, 4),
    guests: getRandomPositiveInteger(1, 4),
    checkin: getRandomArrayElement(CHEK_IN),
    checkout: getRandomArrayElement(CHEK_OUT),
    features: getRandomArrayElement(FEATURES_LODGING),
    description: getRandomArrayElement(DESCRIPTION_LODGING),
    photos: getRandomArrayElement(PHOTOS_LODGING),
    location: [LOCATION_LAT, LOCATION_LNG],
  };
};

const createAuthor = () => {
  return {
    avatar: getRandomArrayElement(AVATAR_AUTHOR),
    offer: createOffer(),
  };
};
