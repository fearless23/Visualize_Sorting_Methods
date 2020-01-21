import { menuBar, startEl } from "./components/init";
import { initialize, disableAll } from "./components/elms";
import { run, checkIfFinished } from "./components/main";


document.addEventListener("DOMContentLoaded", () => {
  menuBar();
  initialize();
  startEl.addEventListener("click", () => {
    disableAll();
    run();
    const intvId = setInterval(() => checkIfFinished(intvId), 500);
  });
});
