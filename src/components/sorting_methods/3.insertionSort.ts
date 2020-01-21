import { colorNum, drawArr, iamDone } from "../canvas";

export const insertionSort = (initArr: number[], delay: number) => {
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
