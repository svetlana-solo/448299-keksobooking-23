//import {
//  showAlert
//} from './utils.js';

const SERVER_GET_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const SERVER_POST_URL = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(SERVER_GET_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      //showAlert('Не удалось получить данные с сервера. Попробуйте позже');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER_POST_URL, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {
  getData,
  sendData
};
