function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

const DELAY = 1000;
let intervalId = null;

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

isActive();

function isActive() {
  btnStart.removeAttribute('disabled');
  btnStop.removeAttribute('disabled');
}

function onBtnStartClick() {
  intervalId = setInterval(changeColor, DELAY);
  btnStart.setAttribute('disabled', 'disabled');
  btnStop.removeAttribute('disabled');
}

function changeColor() {
  let Color = getRandomHexColor();
  document.body.style.backgroundColor = Color;
}

function onBtnStopClick() {
  clearInterval(intervalId);
  btnStop.setAttribute('disabled', 'disabled');
  btnStart.removeAttribute('disabled');
}
