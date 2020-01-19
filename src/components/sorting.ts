import {} from "./canvas";
import { drawArr, colorNum } from "./canvas";

const bubbleSort = xxx => {
  let n = xxx.length - 1;
  let nextPass = true;
  let arr = xxx;
  let t = 0;
  let pass = 1;
  while (nextPass) {
    nextPass = false;
    for (let i = 0; i < n; i++) {
      t += globalThis.myData.speed;
      const curr = arr[i];
      const next = arr[i + 1];
      setTimeout(colorNum, t, arr[i], i, "pointer");
      setTimeout(colorNum, t, arr[i + 1], i + 1, "comparing");
      if (curr > next) {
        t += globalThis.myData.speed;
        setTimeout(colorNum, t, arr[i + 1], i + 1, "swap");
        arr[i] = next;
        arr[i + 1] = curr;
        nextPass = true;
      }
      t += globalThis.myData.speed;
      setTimeout(drawArr, t, [...arr], null, n+1);
    }
    n--;
    pass++;
  }
  console.log("FINISHED BUBBLE SORT");
};

const selectionSort = xxx => {
  const g = globalThis.myData;
  let n = xxx.length;
  let arr = xxx;
  let t = 0;
  for (let i = 0; i < n; i++) {
    t += g.speed;
    // setTimeout(drawArr, t, [...arr]);
    setTimeout(colorNum, t, arr[i], i, "pointer");

    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      t += g.speed;
      if (j !== i + 1 && j !== minIdx + 1) {
        setTimeout(colorNum, t, arr[j - 1], j - 1, "normal");
      }
      setTimeout(colorNum, t, arr[j], j, "comparing");
      if (arr[minIdx] > arr[j]) {
        if (minIdx !== i) {
          setTimeout(colorNum, t, arr[minIdx], minIdx, "normal");
        }
        minIdx = j;
        setTimeout(colorNum, t, arr[minIdx], minIdx, "swap");
      }
    }

    t += g.speed;
    setTimeout(colorNum, t, arr[minIdx], minIdx, "swap");
    // # Swap the found minimum element with the first element
    const tmp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = tmp;
    setTimeout(drawArr, t, [...arr], minIdx);
  }
  // setTimeout(drawArr, t, arr);
  console.log("SELECTION SORT FINISHED");
};

export const selectMethod = {
  1: bubbleSort,
  2: selectionSort
};
