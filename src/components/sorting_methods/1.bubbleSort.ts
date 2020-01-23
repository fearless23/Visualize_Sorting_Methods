import { colorNum, drawArr, iamDone } from "../canvas";

export const bubbleSort = function*(initArr: number[], delay: number) {
  let n = initArr.length - 1;
  let nextPass = true;
  let A = initArr;
  let waitFor = 0;
  while (nextPass) {
    nextPass = false;
    for (let i = 0; i < n; i++) {
      const curr = A[i];
      const next = A[i + 1];
      // waitFor += delay;
      // colorNum(waitFor, A[i], i, "pointer");
      // colorNum(waitFor, A[i + 1], i + 1, "comparing");
      yield [{ draw: "single", color: "pointer", val: A[i], idx: i }];
      yield [{ draw: "single", color: "comparing", val: A[i + 1], idx: i + 1 }];
      if (curr > next) {
        // waitFor += delay;
        // colorNum(waitFor, A[i + 1], i + 1, "swap");
        A[i] = next;
        A[i + 1] = curr;
        nextPass = true;
      }
      yield A;
      // drawArr(waitFor, [...A], null, n);
    }
    n--;
  }
  // iamDone(waitFor, delay, "BUBBLE SORT");
};
