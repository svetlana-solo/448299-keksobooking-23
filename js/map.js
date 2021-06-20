const OfferTypeDictionary = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const mapCanvas = document.querySelector('.map__canvas');
const templateCard = document.querySelector('#card')
  .content
  .querySelector('.popup');

const printAds = (ads) => {
  ads.forEach(({ author, offer }) => {
    const cardElement = templateCard.cloneNode(true);
    cardElement.querySelector('.popup__avatar').src = author.avatar;
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = OfferTypeDictionary[offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    cardElement.querySelector('.popup__features').textContent = offer.features; //  все доступные удобства в объявлении выведены, но нужно же не совсем так
    cardElement.querySelector('.popup__description').textContent = offer.description;
    cardElement.querySelector('.popup__photo').src = offer.photos; //не поняла как для каждой фотографии
    mapCanvas.appendChild(cardElement);
  });

};

export { printAds };

