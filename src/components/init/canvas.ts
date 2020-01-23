const canvas = <HTMLCanvasElement>document.getElementById("canvas");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 102;
export const cw = canvas.width;
export const ch = canvas.height;

export const ctx = canvas.getContext("2d");
