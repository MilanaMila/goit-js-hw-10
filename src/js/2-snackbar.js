import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconBell from '/img/bi_bell.png';
import successIcon from '/img/bi_check2-circle.png';
import iconOctagon from '/img/bi_x-octagon.png';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerCreatePromise);

document.addEventListener('DOMContentLoaded', event => {
  iziToast.info({
    position: 'topRight',
    title: 'Hello',
    message: 'WELCOME!',
    titleColor: 'white',
    titleSize: '16px',
    messageColor: 'white',
    backgroundColor: '#09f',
    iconUrl: iconBell,
  });
});

function handlerCreatePromise(evt) {
  evt.preventDefault();
  const { delay, state } = evt.target.elements;
  const delayNumber = Number(delay.value);
  const stateArr = [...state].find(item => item.checked);

  createPromise(delayNumber, stateArr)
    .then(delayNumber => {
      iziToast.success({
        position: 'topRight',
        title: 'OK',
        message: `Fulfilled promise in ${delayNumber}ms`,
        titleColor: 'white',
        titleSize: '16px',
        messageColor: 'white',
        backgroundColor: '#59a10d',
        iconUrl: successIcon,
      });
    })
    .catch(delayNumber => {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: `Rejected promise in ${delayNumber}ms`,
        titleColor: 'white',
        titleSize: '16px',
        messageColor: 'white',
        backgroundColor: '#ef4040',
        iconUrl: iconOctagon,
      });
    })
    .finally(() => {});
}

function createPromise(delay, stateArr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateArr.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

// function handlerCreatePromise(evt) {
//   evt.preventDefault();
//   const { delay, state } = evt.target.elements;
//   const delayNumber = Number(delay.value);
//   const stateArr = [...state].find(item => item.checked);

//   setTimeout(() => {
//     const promise = new Promise((resolve, reject) => {
//       if (stateArr.value === 'fulfilled') {
//         resolve(console.log(delayNumber));
//         iziToast.success({
//           position: 'topRight',
//           title: 'OK',
//           message: `Fulfilled promise in ${delayNumber}ms`,
//           titleColor: 'white',
//           titleSize: '16px',
//           messageColor: 'white',
//           backgroundColor: '#59a10d',
//           iconUrl: '../img/bi_check2-circle.png',
//         });
//       } else {
//         reject(delayNumber);
//         iziToast.error({
//           position: 'topRight',
//           title: 'Error',
//           message: `Rejected promise in ${delayNumber}ms`,
//           titleColor: 'white',
//           titleSize: '16px',
//           messageColor: 'white',
//           backgroundColor: '#ef4040',
//           iconUrl: '../img/bi_x-octagon.png',
//         });
//       }
//     });
//   }, delayNumber);
// }
