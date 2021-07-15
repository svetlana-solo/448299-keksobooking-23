const ALERT_SHOW_TIME = 5000;

const showAlert = (message = 'Не удалось получить данные') => {

  const alertContainer = document.createElement('div');
  alertContainer.style.display = 'block';
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

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

export {
  getRandomPositiveInteger,
  getRandomArrayElement,
  getRandomPositiveFloat,
  toggleFormElements,
  showAlert,
  isEscEvent,
  debounce
};
