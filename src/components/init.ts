export const menuBar = () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
};

export const startEl = <HTMLButtonElement>document.getElementById("start");
export const stopEl = <HTMLSpanElement>document.getElementById("stop");
export const pauseEl = <HTMLSpanElement>document.getElementById("pause");
export const resumeEl = <HTMLSpanElement>document.getElementById("resume");
export const sizeEl = <HTMLInputElement>document.getElementById("size");
export const speedEl = <HTMLInputElement>document.getElementById("speed");
export const methodEl = <HTMLSelectElement>document.getElementById("selectm");
export const aboutEl = <HTMLAnchorElement>document.getElementById("about");
export const modalEl = <HTMLDivElement>document.getElementById("modal");
export const modalCloseEl = <HTMLButtonElement>document.getElementById("modalClose");

export const cw = window.innerWidth - 102;
export const ch = window.innerHeight - 102;
export type numType = "pointer" | "comparing" | "normal" | "sorted" | "swap";
export type opts = {
  size: number;
  methodNum: number;
  delay: number;
};
export const colors = {
  pointer: "#0b6623",
  comparing: "#7f00ff",
  normal: "#44a6c6",
  sorted: "#d0d0d0",
  swap: "orange"
};

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
canvas.width = cw;
canvas.height = ch;
export const ctx = canvas.getContext("2d");
