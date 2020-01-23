import { startEl, sizeEl, speedEl, methodEl, cw } from "../init";
import { setGlobalData, resetCtrls } from "./helpers";
import { simpleDrawArr } from "../draw/canvas";
import { SortOptions } from "../init/types";

const DEFAULTOPTS: SortOptions = {
  size: 150,
  speed: 75,
  mIdx: 0
};

export const initialize = (prevOpts?: SortOptions) => {
  resetCtrls();
  const opts = prevOpts || DEFAULTOPTS;
  const size = opts.size || 150;
  const speed = opts.speed || 75;
  const mIdx = opts.mIdx || 0;

  globalThis.myData = {
    state: "ready",
    speed,
    mIdx,
    size
  };

  // Initial Values are setup...
  sizeEl.valueAsNumber = size;
  speedEl.valueAsNumber = speed;
  methodEl.selectedIndex = mIdx;

  setGlobalData(size);
  if (!prevOpts) {
    simpleDrawArr(globalThis.myData.data);
  }

  sizeEl.addEventListener("change", _ => {
    setGlobalData(sizeEl.valueAsNumber);
    simpleDrawArr(globalThis.myData.data);
  });

  speedEl.addEventListener("change", _ => {
    globalThis.myData.speed = speedEl.valueAsNumber;
  });

  methodEl.addEventListener("change", () => {
    globalThis.myData.mIdx = methodEl.selectedIndex;
  });
  // START BUTTON IS READY....
  startEl.innerText = "RUN";
  startEl.disabled = false;
};
