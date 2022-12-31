import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormClick);

function onFormClick(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let delayPromise = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delayPromise)
      .then(yes => {
        Notiflix.Notify.success(yes);
      })
      .catch(no => {
        Notiflix.Notify.failure(no);
      });
    delayPromise += Number(step.value);
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // Fulfill
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
        // Reject
      }
    }, delay);
  });
  return promise;
}
