import { Notify } from 'notiflix/build/notiflix-notify-aio';

const start = document.querySelector('[type="submit"]');
const step = document.querySelector('[name="step"]');
const delayQ = document.querySelector('[name="delay"]');
const amount = document.querySelector('[name="amount"]');
//  let a = 
//   ;
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
  
    setTimeout(() => {
     
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
         
        resolve(
          {
            position,
            delay,
          }
        )
      } else {
        // Reject
        reject({
          position,
          delay,
        }
        )
      }
    }, +delay )
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

//генерация по

start.addEventListener('click', () => { 
  start.setAttribute('disabled', 'disabled');
  setTimeout(() => start.removeAttribute('disabled'),
    disabledButton());
   
  for (let i = 0; i < amount.value; i += 1) {
         setTimeout(() => {
         createPromise(i, delayQ.value).then(({ position, delay }) => {
           const descriptionTime = (+delay + i * +step.value);
           const positionTime = +position + 1;
            console.log(`✅ Fulfilled promise ${positionTime} in ${descriptionTime}ms`);
           Notify.success(`✅ Fulfilled promise ${positionTime} in ${descriptionTime}ms`);
         }).catch(({ position, delay }) => {
        const descriptionTime = (+delay + i * +step.value);
           const positionTime = +position + 1;
         console.log(`❌ Rejected promise ${positionTime} in ${descriptionTime}ms`);
         Notify.failure(`❌ Rejected promise ${positionTime} in ${descriptionTime}ms`);;
      });
    }, i * +step.value);
  };
  });

const stopLink = (e) => e.preventDefault();
start.addEventListener('click', stopLink);