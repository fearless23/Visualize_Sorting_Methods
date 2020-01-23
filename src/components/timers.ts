export class Timer {
  callback;
  delay: number;
  timerId: number;
  start: number;
  remaining: number;
  constructor(callback, delay: number) {
    this.callback = callback;
    this.delay = delay;
    this.remaining = delay;
    this.resume(true);
  }

  pause() {
    window.clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start + 100;
  }

  clear() {
    window.clearTimeout(this.timerId);
    this.callback = () => null;
  }

  resume(init?: boolean) {
    this.start = Date.now();
    window.clearTimeout(this.timerId);
    if(this.remaining > 0){
      this.timerId = window.setTimeout(this.callback, this.remaining);
    }
  }
}
