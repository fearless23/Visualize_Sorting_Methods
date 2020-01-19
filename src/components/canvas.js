const defaultStyle = "#2a98ef";
const drawNum = (num, i, fillStyle = defaultStyle) => {
  ctx.fillStyle = fillStyle;
  ctx.fillRect(colWidth * i, 0, colWidth, num * factor);
};

const drawArr = (arr, n) => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < arr.length; i++) {
    if (i === n) drawNum(arr[i], i, "red");
    if (i === n + 1) drawNum(arr[i], i, "orange");
    else drawNum(arr[i], i);
  }
};
