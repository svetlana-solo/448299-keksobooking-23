const returnRandomInteger = function (min, max) {
  if (min >= max) {
    return min = 'Первое число должно быть меньше последнего';
  }
  if (min < 0) {
    return min = 'Число должно быть положительное';
  }
  if (max < 0) {
    return max = 'Число должно быть положительное';
  }
  else {
    // случайное число от min до (max+1)
    const randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
  }
};

returnRandomInteger(5, 9);

const returnRandomNum = function (min, max, decimalPlace) {
  if (min >= max) {
    return min = 'Первое число должно быть меньше последнего';
  }
  if (min < 0) {
    return min = 'Число должно быть положительное';
  }
  if (max < 0) {
    return max = 'Число должно быть положительное';
  }
  if (decimalPlace < 0) {
    return decimalPlace = 'Число должно быть положительное';
  }
  else {
    // случайное число от min до (max+1)
    const randomNum = min + Math.random() * (max + 1 - min);
    return randomNum.toFixed(decimalPlace);
  }
};

returnRandomNum(5, 9, 3);


