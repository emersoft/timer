import { Timer } from '../main';

const play: HTMLElement = document.getElementById('play');
const pause: HTMLElement = document.getElementById('pause');
const timer: HTMLElement = document.getElementById('timer');

const timerApp = new Timer({});

play.addEventListener('click', () => {
  timerApp.play();
});
pause.addEventListener('click', () => {
  timerApp.pause();
});

setInterval(() => {
  timer.textContent = '' + timerApp.time;
}, 100);
