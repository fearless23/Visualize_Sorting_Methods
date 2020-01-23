import { NumType } from "./types";

export const colors = {
  POINTER: "#0b6623",
  COMPARE: "#7f00ff",
  DEFAULT: "#44a6c6",
  SORTED: "#d0d0d0",
  TOSWAP: "orange",
  SWAPLEFT: "#FF9F00",
  SWAPRIGHT: "#FF4F00"
};

export const numColor = (numType: NumType) => colors[numType];
