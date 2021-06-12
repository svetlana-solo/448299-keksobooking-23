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

const getRandomNumberInPeriod = function (min, max) {
  return min + Math.random() * (max + 1 - min);
};

const checkPeriod = function (min, max) {
  if (min < 0 || max < 0) {
    return true;
  }
  return false;
};

const checkType = function (min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return true;
  }
  return false;
};

const getRandomPositiveInteger = function (min, max) {
  if (checkType(min, max)) {
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
  if (checkType(min, max) || checkType(decimalPlaces)) {
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

const createOffer = (index) => {
  const minLat = 35.65000;
  const maxLat = 35.70000;
  const minLng = 139.70000;
  const maxLng = 139.80000;
  const decimalPlaces = 5;
  const lat = getRandomPositiveFloat(minLat, maxLat, decimalPlaces);
  const lng = getRandomPositiveFloat(minLng, maxLng, decimalPlaces);
  const randomMaxFeature = getRandomPositiveInteger(1, FEATURES.length - 1);
  const randomMaxPhoto = getRandomPositiveInteger(1, PHOTOS.length - 1);
  const min = 0;
  const minPosition = 1;
  const maxPrice = 100000;
  const maxRoom = 4;
  const maxGuest = 3;
  //Если у меня эти переменные используются только в этой функцие - могу я объявить их внутри и не выносить на самый верх?
  return {
    title: `Заголовок${index}`,
    address: `${lat}, ${lng}`,
    price: getRandomPositiveInteger(min, maxPrice),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(minPosition, maxRoom),
    guests: getRandomPositiveInteger(minPosition, maxGuest),
    checkin: getRandomArrayElement(TIMES),
    checkout: getRandomArrayElement(TIMES),
    features: FEATURES.slice(min, randomMaxFeature),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: PHOTOS.slice(min, randomMaxPhoto),
    location: {
      lat,
      lng,
    },
  };
};

const ads = new Array(10).fill('').map((currentValue, index) => {
  const correctedIndex = index + 1;
  const userNumber = correctedIndex.toString().padStart(2, '0');
  return {
    author: {
      avatar: `img/avatars/user${userNumber}.png`,
    },
    offer: createOffer(correctedIndex),
  };
});

console.log(ads);
