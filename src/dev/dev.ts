import { Timer } from '../main';

const play: HTMLElement = document.getElementById('play');
const pause: HTMLElement = document.getElementById('pause');
const timerSeconds: HTMLElement = document.getElementById('timer-seconds');
const timerClock: HTMLElement = document.getElementById('timer-clock');

const timerApp = new Timer({ time: 0 });

play.addEventListener('click', () => {
  timerApp.play();
});
pause.addEventListener('click', () => {
  timerApp.pause();
});

setInterval(() => {
  timerSeconds.textContent = '' + timerApp.time;
}, 100);

setInterval(() => {
  timerClock.textContent = timerApp.convertToTimeDisplay;
}, 100);
