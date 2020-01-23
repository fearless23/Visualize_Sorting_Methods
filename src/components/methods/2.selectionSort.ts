import { colorNum, drawArr } from "../draw/canvas";

export const selectionSort = function*(initArr: number[]) {
  let n = initArr.length;
  let A = initArr;
  for (let i = 0; i < n; i++) {
    yield () => colorNum(A[i], i, "POINTER");
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      yield () => {
        // CHANGE COLOR OF PREV COMPARE TO DEFAULT unless PREV IS i or minIdx
        if (j - 1 !== i && minIdx !== j - 1) {
          colorNum(A[j - 1], j - 1, "DEFAULT");
        }
        // CURRENT J AS CONPARE
        colorNum(A[j], j, "COMPARE");
      };
      if (A[minIdx] > A[j]) {
        yield () => {
          // MARK PREV MIN AS DEFAULT unless prevMin is i
          if (minIdx !== i) {
            colorNum(A[minIdx], minIdx, "DEFAULT");
          }
          // MARK j which is new min Idx as Swap
          colorNum(A[j], j, "TOSWAP");
        };
        minIdx = j;
      }
    }

    const tmp = A[i];
    A[i] = A[minIdx];
    A[minIdx] = tmp;
    yield () => drawArr(A, i, null);
  }
};
