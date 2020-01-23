import { drawArrWithColor, iamDone, colorNum, drawArr } from "../draw/canvas";
class QuickSort {
  delay: number;
  waitFor: number = 0;
  constructor(delay: number) {
    this.delay = delay;
  }
  partition = (A: number[], lowIdx: number, highIdx: number) => {
    const pivot = A[highIdx];
    this.waitFor += this.delay;
    colorNum(this.waitFor, pivot, highIdx, "pointer");
    let i = lowIdx - 1; // index of smaller element
    for (let j = lowIdx; j < highIdx; j++) {
      // If current element is smaller than the pivot
      if (A[j] < pivot) {
        i++;

        // swap A[i] and A[j]
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      }
    }

    // swap A[i+1] and A[high] (or pivot)
    let temp = A[i + 1];
    A[i + 1] = A[highIdx];
    A[highIdx] = temp;
    this.waitFor += 10 * this.delay;
    drawArrWithColor(this.waitFor, [...A], lowIdx, highIdx, highIdx);
    return i + 1;
  };

  // Main function
  sort = (A: number[], low: number, high: number) => {
    if (low < high) {
      const pi = this.partition(A, low, high);
      this.sort(A, low, pi - 1);
      this.sort(A, pi + 1, high);
    }
  };
}

export const quickSort = (initData: number[], delay: number) => {
  const xx = new QuickSort(delay);
  xx.sort(initData, 0, initData.length - 1);
  console.log(initData);
  iamDone(xx.waitFor, delay, "QUICK SORT");
};
