import { bubbleSort } from "./1.bubbleSort";
import { selectionSort } from "./2.selectionSort";
import { insertionSort } from "./3.insertionSort";
import { mergeSort } from "./4.mergeSort";
import { quickSort } from "./5.quickSort";

export const selectMethod = {
  1: bubbleSort,
  2: selectionSort,
  3: insertionSort,
  4: mergeSort,
  5: quickSort
};
