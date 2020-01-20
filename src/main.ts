export interface TimerConfig {
  time?: number;
}

interface StartStopTime {
  startTime: Date;
  stopTime: Date;
}

export class Timer {
  private _time: number;
  private interval: number;
  private step: number = 50;
  constructor({ time = 0 }: TimerConfig) {
    this._time = time;
  }

  public get time(): number {
    return this._time;
  }

  public play(): void {
    this.interval = window.setInterval(() => {
      this._time += this.step;
    }, this.step);
  }

  public pause(): void {
    window.clearInterval(this.interval);
  }
}
