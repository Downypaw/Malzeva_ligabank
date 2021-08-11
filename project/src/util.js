import dayjs from 'dayjs';

export const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD');
}

export const formatHistoryDate = (date) => {
  return dayjs(date).format('DD.MM.YYYY');
}

export const formatNumber = (number) => {
  return Math.floor(number) === Math.ceil(number) ? number : number.toFixed(4)
}

const SHOW_TIME = 5000;

export const toast = (isTimeout = true) => {
  const template = `<div class="popup-error__modal">
      <div class="popup-error__wrapper">
        <h2 class="popup-error__title">Возникла ошибка!</h2>
          <p class="popup-error__message">
            Курсов на выбранную дату пока нет или у вас возникла проблема с подключением.
          </p>
      </div>
    </div>`;

  const newElement = document.createElement('section');
  newElement.className = 'popup-error';
  newElement.innerHTML = template;

  document.querySelector('body').append(newElement);


  if (isTimeout) {
    setTimeout(() => {
      document.querySelector('.popup-error').remove();
    }, SHOW_TIME);
  }
};
