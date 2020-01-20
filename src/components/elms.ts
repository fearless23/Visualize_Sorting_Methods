import { initData, setSize, setOpts } from "./data";

export const startEl = <HTMLButtonElement>document.getElementById("start");
export const sizeEl = <HTMLInputElement>document.getElementById("size");
export const speedEl = <HTMLInputElement>document.getElementById("speed");
export const methodEl = <HTMLSelectElement>document.getElementById("selectm");

export const disableAll = () => {
  startEl.innerText = "STOP";
  startEl.removeEventListener("click", () => {});
  startEl.disabled = true;
  sizeEl.removeEventListener("change", () => {});
  sizeEl.disabled = true;
  methodEl.removeEventListener("change", () => {});
  methodEl.disabled = true;
  speedEl.removeEventListener("change", () => {});
  speedEl.disabled = true;
};

const isBusy = () => globalThis.myData.state === "busy";

export const initialize = (prevOpts?: {
  size: number;
  methodNum: number;
  delay: number;
}) => {
  // Start BUTTON IS READY TO BE CLICKED
  startEl.innerText = "START";
  startEl.disabled = false;

  // Initial Values are setup...
  let { size, delay, methodNum } = prevOpts || initData();
  sizeEl.valueAsNumber = size;
  methodEl.selectedIndex = methodNum - 1;
  speedEl.valueAsNumber = delay;
  setSize(size); // Sets size, factor, colWidth, data and state

  sizeEl.addEventListener("change", _ => {
    if (!isBusy()) setSize(sizeEl.valueAsNumber);
  });

  speedEl.addEventListener("change", _ => {
    if (!isBusy()) setOpts("delay", 101 - speedEl.valueAsNumber);
  });

  methodEl.addEventListener("change", () => {
    if (!isBusy()) setOpts("methodNum", methodEl.selectedIndex + 1);
  });
};
