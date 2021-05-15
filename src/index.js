const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
start.addEventListener("click", pressStart);
stop.addEventListener("click", pressStop);

let intervalId='null';
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColorBody() {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.background = colors[randomColor];
}

function pressStart() {
  start.disabled = true;
  intervalId=setInterval(randomColorBody, 1000);
};

function pressStop() {
  clearInterval(intervalId);
  start.disabled = false;
   };

