const resultInput = document.getElementById("result");
const input = document.querySelector("#input");

export function calculate() {
  try {
    resultInput.classList.remove("error");
    const result = eval(input.value);
    resultInput.value = result;
    input.focus();
  } catch (e) {
    resultInput.value = "ERROR!";
    resultInput.classList.add("error");
  }
}
