import { clearChar, typingCalc, typingOnClick } from "./typingFunction.js";
import { calculate } from "./calculateFunction.js";
import { changeTheme } from "./changeThemeFunction.js";
import { copyToClipboard } from "./copyToClipboard.js";

const input = document.querySelector("#input");

const calcButtons = document.querySelectorAll(".charKey");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

input.focus();
input.addEventListener("keydown", typingCalc);

calcButtons.forEach(typingOnClick);

clearButton.addEventListener("click", clearChar);

equalButton.addEventListener("click", calculate);

document.getElementById("themeSwitcher").addEventListener("click", changeTheme);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);
