const passEl = <HTMLDivElement>document.getElementById("pass");
export const startEl = <HTMLButtonElement>document.getElementById("start");
export const rangeEl = <HTMLInputElement>document.getElementById("range");
export const methodEl = <HTMLSelectElement>document.getElementById("selectm");

export const setPass = (pass: number) => {
  passEl.innerText = "Pass: " + String(pass);
};
