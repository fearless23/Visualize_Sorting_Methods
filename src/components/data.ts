import { opts, cw, ch } from "./init";

export const colWidth = () => globalThis.myData.colWidth;
export const factor = () => globalThis.myData.factor;
export const exist = (z: any) => z !== null && z !== undefined;

export const setOpts = (prop: string, val: number | string) => {
  globalThis.myData.opts[prop] = val;
};

export const setSize = (size: number) => {
  globalThis.myData.opts.size = size;
  globalThis.myData.state = "ready";
  globalThis.myData.colWidth = (cw - 40) / size;
  globalThis.myData.factor = (ch - 20) / size;
  globalThis.myData.data = [];
  for (let i = 0; i < size; i++) {
    globalThis.myData.data.push(Math.floor(10 + Math.random() * (size - 10)));
  }
  
};

export const initData = () => {
  globalThis.myTimeouts = [];
  const size = 150;
  const delay = 3;
  const methodNum = 5;
  const colWidth = (cw - 40) / size;
  const factor = (ch - 20) / size;
  const data: number[] = [];
  for (let i = 0; i < size; i++) {
    data.push(Math.floor(10 + Math.random() * (size - 10)));
  }
  const opts: opts = { delay, methodNum, size };
  globalThis.myData = {
    colWidth,
    factor,
    data,
    state: "ready",
    opts
  };
  return opts;
};
