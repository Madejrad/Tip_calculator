const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const butt = document.querySelector("#butt");
const result = document.querySelector("#result");

function countTip() {
  tipResult = bill.value * (1 + tip.value / 100);
  result.innerText = `Your amount to pay is ${tipResult.toFixed(2)} USD`;
  result.style.visibility = "visible";
  //   console.log(bill.value, tip.value, tipResult, result);
}

butt.addEventListener("click", (e) => {
  e.preventDefault();
  countTip();
});
