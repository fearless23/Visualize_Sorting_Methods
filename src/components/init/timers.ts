class Timer {
  cb: any;
  waitFor: number;
  id: number;
  start: number;
  left: number;
  constructor(cb: any, waitFor: number) {
    this.cb = cb;
    this.waitFor = waitFor;
    this.left = waitFor;
    this.resume();
  }

  pause() {
    window.clearTimeout(this.id);
    this.left -= Date.now() - this.start + 100;
  }

  clear() {
    window.clearTimeout(this.id);
    this.cb = () => null;
  }

  resume() {
    this.start = Date.now();
    window.clearTimeout(this.id);
    if (this.left > 0) {
      this.id = window.setTimeout(this.cb, this.left);
    }
  }
}

type TimerOp = "clear" | "resume" | "pause";

export const createTimer = (cb: any, waitFor: number) => new Timer(cb, waitFor);
export const runTimerOp = (timerOp: TimerOp) => {
  globalThis.myTimers.forEach((timer: Timer) => timer[timerOp]());
  if (timerOp === "clear") globalThis.myTimers = [];
};

export const pushTimer = (cb: any, waitFor: number) => {
  globalThis.myTimers.push(createTimer(cb, waitFor));
};
