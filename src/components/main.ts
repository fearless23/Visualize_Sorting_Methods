import { selectMethod } from "./sorting_methods/_index";
import { initialize } from "./elms";
import { clearTimeouts } from "./canvas";

export const checkIfFinished = (intvId: NodeJS.Timeout) => {
  if (globalThis.myData.state === "done") {
    clearInterval(intvId);
    const prevState = globalThis.myData.opts;
    globalThis.myData.state = "ready";
    initialize(prevState);
  }
  if (globalThis.myData.state === "stop") {
    clearInterval(intvId);
    const prevState = globalThis.myData.opts;
    globalThis.myData.state = "ready";
    clearTimeouts();
    initialize(prevState);
  }
};

export const run = () => {
  const methodNum = globalThis.myData.opts.methodNum;
  const delay = globalThis.myData.opts.delay;
  const data = globalThis.myData.data;
  selectMethod[methodNum](data, delay);
};
