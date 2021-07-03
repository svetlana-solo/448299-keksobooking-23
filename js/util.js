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

const toggleFormElements = (elements, status) => {
  elements.forEach((item) => item.disabled = status);
};

export { getRandomPositiveInteger, getRandomArrayElement, getRandomPositiveFloat, toggleFormElements };
