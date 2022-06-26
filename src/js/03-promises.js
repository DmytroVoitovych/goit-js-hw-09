import { Notify } from 'notiflix/build/notiflix-notify-aio';

const start = document.querySelector('[type="submit"]');
const step = document.querySelector('[name="step"]');
const delayQ = document.querySelector('[name="delay"]');
const amount = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
    
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve(
          {
            position,
            delay
          }
        )
      } else {
        // Reject
        reject({
          position,
          delay
        }
        )
      }
    }, delay)
  });
 
};
//функция контроля кнопки по времени
const num = 2600;
const disabledButton = () => {
  if (delayQ.value != "" && step.value != "")
  { return +delayQ.value + (+step.value * +amount.value + +num); }
  else {
   return +amount.value + +num + 400;
  }
};

//генерация по клику
start.addEventListener('click', () => {
  start.setAttribute('disabled', 'disabled');
  setTimeout(() => start.removeAttribute('disabled'),
   disabledButton());
  for (let i = 0; i < amount.value; i += 1) {
    setTimeout(() => {
      createPromise(step.value, delayQ.value).then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
           Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);;
      });
    }, i * step.value);
  };
  });

const stopLink = (e) => e.preventDefault();
start.addEventListener('click', stopLink);