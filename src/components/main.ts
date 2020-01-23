import { selectMethod } from "./sorting_methods/_index";
import { initialize } from "./elms";
import { clearTimeouts } from "./canvas";

export const checkIfFinished = (intvId: number) => {
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
  const g = selectMethod[1](data, delay);
  const res = g.next().value;
  console.log(res);
  const res1 = g.next().value;
  console.log(res1);
  const res2 = g.next().value;
  console.log(res2);
  const res3 = g.next().value;
  console.log(res3);
  const res4 = g.next().value;
  console.log(res4);
};
