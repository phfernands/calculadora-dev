const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.querySelector("#input");
const resultInput = document.getElementById("result");
const calcButtons = document.querySelectorAll(".charKey");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

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

input.focus();

input.addEventListener("keydown", (ev) => {
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
});

calcButtons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value += button.dataset.value;
    input.focus();
  });
});

clearButton.addEventListener("click", () => {
  input.value = "";
  input.focus();
});

equalButton.addEventListener("click", calculate);

function calculate() {
  try {
    resultInput.classList.remove("error");
    const result = eval(input.value);
    resultInput.value = result;
  } catch (e) {
    resultInput.value = "ERROR!";
    resultInput.classList.add("error");
  }
}

document.getElementById("themeSwitcher").addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});

document.getElementById("copyToClipboard").addEventListener("click", (ev) => {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
});
