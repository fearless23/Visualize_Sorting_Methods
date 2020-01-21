import { colorNum, drawArr, iamDone } from "../canvas";

export const selectionSort = (initArr: number[], delay: number) => {
  let n = initArr.length;
  let A = initArr;
  let waitFor = 0;
  for (let i = 0; i < n; i++) {
    waitFor += delay;
    colorNum(waitFor, A[i], i, "pointer");

    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      waitFor += delay;
      if (j !== i + 1 && j !== minIdx + 1) {
        colorNum(waitFor, A[j - 1], j - 1, "normal");
      }
      colorNum(waitFor, A[j], j, "comparing");
      if (A[minIdx] > A[j]) {
        if (minIdx !== i) {
          colorNum(waitFor, A[minIdx], minIdx, "normal");
        }
        minIdx = j;
        colorNum(waitFor, A[minIdx], minIdx, "swap");
      }
    }

    waitFor += delay;
    colorNum(waitFor, A[minIdx], minIdx, "swap");
    const tmp = A[i];
    A[i] = A[minIdx];
    A[minIdx] = tmp;
    drawArr(waitFor, [...A], i, null);
  }
  iamDone(waitFor, delay, "SELECTION SORT");
};
