const quantityInput = document.querySelector("#quantity");
const goalInput = document.querySelector("#goal");
const progress = document.querySelector("#progress");
const barProgress = document.querySelector("#bar");
const instructions = document.querySelector("#instr");
const btnCalculate = document.querySelector("#btnCalculate");
const info = document.querySelector("#infoContainer")


let i = 0;
// Calculate Function
const calculate = () => {
  let goalnumber = goalInput.value;
  let quantitynumber = quantityInput.value;
  let newWidth = quantitynumber / goalnumber * 100;

  console.log(newWidth);

  if (newWidth > 100) {
    barProgress.style.width = `100%`;
  } else if (newWidth < 0) {
    barProgress.style.width = `0%`;
  } else if (!newWidth) {
    barProgress.style.width = `0%`;
  } else {
    barProgress.style.width = `${newWidth}%`;
    barProgress.innerHTML = `${Math.round(newWidth)}%`;
  }
};

document.querySelector("#hiddenBar").addEventListener("click", () => {
  progress.toggleAttribute("hidden");
  btnCalculate.toggleAttribute("hidden");

});

document.querySelector("#hiddenInstructions").addEventListener("click", () => {
  instructions.toggleAttribute("hidden");
});

document.querySelector("#hiddenInfo").addEventListener("click", () => {
  info.toggleAttribute("hidden");
});