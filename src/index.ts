// Bubble Sort
const passEl = document.getElementById("pass");
const startEl = document.getElementById("start");
const bubble_Sort = xxx => {
  let n = xxx.length - 1;
  let nextPass = true;
  let arr = xxx;
  let t = 0;
  let pass = 1;
  while (nextPass) {
    passEl.innerText = "Pass " + String(pass);
    nextPass = false;
    for (let i = 0; i < n; i++) {
      t += speed;
      const curr = arr[i];
      const next = arr[i + 1];
      if (curr > next) {
        arr[i] = next;
        arr[i + 1] = curr;
        setTimeout(drawArr, t, [...arr], i);
        nextPass = true;
      }
    }
    n--;
    pass++;
  }
  console.log("FINISHED");
};
startEl.addEventListener("click", () => {
  bubble_Sort(data);
});
