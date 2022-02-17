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
  const inpt = document.getElementsByTagName("input");
  for (let input of inpt) {
    if (isNaN(input.value) || input.value < 0 || input.value == "") {
      input.value = 0;
      document.getElementById("err").style.display = "block";
    } else {
      alert(balance.innerText);
      // document.getElementById("err").style.display = "none";

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
  }
}

// Calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  calcMoney(true);
});
// Save button
document.getElementById("seve-btn").addEventListener("click", function () {
  calcMoney(false);
});


// akaj
document.getElementById("err-btn").addEventListener("click", function () {
  const inpt = document.getElementsByTagName("input");
  for (let input of inpt) {
    if (isNaN(input.value) || input.value < 0 || input.value == "") {
      document.getElementById("err").style.display = "block";
      input.value = 0;
    } else {
    }
  }
});

const inpt = document.getElementsByTagName("input");
for (let input of inpt) {
  console.log(input);
  input.addEventListener("keyup", function () {});
}
