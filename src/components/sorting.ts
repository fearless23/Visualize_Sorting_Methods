import { colorNum, drawArr, iamDone } from "./canvas";

const bubbleSort = (initArr: number[], delay: number) => {
  let n = initArr.length - 1;
  let nextPass = true;
  let A = initArr;
  let waitFor = 0;
  while (nextPass) {
    nextPass = false;
    for (let i = 0; i < n; i++) {
      const curr = A[i];
      const next = A[i + 1];
      waitFor += delay;
      colorNum(waitFor, A[i], i, "pointer");
      colorNum(waitFor, A[i + 1], i + 1, "comparing");
      if (curr > next) {
        waitFor += delay;
        colorNum(waitFor, A[i + 1], i + 1, "swap");
        A[i] = next;
        A[i + 1] = curr;
        nextPass = true;
      }
      drawArr(waitFor, [...A], null, n);
    }
    n--;
  }
  iamDone(waitFor, delay, "BUBBLE SORT");
};

const selectionSort = (initArr: number[], delay: number) => {
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

const insertionSort = (initArr: number[], delay: number) => {
  const n = initArr.length;
  let A = initArr;
  let waitFor = 0;
  for (let i = 1; i < n; ++i) {
    let curr = A[i];
    waitFor += delay;
    colorNum(waitFor, A[i], i, "pointer");

    let j = i - 1;
    while (j >= 0 && A[j] > curr) {
      waitFor += delay;
      if (j !== i - 1) {
        colorNum(waitFor, A[j + 1], j + 1, "normal");
      }
      colorNum(waitFor, A[j], j, "comparing");
      j--;
    }

    if (j !== i - 1) {
      waitFor += delay;
      colorNum(waitFor, A[j + 1], j + 1, "swap");
      A.splice(i, 1); // Take from (i)th index
      A.splice(j + 1, 0, curr); // put at (j+1)th idx
      waitFor += 3 * delay;
    }
    drawArr(waitFor, [...A], null, null);
  }
  iamDone(waitFor, delay, "INSERTION SORT");
};

export const selectMethod = {
  1: bubbleSort,
  2: selectionSort,
  3: insertionSort
};
