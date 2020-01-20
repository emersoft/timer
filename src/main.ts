export interface TimerConfig {
  time?: number;
}

export class Timer {
  private _time: number = 0;
  private startTime: number = null;
  private stopTime: number = null;
  private isActive: boolean = false;

  constructor({ time }: TimerConfig) {
    if (time) {
      this._time = time * 1000;
    }
  }

  public get time(): number {
    if (this.isActive) {
      return (this._time + (this.stopTime || new Date().getTime() - this.startTime)) / 1000;
    }
    return this._time / 1000;
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
      this.setTime();
    }
  }

  private setTime(): void {
    this._time = this._time + this.stopTime - this.startTime;
  }
}
