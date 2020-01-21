export interface TimerConfig {
  time?: number;
}

export class Timer {
  private _time: number = 0;
  private startTime: number = null;
  private stopTime: number = null;
  private isActive: boolean = false;
  private ONE_SECOND: number = 1000;

  constructor({ time }: TimerConfig) {
    if (Number.isInteger(time) && time > 0) {
      this._time = time * this.ONE_SECOND;
    }
  }

  public get time(): number {
    if (this.isActive) {
      return this.calculateTime() / this.ONE_SECOND;
    }
    return this._time / this.ONE_SECOND;
  }

  public get convertToTimeDisplay(): string {
    const hoursValue = '' + Math.floor(this.time / 3600);
    let hours = hoursValue.length < 2 ? ('00' + hoursValue).slice(-2) : hoursValue;
    const minutes = ('00' + Math.floor((this.time % 3600) / 60)).slice(-2);
    const seconds = ('00' + Math.floor(this.time % 60)).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  }

  public play(): void {
    if (!this.isActive) {
      this.isActive = true;
      this.stopTime = null;
      this.startTime = new Date().getTime();
    }
  }

  public pause(): void {
    if (this.isActive) {
      this.isActive = false;
      this.stopTime = new Date().getTime();
      this._time = this.calculateTime();
    }
  }

  private calculateTime(): number {
    return this._time + (this.stopTime || new Date().getTime()) - this.startTime;
  }
}
