import { drawArrWithColor, iamDone } from "../draw/canvas";
class MergeSort {
  delay: number;
  waitFor: number = 0;
  constructor(delay: number) {
    this.delay = delay;
  }
  // Merges two subarrays of arr[] => arr[l..m] & arr[m+1..r]
  merge = (A: number[], l: number, m: number, r: number) => {
    this.waitFor += this.delay;
    drawArrWithColor(this.waitFor, [...A], l, m, r);
    // Find sizes of two subarrays to be merged
    let lSize = m - l + 1;
    let rSize = r - m;

    /* Create temp arrays */
    const L: number[] = [];
    const R: number[] = [];

    /*Copy data to temp arrays*/
    for (let i = 0; i < lSize; ++i) L.push(A[l + i]);
    for (let j = 0; j < rSize; ++j) R.push(A[m + 1 + j]);

    /* Merge the temp arrays */

    // Initial indexes of first and second subarrays
    let i = 0;
    let j = 0;

    // Initial index of merged subarry array
    let k = l;
    while (i < lSize && j < rSize) {
      if (L[i] <= R[j]) {
        A[k] = L[i];
        i++;
      } else {
        A[k] = R[j];
        j++;
      }
      k++;
    }

    /* Copy remaining elements of L[] if any */
    while (i < lSize) {
      A[k] = L[i];
      i++;
      k++;
    }

    /* Copy remaining elements of R[] if any */
    while (j < rSize) {
      A[k] = R[j];
      j++;
      k++;
    }
    this.waitFor += this.delay;
    drawArrWithColor(this.waitFor, [...A], l, m, r);
  };

  // Main function
  sort = (A: number[], l: number, r: number) => {
    if (l < r) {
      let m = Math.floor((l + r) / 2);
      this.sort(A, l, m);
      this.sort(A, m + 1, r);
      this.merge(A, l, m, r);
    }
  };
}

export const mergeSort = (initData: number[], delay: number) => {
  const xx = new MergeSort(delay);
  xx.sort(initData, 0, initData.length - 1);
  iamDone(xx.waitFor, delay, "MERGE SORT");
};
