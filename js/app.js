// Get all input and balance
const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const clothesInput = document.getElementById("clothes-input");
const totalExpensesInput = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const saveInput = document.getElementById("save-input");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

// sum total expenses
// Calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalExpenses =
    parseInt(foodInput.value) +
    parseInt(rentInput.value) +
    parseInt(clothesInput.value);
  const balanceTotal =
    parseFloat(incomeInput.value) - parseFloat(totalExpenses);
  totalExpensesInput.innerText = totalExpenses;
  balance.innerText = balanceTotal;
});
// Save button
document.getElementById("seve-btn").addEventListener("click", function () {
  const saveAmount =
    (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
  savingAmount.innerText = saveAmount;
  remainingBalance.innerText =
    parseFloat(balance.innerText) - parseFloat(saveAmount);
});
