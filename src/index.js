const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const start = document.querySelector('[data-action="start"]');
console.log(start);
const stop = document.querySelector('[data-action="stop"]');
console.log(stop);
const bodyList = document.querySelector('.body');
start.addEventListener("click", pressStart);
stop.addEventListener("click", pressStop);

//const bodyColor=document.body.classList.add('color-change');
let intervalId='null';
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function randomColorBody(){
//   const randomColor = randomIntegerFromInterval(0, colors.length - 1);
//  body.style.background=colors[randomColor];

// }
function randomColorBody() {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.background = colors[randomColor];

}




function pressStart() {
// const randomColor = randomIntegerFromInterval(0, colors.length - 1);
//   const bodyColor = document.body.style.background = colors[randomColor];
  start.disabled = true;
  intervalId=setInterval(randomColorBody, 1000);
// start.disabled = true;

  //const bodyColor = document.body.style.background='randomColor[randomIntegerFromInterval]';
 // const startDisabled = document.start.add('disabled');
//start.insertAdjacentElement('beforeend',startDisabled)  
   //bodyList.insertAdjacentHTML('beforeend',bodyColor );
  

};

function pressStop() {
  intervalId=clearInterval(randomColorBody,1000);
  start.disabled = false;
 const bodyColor = document.body.style.background='';
 //clearInterval(randomColorBody)
};

