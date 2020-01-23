import {
  startEl,
  pauseEl,
  resumeEl,
  stopEl,
  sizeEl,
  speedEl,
  methodEl,
  nextEl
} from "../init";
import { SortOptions } from "../init/types";

/**
 * Set Global Data based on Size...
 */
export const setGlobalData = (size: number) => {
  globalThis.myData.size = size;
  globalThis.myData.data = [];
  for (let i = 0; i < size; i++) {
    globalThis.myData.data.push(Math.floor(10 + Math.random() * (size - 10)));
  }
};

export const resetCtrls = () => {
  startEl.removeEventListener("click", () => {});
  startEl.innerText = "WAIT";
  startEl.disabled = true;

  sizeEl.disabled = false;
  methodEl.disabled = false;
  speedEl.disabled = false;
  stopEl.classList.remove("active");
  stopEl.removeEventListener("click", () => {});
  pauseEl.classList.remove("active");
  pauseEl.removeEventListener("click", () => {});
  resumeEl.classList.remove("active");
  resumeEl.removeEventListener("click", () => {});
  nextEl.classList.remove("active");
  nextEl.removeEventListener("click", () => {});
};

export const changeBtnState = () => {
  startEl.innerText = "RUNNING";
  startEl.removeEventListener("click", () => {});
  startEl.disabled = true;
  sizeEl.removeEventListener("change", () => {});
  sizeEl.disabled = true;
  methodEl.removeEventListener("change", () => {});
  methodEl.disabled = true;
  speedEl.removeEventListener("change", () => {});
  speedEl.disabled = true;

  stopEl.classList.add("active");
  pauseEl.classList.add("active");
  resumeEl.classList.remove("active");
  nextEl.classList.remove("active");
};

export const isState = state => globalThis.myData.state === state;
export const setState = state => (globalThis.myData.state = state);
export const prevOpts = () => {
  const { speed, mIdx, size } = globalThis.myData;
  return <SortOptions>{ speed, mIdx, size };
};
