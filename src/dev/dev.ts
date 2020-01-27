import { initialize } from '../main';

const play: HTMLElement = document.getElementById('play');
const pause: HTMLElement = document.getElementById('pause');
const chapterIdElem = <HTMLInputElement>document.getElementById('chapterId');
const typeElem = <HTMLInputElement>document.getElementById('type');
const userIdElem = <HTMLInputElement>document.getElementById('userId');

const timerApp = initialize();

play.addEventListener('click', () => {
  timerApp.start();
});
pause.addEventListener('click', () => {
  const chapterId = chapterIdElem.value;
  const type = typeElem.value;
  const userId = userIdElem.value;
  timerApp.stop({ chapterId, type, userId });
});
