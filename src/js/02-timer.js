import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const dateDay = document.querySelector('[data-days]');
const dateHour = document.querySelector('[data-hours]');
const dateMinute = document.querySelector('[data-minutes]');
const dateSecond = document.querySelector('[data-seconds]');

const DELAY = 1000;
let timer = 0;

startBtn.addEventListener('click', onStartBtn);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    timer = selectedDates[0] - new Date();
    startBtn.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);

function onStartBtn() {
  setInterval(setTime, DELAY);
  startBtn.setAttribute('disabled', 'disabled');
}

function setTime() {
  timeReduction(timer);
  const { days, hours, minutes, seconds } = convertMs(timer);
  dateDay.textContent = days;
  dateHour.textContent = hours;
  dateMinute.textContent = minutes;
  dateSecond.textContent = seconds;
  // console.log(timer)
}

function timeReduction(time) {
  timer = time - DELAY;
  return timer;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
