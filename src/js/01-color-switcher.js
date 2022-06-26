const colorRandom = document.querySelector('[data-start]');
const colorRandomStop = document.querySelector('[data-stop]');
const backgroundColorBody = document.querySelector('body');
colorRandomStop.setAttribute('disabled', 'disabled');

let interval = null; // переменная id интервала 
const bodyChangeColor = () => {
    colorRandom.setAttribute("disabled", "disabled");
    colorRandomStop.removeAttribute('disabled');

    if (colorRandom.hasAttribute('disabled')); {
    colorRandomStop.removeAttribute('disabled'); 
}
    const startInterval = setInterval(() => {
      backgroundColorBody.style.backgroundColor = getRandomHexColor();
    }, 1000);
  
    return interval = startInterval;
};

colorRandomStop.addEventListener('click', () => {
   colorRandomStop.setAttribute('disabled', 'disabled'); 
   colorRandom.removeAttribute('disabled');
   return  clearInterval(interval);
       
});
    
colorRandom.addEventListener('click', bodyChangeColor);    


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}