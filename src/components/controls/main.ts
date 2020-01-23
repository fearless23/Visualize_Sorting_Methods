import { startEl, resumeEl, pauseEl, stopEl, nextEl } from "../init";
import { selectMethod } from "../methods";
import { isState, setState, prevOpts, changeBtnState } from "./helpers";
import { initialize } from "./stateManager";

const drawAnimation = (g, speed) => {
  const id = window.setInterval(() => {
    if (isState("busy")) {
      const { value, done } = g.next();
      if (done) {
        setState("done");
        console.log("done");
        clearInterval(id);
        initialize(prevOpts());
      } else value();
    }
  }, 103 - speed);
  return id;
};

const pauseHandler = (id: number) => {
  if (isState("busy")) {
    setState("paused");
    clearInterval(id);
    startEl.innerText = "PAUSED";
    pauseEl.classList.remove("active");
    nextEl.classList.add("active");
    resumeEl.classList.add("active");
  }
};

const stopHandler = (id: number) => {
  if (isState("busy") || isState("paused")) {
    setState("stopped");
    clearInterval(id);
    initialize(prevOpts());
  }
};

const startBtnClickHandler = () => {
  setState("busy");
  changeBtnState();
  const mIdx = globalThis.myData.mIdx;
  const speed = globalThis.myData.speed;
  const data = globalThis.myData.data;

  const g = selectMethod[mIdx + 1](data);
  let id = drawAnimation(g, speed);

  resumeEl.addEventListener("click", () => {
    if (isState("paused")) {
      setState("busy");
      id = drawAnimation(g, speed);
      startEl.innerText = "RUNNING";
      pauseEl.classList.add("active");
      nextEl.classList.remove("active");
      resumeEl.classList.remove("active");
    }
  });

  nextEl.addEventListener("click", () => {
    if (isState("paused")) {
      pauseHandler(id);
      const { value, done } = g.next();
      if (done) {
        setState("done");
        console.log("done");
        clearInterval(id);
        initialize(prevOpts());
      } else value();
    }
  });

  pauseEl.addEventListener("click", () => pauseHandler(id));

  stopEl.addEventListener("click", () => stopHandler(id));
};

export const main = () => {
  initialize();
  startEl.addEventListener("click", startBtnClickHandler);
};
