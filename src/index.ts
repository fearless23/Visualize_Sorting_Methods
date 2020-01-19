import { selectMethod } from "./components/sorting";
import { createConsts } from "./components/data";
import { startEl, rangeEl, methodEl } from "./components/elms";

let canChangeOpt = true;
let noOfItems = 150;
let methodNum = 2;

createConsts(noOfItems);
rangeEl.valueAsNumber = noOfItems;
methodEl.selectedIndex = methodNum - 1;

rangeEl.addEventListener("change", _ => {
  if (!canChangeOpt) rangeEl.valueAsNumber = noOfItems;
  else {
    noOfItems = rangeEl.valueAsNumber;
    createConsts(noOfItems);
  }
});

methodEl.addEventListener("change", () => {
  if (!canChangeOpt) methodEl.selectedIndex = methodNum - 1;
  else {
    methodNum = methodEl.selectedIndex + 1;
  }
});

startEl.addEventListener("click", () => {
  rangeEl.removeEventListener("change", () => {});
  methodEl.removeEventListener("change", () => {});
  canChangeOpt = false;
  selectMethod[methodNum](globalThis.myData.data);
  canChangeOpt = true;
});
