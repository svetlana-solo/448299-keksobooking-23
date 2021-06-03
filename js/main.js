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

const getRandomInteger = function (min, max) {
  if (min >= max) {
    return 'Первое число должно быть меньше второго';
  }
  if (checkPeriod(min, max)) {
    return 'Число должно быть положительное';
  }
  if (checkType(min, max)) {
    return 'Введите число';
  }
  return Math.floor(getRandomNumberInPeriod(min, max));
};
//не могу пока понять почему не работет проверка по типу и как ее сделать универсальной, чтобы она проверяла не только min, max, а любые заданные параметры.

getRandomInteger(5, 9);

const getRandomFloatNumber = function (min, max, decimalPlaces) {
  if (min >= max) {
    return 'Первое число должно быть меньше второго ';
  }
  if (checkPeriod(min, max)) {
    return 'Число должно быть положительное';
  }
  if (checkType(min, max)) {
    return 'Введите число';
  }
  if (decimalPlaces < 0) {
    return 'Укажите положительное количество цифр после запятой';
  }
  return +(getRandomNumberInPeriod(min, max).toFixed(decimalPlaces));
};

getRandomFloatNumber(5, 9, 3);
