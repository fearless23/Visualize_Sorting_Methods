// Elements
export const startEl = <HTMLButtonElement>document.getElementById("start");
export const stopEl = <HTMLSpanElement>document.getElementById("stop");
export const pauseEl = <HTMLSpanElement>document.getElementById("pause");
export const resumeEl = <HTMLSpanElement>document.getElementById("resume");
export const sizeEl = <HTMLInputElement>document.getElementById("size");
export const speedEl = <HTMLInputElement>document.getElementById("speed");
export const methodEl = <HTMLSelectElement>document.getElementById("selectm");
export const aboutEl = <HTMLAnchorElement>document.getElementById("about");
export const modalEl = <HTMLDivElement>document.getElementById("modal");
export const modalCloseEl = <HTMLButtonElement>(
  document.getElementById("modalClose")
);

// Menu Button Control
export const menuBar = () => {
  const menuBtn = <HTMLAnchorElement>document.getElementById("menuBtn");
  menuBtn.addEventListener("click", () => {
    const target = menuBtn.dataset.target;
    const $target = document.getElementById(target);
    menuBtn.classList.toggle("is-active");
    $target.classList.toggle("is-active");
  });
};

export type numType =
  | "pointer"
  | "comparing"
  | "normal"
  | "sorted"
  | "swap"
  | "swapLeft"
  | "swapRight";
export type opts = {
  size: number;
  methodNum: number;
  delay: number;
};
export const colors = {
  pointer: "#0b6623",
  comparing: "#7f00ff",
  normal: "#44a6c6",
  sorted: "#d0d0d0",
  swap: "orange",
  swapLeft: "#FF9F00",
  swapRight: "#FF4F00"
};

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
export const cw = window.innerWidth - 102;
export const ch = window.innerHeight - 102;
canvas.width = cw;
canvas.height = ch;
export const ctx = canvas.getContext("2d");
