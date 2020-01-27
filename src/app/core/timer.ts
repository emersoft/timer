export class Timer {
  private _time: number = 0;
  private startTime: number = null;
  private stopTime: number = null;
  private ONE_SECOND: number = 1000;

  public get time(): number {
    if (!this.stopTime) {
      throw new Error('Timer must been stopped');
    }
    return this.calculateTime() / this.ONE_SECOND;
  }

  public play(): void {
    this.startTime = new Date().getTime();
  }

  public pause(): void {
    this.stopTime = new Date().getTime();
  }

  private calculateTime(): number {
    return this._time + (this.stopTime || new Date().getTime()) - this.startTime;
  }
}
