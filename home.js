const pin = 1234;

//reuseable function
// value parse
function getInputValueNumber(id) {
  const inputFieldValue = parseInt(document.getElementById(id).value);
  return inputFieldValue;
}
// value
function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}
// get innerText
function getInnerText(id) {
  const inputFieldValue = parseInt(document.getElementById(id).innerText);
  return inputFieldValue;
}
// set innerText
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
// toggle function
function toggleForm(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// add money
document.getElementById("add-money-btn").addEventListener("click", function () {
  const bank = getInputValue("bank");
  const accountNumber = getInputValue("ac-number");
  const addAmount = getInputValueNumber("add-amount");
  const pinNumber = getInputValueNumber("pin-number");
  const balance = getInnerText("balance");

  if (accountNumber.length < 11) {
    alert("enter valid ac-number");
    return;
  }
  if (pin != pinNumber) {
    alert("enter valid pin");
    return;
  }

  const newAvailableBalance = balance + addAmount;
  setInnerText("balance", newAvailableBalance);
});

// withdraw money
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValueNumber("Withdraw-amount");
    const agentNumber = getInputValue("agent-number");
    const pinNumber = getInputValueNumber("withdraw-pin-number");
    const balance = getInnerText("balance");

    if (agentNumber.length < 11) {
      alert("enter valid agent-number");
      return;
    }
    if (pin != pinNumber) {
      alert("enter valid pin");
      return;
    }

    const newAvailableBalance = balance - withdrawAmount;
    setInnerText("balance", newAvailableBalance);
  });

// toggling features
document.getElementById("add-btn").addEventListener("click", function () {
  toggleForm("add-money-form");
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  toggleForm("cash-out-form");
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  toggleForm("transfer-money-form");
});
document.getElementById("bonus-btn").addEventListener("click", function () {
  toggleForm("bonus-form");
});
