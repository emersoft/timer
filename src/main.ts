import { FirebaseService } from '@services/firebase.service';
import { App, ActionData } from '@model/app';
import { Timer } from '@core/timer';

export function initialize(): App {
  const timer = new Timer();
  const api = new FirebaseService();

  const start = (): void => {
    timer.play();
  };

  const stop = ({ chapterId, type, userId }: ActionData): void => {
    timer.pause();
    const time = timer.time;
    api.save({ chapterId, type, userId, time });
  };

  return {
    start,
    stop,
  };
}
