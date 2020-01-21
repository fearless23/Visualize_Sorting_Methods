import {
  opts,
  startEl,
  pauseEl,
  resumeEl,
  stopEl,
  sizeEl,
  speedEl,
  methodEl  
} from "./init";
import { initData, setSize, setOpts } from "./data";
import { resumeTimeouts, pauseTimeOuts, simpleDrawArr } from "./canvas";

export const disableAll = () => {
  globalThis.myData.state = "busy";
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
  stopEl.addEventListener("click", () => {
    globalThis.myData.state = "stop";
  });
  pauseEl.classList.add("active");
  pauseEl.addEventListener("click", () => {
    if (globalThis.myData.state === "busy") {
      globalThis.myData.state = "paused";
      startEl.innerText = "PAUSED";
      pauseTimeOuts();
      pauseEl.classList.remove("active");
      resumeEl.classList.add("active");
    }
  });
  resumeEl.classList.remove("active");
  resumeEl.addEventListener("click", () => {
    if (globalThis.myData.state === "paused") {
      globalThis.myData.state = "busy";
      startEl.innerText = "RUNNING";
      resumeTimeouts();
      pauseEl.classList.add("active");
      resumeEl.classList.remove("active");
    }
  });
};

const readyAll = () => {
  // Start BUTTON IS READY TO BE CLICKED
  startEl.innerText = "RUN";
  startEl.disabled = false;
  sizeEl.disabled = false;
  methodEl.disabled = false;
  speedEl.disabled = false;
  stopEl.classList.remove("active");
  stopEl.removeEventListener("click", () => {});
  pauseEl.classList.remove("active");
  pauseEl.removeEventListener("click", () => {});
  resumeEl.classList.remove("active");
  resumeEl.removeEventListener("click", () => {});
};

const isBusy = () => globalThis.myData.state === "busy";

export const initialize = (prevOpts?: opts) => {
  readyAll();
  // Initial Values are setup...
  let { size, delay, methodNum } = prevOpts || initData();
  sizeEl.valueAsNumber = size;
  methodEl.selectedIndex = methodNum - 1;
  speedEl.valueAsNumber = 101 - delay;
  setSize(size); // Sets size, factor, colWidth, data and state
  if(!prevOpts){
    simpleDrawArr(globalThis.myData.data);
  }

  sizeEl.addEventListener("change", _ => {
    if (!isBusy()) {
      setSize(sizeEl.valueAsNumber);
      simpleDrawArr(globalThis.myData.data);
    }
  });

  speedEl.addEventListener("change", _ => {
    if (!isBusy()) setOpts("delay", 101 - speedEl.valueAsNumber);
  });

  methodEl.addEventListener("change", () => {
    if (!isBusy()) setOpts("methodNum", methodEl.selectedIndex + 1);
  });
};