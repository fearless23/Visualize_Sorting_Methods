import { menuBar } from "./components/menuBar";
menuBar();
import { selectMethod } from "./components/sorting";

import { startEl, initialize, disableAll } from "./components/elms";

let intvId: number;

const checkIfFinished = () => {
  if (globalThis.myData.state === "done") {
    clearInterval(intvId);
    const prevState = globalThis.myData.opts;
    globalThis.myData.state = "ready";
    initialize(prevState);
  }
  else{
    console.log("STATE: ",globalThis.myData.state)
  }
};

const run = () => {
  const methodNum = globalThis.myData.opts.methodNum;
  const delay = globalThis.myData.opts.delay;
  const data = globalThis.myData.data;
  selectMethod[methodNum](data, delay);
};
// Before Click of Button...
initialize();
// START BUTTON READY...
startEl.addEventListener("click", () => {
  globalThis.myData.state = "busy";
  disableAll();
  run();
  intvId = setInterval(() => checkIfFinished(), 500);
});
