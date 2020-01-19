export const cw = window.innerWidth - 102;
export const ch = window.innerHeight - 102;

export const createConsts = (n: number) => {
  const colWidth = (cw - 40) / n;
  const factor = (ch - 20) / n;
  const speed = 200 / n; // n=400 speed=2 gives good variation
  const data: number[] = [];
  for (let i = 0; i < n; i++) {
    data.push(Math.floor(10 + Math.random() * (n - 10)));
  }
  globalThis.myData = { colWidth, factor, speed, data };
};
