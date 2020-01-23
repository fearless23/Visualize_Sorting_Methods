import { numColor, cw, ch, ctx } from "../init";

/**
 * Checks if given value is not null or undefined.
 */
const exist = (z: any) => {
  return z !== null && z !== undefined;
};

/**
 * Find Column width based on global array size and canvas width.
 */
const colWidth = () => {
  const size = globalThis.myData.size;

  return Math.floor(cw / size);
};

const margin = () => {
  const size = globalThis.myData.size;
  return (cw - size * Math.floor(cw / size)) / 2;
};

/**
 * Find Factor for height global array size and canvas height.
 */
const factor = () => {
  const size = globalThis.myData.size;
  return Math.floor((ch - 20) / size);
};

const beforeColor = (bIdx: number) => (idx: number) => {
  if (idx <= bIdx) return numColor("SORTED");
  return numColor("DEFAULT");
};

const afterColor = (aIdx: number) => (idx: number) => {
  if (idx >= aIdx) return numColor("SORTED");
  return numColor("DEFAULT");
};

const getColor = (bIdx: number, aIdx: number) => {
  if (exist(bIdx)) return beforeColor(bIdx);
  if (exist(aIdx)) return afterColor(aIdx);
  return (_: number) => numColor("DEFAULT");
};

/**
 * Get Color for left, right and middle part of Merge sort
 */
const mergeSortColor = (l: number, m: number, r: number) => (i: number) => {
  if (i >= l && i <= m) return numColor("SWAPLEFT");
  if (i >= m + 1 && i <= r) return numColor("SWAPRIGHT");
  return numColor("DEFAULT");
};

const colorNumInternal = (num: number, i: number, fillStyle: string) => {
  ctx.fillStyle = fillStyle;
  ctx.fillRect(colWidth() * i + margin(), 0, colWidth(), num * factor());
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, cw, ch);
};

const clearCol = i => {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(colWidth() * i + margin(), 0, colWidth(), cw);
};

export {
  exist,
  colWidth,
  factor,
  getColor,
  mergeSortColor,
  colorNumInternal,
  clearCanvas,
  clearCol
};
