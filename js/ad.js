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

const printAd = (ad, insertTo) => {
  const { author, offer } = ad;
  const cardElement = templateCard.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').innerHTML = `${offer.price} <span>₽/ночь</span>`;
  cardElement.querySelector('.popup__type').textContent = OfferTypeDictionary[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  const featuresListElement = cardElement.querySelector('.popup__features');
  setFeatures(featuresListElement, offer.features);
  cardElement.querySelector('.popup__description').textContent = offer.description;
  const photosListElement = cardElement.querySelector('.popup__photos');
  setPhotos(photosListElement, offer.photos);
  insertTo.appendChild(cardElement);
};

export { printAd };
