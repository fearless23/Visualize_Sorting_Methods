import {
  getColor,
  mergeSortColor,
  colorNumInternal,
  clearCanvas,
  clearCol
} from "./canvasHelpers";
import { numColor } from "../init";
import { NumType } from "../init/types";

const colorNum = function(num: number, i: number, type: NumType = "DEFAULT") {
  colorNumInternal(num, i, numColor(type));
};

const colorNumWithClear = function(num: number, i: number, type: NumType = "DEFAULT") {
  clearCol(i);
  colorNumInternal(num, i, numColor(type));
};

const drawArr = (arr: number[], bIdx?: number, aIdx?: number) => {
  clearCanvas();
  const color = getColor(bIdx, aIdx);
  for (let i = 0; i < arr.length; i++) {
    colorNumInternal(arr[i], i, color(i));
  }
};

const mergeSortDrawArr = (arr: number[], l: number, m: number, r: number) => {
  clearCanvas();
  const color = mergeSortColor(l, m, r);
  for (let i = 0; i < arr.length; i++) {
    colorNumInternal(arr[i], i, color(i));
  }
};

const simpleDrawArr = (arr: number[]) => {
  clearCanvas();
  for (let i = 0; i < arr.length; i++) {
    colorNumInternal(arr[i], i, numColor("DEFAULT"));
  }
};

export { colorNum, drawArr, mergeSortDrawArr, simpleDrawArr, clearCanvas, colorNumWithClear };
