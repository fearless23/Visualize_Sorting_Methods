import { colors, numType, cw, ch, ctx } from "./init";
import { colWidth, factor, exist } from "./data";
import { Timer } from "./timers";

const colorNumInternal = (num: number, i: number, fillStyle: string) => {
  ctx.fillStyle = fillStyle;
  ctx.fillRect(colWidth() * i + 20, 0, colWidth(), num * factor());
};

const beforeColor = (bIdx: number) => (idx: number) => {
  if (idx <= bIdx) return colors["sorted"];
  return colors["normal"];
};

const afterColor = (aIdx: number) => (idx: number) => {
  if (idx >= aIdx) return colors["sorted"];
  return colors["normal"];
};

const getColor = (bIdx, aIdx) => {
  if (exist(bIdx)) {
    return beforeColor(bIdx);
  }

  if (exist(aIdx)) {
    return afterColor(aIdx);
  }

  return (idx: number) => colors["normal"];
};

const pushTimeout = (t: Timer) => {
  globalThis.myTimeouts.push(t);
};

export const clearCanvas = () => ctx.clearRect(0, 0, cw, ch);
export const colorNum = function(
  waitFor: number,
  num: number,
  i: number,
  type: numType = "normal"
) {
  pushTimeout(
    new Timer(() => {
      const fillStyle = colors[type];
      colorNumInternal(num, i, fillStyle);
    }, waitFor)
  );
};
export const drawArr = (
  waitFor: number,
  arr: number[],
  bIdx?: number,
  aIdx?: number
) => {
  pushTimeout(
    new Timer(() => {
      clearCanvas();
      const color = getColor(bIdx, aIdx);
      for (let i = 0; i < arr.length; i++) {
        colorNumInternal(arr[i], i, color(i));
      }
    }, waitFor)
  );
};

const getColorForMergeSort = (l: number, m: number, r: number) => (
  i: number
) => {
  if (i >= l && i <= m) return colors["swapLeft"];
  if (i >= m + 1 && i <= r) return colors["swapRight"];
  return colors["normal"];
};
export const drawArrWithColor = (
  waitFor: number,
  arr: number[],
  l: number,
  m: number,
  r: number
) => {
  pushTimeout(
    new Timer(() => {
      clearCanvas();
      const color = getColorForMergeSort(l, m, r);
      for (let i = 0; i < arr.length; i++) {
        colorNumInternal(arr[i], i, color(i));
      }
    }, waitFor)
  );
};
export const simpleDrawArr = (arr: number[]) => {
  clearCanvas();
  for (let i = 0; i < arr.length; i++) {
    colorNumInternal(arr[i], i, colors["normal"]);
  }
};

export const clearTimeouts = () => {
  globalThis.myTimeouts.forEach((t: Timer) => {
    t.clear();
  });
  globalThis.myTimeouts = [];
};

export const pauseTimeOuts = () => {
  globalThis.myTimeouts.forEach((t: Timer) => {
    t.pause();
  });
};

export const resumeTimeouts = () => {
  globalThis.myTimeouts.forEach((t: Timer) => {
    t.resume();
  });
};

export const iamDone = (waitFor: number, delay: number, sortMethod: string) => {
  pushTimeout(
    new Timer(() => {
      globalThis.myData.state = "done";
      console.log("FINISHED: ", sortMethod);
    }, waitFor + delay)
  );
};
