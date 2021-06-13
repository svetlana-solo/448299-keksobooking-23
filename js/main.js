const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'уютное',
  'светлое',
  'просторное',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const QUANTITY = 10;
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const DECIMAL_PLACES = 5;
const MIN_PRICE = 0;
const MAX_PRICE = 100000;
const MIN_ROOM = 1;
const MAX_ROOM = 4;
const MIN_GUEST = 1;
const MAX_GUEST = 3;

const getRandomNumberInPeriod = function (min, max) {
  return min + Math.random() * (max + 1 - min);
};

const checkPeriod = function (min, max) {
  if (min < 0 || max < 0) {
    return true;
  }
  return false;
};

const checkType = function (number) {
  if (typeof number !== 'number') {
    return true;
  }
  return false;
};

const getRandomPositiveInteger = function (min, max) {
  if (checkType(min) || checkType(max)) {
    return 'Введите число';
  }
  if (checkPeriod(min, max)) {
    return 'Число должно быть положительное';
  }
  if (min >= max) {
    return 'Первое число должно быть меньше второго';
  }
  return Math.floor(getRandomNumberInPeriod(min, max));
};

const getRandomPositiveFloat = function (min, max, decimalPlaces) {
  if (checkType(min) || checkType(max) || checkType(decimalPlaces)) {
    return 'Введите число';
  }
  if (typeof (decimalPlaces) !== 'number') {
    return 'Введите число';
  }
  if (checkPeriod(min, max)) {
    return 'Число должно быть положительное';
  }
  if (min >= max) {
    return 'Первое число должно быть меньше второго ';
  }

  if (decimalPlaces < 0) {
    return 'Укажите положительное количество цифр после запятой';
  }
  return +(getRandomNumberInPeriod(min, max).toFixed(decimalPlaces));
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createOffer = (index, location) => {
  const randomMaxFeature = getRandomPositiveInteger(1, FEATURES.length - 1);
  const randomMaxPhoto = getRandomPositiveInteger(1, PHOTOS.length - 1);
  return {
    title: `Заголовок${index}`,
    address: `${location.lat}, ${location.lng}`,
    price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(MIN_ROOM, MAX_ROOM),
    guests: getRandomPositiveInteger(MIN_GUEST, MAX_GUEST),
    checkin: getRandomArrayElement(TIMES),
    checkout: getRandomArrayElement(TIMES),
    features: FEATURES.slice(0, randomMaxFeature),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: PHOTOS.slice(0, randomMaxPhoto),
  };
};

const ads = new Array(QUANTITY).fill('').map((currentValue, index) => {
  const correctedIndex = index + 1;
  const userNumber = correctedIndex.toString().padStart(2, '0');
  const lat = getRandomPositiveFloat(MIN_LAT, MAX_LAT, DECIMAL_PLACES);
  const lng = getRandomPositiveFloat(MIN_LNG, MAX_LNG, DECIMAL_PLACES);
  const location = {
    lat,
    lng,
  };
  return {
    author: {
      avatar: `img/avatars/user${userNumber}.png`,
    },
    offer: createOffer(correctedIndex, location),
    location,
  };
});

ads;
