import { colorNum, drawNum, drawArr } from "./canvas";

const iamDone = (waitFor: number, delay: number, sortMethod: string) => {
  setTimeout(() => {
    globalThis.myData.state = "done";
  }, waitFor + delay);
  console.log("FINISHED: ", sortMethod);
};

const bubbleSort = (initArr: number[], delay: number) => {
  let n = initArr.length - 1;
  let nextPass = true;
  let A = initArr;
  let waitFor = 0;
  let pass = 1;
  while (nextPass) {
    nextPass = false;
    for (let i = 0; i < n; i++) {
      waitFor += delay;
      const curr = A[i];
      const next = A[i + 1];
      setTimeout(colorNum, waitFor, A[i], i, "pointer");
      setTimeout(colorNum, waitFor, A[i + 1], i + 1, "comparing");
      if (curr > next) {
        waitFor += delay;
        setTimeout(colorNum, waitFor, A[i + 1], i + 1, "swap");
        A[i] = next;
        A[i + 1] = curr;
        nextPass = true;
      }
      waitFor += delay;
      setTimeout(drawArr, waitFor, [...A], null, n + 1);
    }
    n--;
    pass++;
  }
  iamDone(waitFor, delay, "BUBBLE SORT");
};

const selectionSort = (initArr: number[], delay: number) => {
  let n = initArr.length;
  let A = initArr;
  let waitFor = 0;
  for (let i = 0; i < n; i++) {
    waitFor += delay;
    setTimeout(colorNum, waitFor, A[i], i, "pointer");

    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      waitFor += delay;
      if (j !== i + 1 && j !== minIdx + 1) {
        setTimeout(colorNum, waitFor, A[j - 1], j - 1, "normal");
      }
      setTimeout(colorNum, waitFor, A[j], j, "comparing");
      if (A[minIdx] > A[j]) {
        if (minIdx !== i) {
          setTimeout(colorNum, waitFor, A[minIdx], minIdx, "normal");
        }
        minIdx = j;
        setTimeout(colorNum, waitFor, A[minIdx], minIdx, "swap");
      }
    }

    waitFor += delay;
    setTimeout(colorNum, waitFor, A[minIdx], minIdx, "swap");
    const tmp = A[i];
    A[i] = A[minIdx];
    A[minIdx] = tmp;
    setTimeout(drawArr, waitFor, [...A], minIdx);
  }
  iamDone(waitFor, delay, "SELECTION SORT");
};

const insertionSort = (initArr: number[], delay: number) => {
  const n = initArr.length;
  let A = initArr;
  let waitFor = 0;
  for (let i = 1; i < n; ++i) {
    waitFor += delay;
    setTimeout(colorNum, waitFor, A[i], i, "pointer");
    let curr = A[i];
    let j = i - 1;

    while (j >= 0 && A[j] > curr) {
      waitFor += delay;
      setTimeout(colorNum, waitFor, A[j], j, "comparing");
      A[j + 1] = A[j];
      j = j - 1;
    }
    A[j + 1] = curr;
    setTimeout(drawArr, waitFor, [...A]);
  }

  iamDone(waitFor, delay, "INSERTION SORT");
};

export const selectMethod = {
  1: bubbleSort,
  2: selectionSort,
  3: insertionSort
};
