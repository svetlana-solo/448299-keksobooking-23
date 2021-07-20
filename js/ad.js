import {
  DEFAULT_AVATAR_SRC
} from './avatar.js';

const OfferTypeDictionary = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const templateCard = document.querySelector('#card')
  .content
  .querySelector('.popup');

const setFeatures = (parentElement, features) => {
  const templateElement = parentElement.querySelector('.popup__feature');
  parentElement.innerHTML = '';
  features.forEach((feature) => {
    const featureElement = templateElement.cloneNode(true);

    featureElement.classList.remove(featureElement.classList[1]);
    featureElement.classList.add(`popup__feature--${feature}`);
    parentElement.appendChild(featureElement);
  });
};

const setPhotos = (parentElement, photos) => {
  const templateElement = parentElement.querySelector('.popup__photo');
  parentElement.innerHTML = '';
  photos.forEach((photo) => {
    const photoElement = templateElement.cloneNode(true);
    photoElement.src = photo;

    parentElement.appendChild(photoElement);
  });
};

const createCard = (ad) => {
  const {
    author,
    offer,
  } = ad;
  const cardElement = templateCard.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = author.avatar ? author.avatar : DEFAULT_AVATAR_SRC;
  if (offer.title) {
    cardElement.querySelector('.popup__title').textContent = offer.title;
  } else {
    const element = cardElement.querySelector('.popup__title');
    element && element.remove();
  }
  if (offer.address) {
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    const element = cardElement.querySelector('.popup__text--address');
    element && element.remove();
  }
  if (offer.price) {
    cardElement.querySelector('.popup__text--price').innerHTML = `${offer.price} <span>₽/ночь</span>`;
  } else {
    const element = cardElement.querySelector('.popup__text--price');
    element && element.remove();
  }
  if (offer.type) {
    cardElement.querySelector('.popup__type').textContent = OfferTypeDictionary[offer.type];
  } else {
    const element = cardElement.querySelector('.popup__type');
    element && element.remove();
  }
  if (offer.rooms || offer.quests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms || ''} комнаты для ${offer.guests || ''} гостей`;
  } else {
    const element = cardElement.querySelector('.popup__text--capacity');
    element && element.remove();
  }
  if (offer.checkin || offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin || ''}, выезд до ${offer.checkout || ''}`;
  } else {
    const element = cardElement.querySelector('.popup__text--time');
    element && element.remove();
  }
  const featuresListElement = cardElement.querySelector('.popup__features');
  if (offer.features && offer.features.length) {
    setFeatures(featuresListElement, offer.features);
  } else {
    featuresListElement.remove();
  }
  if (offer.description) {
    cardElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    const element = cardElement.querySelector('.popup__description');
    element && element.remove();
  }
  const photosListElement = cardElement.querySelector('.popup__photos');
  if (offer.photos && offer.photos.length) {
    setPhotos(photosListElement, offer.photos);
  } else {
    photosListElement.remove();
  }
  return cardElement;
};

export {
  createCard
};
