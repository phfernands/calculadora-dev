import { calculate } from "./calculateFunction.js";

const input = document.querySelector("#input");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

export function typingCalc(ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }

  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (ev.key === "Enter") {
    calculate();
  }
}

export function typingOnClick(btn) {
  btn.addEventListener("click", () => {
    input.value += btn.dataset.value;
    input.focus();
  });
}

export function clearChar() {
  input.value = "";
  input.focus();
}
