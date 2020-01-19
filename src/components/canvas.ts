import { cw, ch } from "./data";
import { setPass } from "./elms";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = cw;
canvas.height = ch;

const colorNumInternal = (num: number, i: number, fillStyle: string) => {
  ctx.fillStyle = fillStyle;
  ctx.fillRect(
    globalThis.myData.colWidth * i + 20,
    0,
    globalThis.myData.colWidth,
    num * globalThis.myData.factor
  );
};

const clearNumInternal = (num: number, i: number) => {
  ctx.clearRect(
    globalThis.myData.colWidth * i + 20,
    0,
    globalThis.myData.colWidth,
    num * globalThis.myData.factor
  );
};

type numType = "pointer" | "comparing" | "normal";
const colors = {
  pointer: "#0b6623",
  comparing: "#7f00ff",
  normal: "#2a98ef",
  sorted: "#d0d0d0",
  swap: "orange"
};

export const colorNum = (num: number, i: number, type: numType = "normal") => {
  const fillStyle = colors[type];
  colorNumInternal(num, i, fillStyle);
};

export const drawNum = (
  oldNum: number,
  newNum: number,
  i: number,
  newNumType: numType = "normal"
) => {
  clearNumInternal(i, oldNum);
  const fillStyle = colors[newNumType];
  colorNumInternal(newNum, i, fillStyle);
};

export const drawArr = (
  arr: number[],
  beforeThisIdx?: number,
  afterThisIdx?: number
) => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // setPass(pass);
  for (let i = 0; i < arr.length; i++) {
    if (beforeThisIdx !== null) {
      if (i <= beforeThisIdx) {
        colorNumInternal(arr[i], i, colors["sorted"]);
      } else {
        colorNumInternal(arr[i], i, colors["normal"]);
      }
    }
    else if (afterThisIdx !== null) {
      if (i >= afterThisIdx) {
        colorNumInternal(arr[i], i, colors["sorted"]);
      } else {
        colorNumInternal(arr[i], i, colors["normal"]);
      }
    } else colorNumInternal(arr[i], i, colors["normal"]);
  }
};
