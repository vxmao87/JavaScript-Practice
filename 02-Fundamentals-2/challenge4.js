function calcTip(currentBill) {
  const tipPercent = (currentBill >= 50 && currentBill <= 300) ? 0.15 : 0.2;
  return currentBill * tipPercent;
}

function calcAverage(billArray) {
  let sum = 0;
  for (let billAmount of billArray) {
    sum += billAmount;
  }
  return sum / billArray.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let bill of bills) {
  const tip = calcTip(bill);
  tips.push(tip);
  totals.push(bill + tip);
}

console.log(tips);
console.log(totals);
console.log(`The average final bill is ${calcAverage(totals).toFixed(2)}`);
