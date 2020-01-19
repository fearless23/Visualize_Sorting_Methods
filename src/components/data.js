const n = 400;
const speed = 3;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 102;
canvas.height = window.innerHeight - 102;
const colWidth = Math.floor(canvas.width / n);
const factor = canvas.height / n;

const data = [];
for (let i = 0; i < n; i++) {
  const intt = Math.floor(Math.random() * n);
  data.push(intt);
}
