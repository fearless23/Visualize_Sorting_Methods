// Elements
export const startEl = <HTMLButtonElement>document.getElementById("start");
export const stopEl = <HTMLSpanElement>document.getElementById("stop");
export const pauseEl = <HTMLSpanElement>document.getElementById("pause");
export const nextEl = <HTMLSpanElement>document.getElementById("next");
export const resumeEl = <HTMLSpanElement>document.getElementById("resume");
export const sizeEl = <HTMLInputElement>document.getElementById("size");
export const speedEl = <HTMLInputElement>document.getElementById("speed");
export const methodEl = <HTMLSelectElement>document.getElementById("selectm");

// Menu Button Control
export const menuBtnHandler = () => {
  const menuBtn = <HTMLAnchorElement>document.getElementById("menuBtn");
  menuBtn.addEventListener("click", () => {
    const target = menuBtn.dataset.target;
    const $target = document.getElementById(target);
    menuBtn.classList.toggle("is-active");
    $target.classList.toggle("is-active");
  });
};
