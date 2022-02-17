// Get all input and balance
const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const clothesInput = document.getElementById("clothes-input");
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const saveInput = document.getElementById("save-input");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

function calcMoney(myId) {
  if (myId == true) {
    totalExpenses.innerText =
      parseInt(foodInput.value) +
      parseInt(rentInput.value) +
      parseInt(clothesInput.value);
    balance.innerText =
      parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
  } else {
    savingAmount.innerText =
      (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
    remainingBalance.innerText =
      parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
  }
}
// sum total expenses
// Calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  calcMoney(true);
  // totalExpenses.innerText = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothesInput.value);
  // const totalExpenses =parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothesInput.value);
  // const balanceTotal =
  //   parseFloat(incomeInput.value) - parseFloat(totalExpenses);

  // balance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
});
// Save button
document.getElementById("seve-btn").addEventListener("click", function () {
  calcMoney(false);
  // const saveAmount =
  //   (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
  // savingAmount.innerText = saveAmount;
  // remainingBalance.innerText =
  //   parseFloat(balance.innerText) - parseFloat(saveAmount);
});

// incomeInput.addEventListener("keyup", function () {
//   balance.innerText =
//     parseFloat(incomeInput.value) - parseFloat(totalExpensesInput.innerText);
// });
// foodInput.addEventListener("keyup", function () {
//   totalExpensesInput.innerText =
//     parseFloat(foodInput.value) +
//     parseFloat(rentInput.value) +
//     parseFloat(clothesInput.value);
// });
