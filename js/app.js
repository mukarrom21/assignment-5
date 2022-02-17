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

// string on negative error handling
// const inpt = document.getElementsByTagName("input");
//   for (let input of inpt)
/*
function calcMoney(myId) {
  // string on negative error handling
  const inpt = document.getElementsByTagName("input");
  for (let input of inpt) {
    // if (isNaN(incomeInput.value)==false || isNaN(totalExpensesAmount)==false) {
    //   document.getElementById("warning").style.display = "block";
    // }
    // calculate
    if (myId == true) {
      let totalExpensesAmount =
        parseInt(foodInput.value) +
        parseInt(rentInput.value) +
        parseInt(clothesInput.value);
      if (
        isNaN(incomeInput.value) == false ||
        isNaN(totalExpensesAmount) == false
      ) {
        if (input.value < 0) {
          document.getElementById("warning").style.display = "block";
          console.log("your expenses is greater than income");
        }
        // input.value = 0;

        // document.getElementById("warning").style.display = "block";
      } else {
        document.getElementById("warning").style.display = "none";

        totalExpenses.innerText = totalExpensesAmount;
      }
      balance.innerText =
        parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
    } else {
      // saving and remaining balance
      let saving =
        (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
      if (saving > balance.innerText) {
        input.value = 0;
        console.log("your save is greater than balance");
      } else {
        savingAmount.innerText = saving;
      }
      remainingBalance.innerText =
        parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
    }
  }
}
*/
/*
function calcMoney(myId) {
  // string on negative error handling
  const inpt = document.getElementsByTagName("input");
  for (let input of inpt) {
    if (isNaN(input.value) || input.value < 0 || input.value == "") {
      alert("Sorry, you can not enter input string or negative number");
      input.value = 0;
    } else {
      // calculate
      if (myId == true) {
        
        totalExpenses.innerText =
          parseInt(foodInput.value) +
          parseInt(rentInput.value) +
          parseInt(clothesInput.value);
        balance.innerText = 
          parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
      } else {
        // saving and remaining balance
        savingAmount.innerText =
          (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
        remainingBalance.innerText =
          parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
      }
    }
  }

}
*/

function calcMoney(myId) {
  // string on negative error handling
  const inpt = document.getElementsByTagName("input");
  for (let input of inpt) {
    if (isNaN(input.value) || input.value < 0 || input.value == "") {
      alert("Sorry, you can not enter input string or negative number");
      input.value = 0;
    } else {
      // calculate
      if (myId == true) {
        let totalExpensesAmount =
          parseInt(foodInput.value) +
          parseInt(rentInput.value) +
          parseInt(clothesInput.value);
        if (totalExpensesAmount > incomeInput.value) {
          input.value = 0;
          alert("your expenses is greater than income");
        } else {
          totalExpenses.innerText = totalExpensesAmount;
        }
        balance.innerText =
          parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
      } else {
        // saving and remaining balance
        let saving =
          (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
        if (saving > balance.innerText) {
          saveInput.value = 0;
          alert("your save is greater than balance");
        } else {
          savingAmount.innerText = saving;
        }
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
