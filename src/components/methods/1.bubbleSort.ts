import { colorNum, drawArr, colorNumWithClear } from "../draw/canvas";

export const bubbleSort = function*(initArr: number[]) {
  let n = initArr.length - 1;
  let nextPass = true;
  let A = initArr;
  drawArr(A, null, n + 1);
  while (nextPass) {
    nextPass = false;
    for (let i = 0; i < n; i++) {
      const curr = A[i];
      const next = A[i + 1];
      yield () => {
        colorNumWithClear(A[i - 1], i - 1, "DEFAULT");
        colorNum(A[i], i, "POINTER");
      };
      if (curr > next) {
        yield () => colorNumWithClear(A[i + 1], i + 1, "TOSWAP");
        A[i] = next;
        A[i + 1] = curr;
        nextPass = true;
      }
    }
    yield () => drawArr(A, null, n);
    n--;
  }
};
