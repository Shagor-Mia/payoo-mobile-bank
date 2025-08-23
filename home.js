const pin = 1234;
// add money
document.getElementById("add-money-btn").addEventListener("click", function () {
  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("ac-number").value;
  const addAmount = parseInt(document.getElementById("add-amount").value);
  const pinNumber = parseInt(document.getElementById("pin-number").value);
  const balance = parseInt(document.getElementById("balance").innerText);

  if (accountNumber.length < 11) {
    alert("enter valid ac-number");
    return;
  }
  if (pin != pinNumber) {
    alert("enter valid pin");
    return;
  }

  const newAvailableBalance = balance + addAmount;
  document.getElementById("balance").innerText = newAvailableBalance;
});

// withdraw money
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function () {
    const withdrawAmount = parseInt(
      document.getElementById("Withdraw-amount").value
    );
    const agentNumber = document.getElementById("agent-number").value;
    const pinNumber = parseInt(
      document.getElementById("withdraw-pin-number").value
    );
    const balance = parseInt(document.getElementById("balance").innerText);

    if (agentNumber.length < 11) {
      alert("enter valid agent-number");
      return;
    }
    if (pin != pinNumber) {
      alert("enter valid pin");
      return;
    }

    const newAvailableBalance = balance - withdrawAmount;
    document.getElementById("balance").innerText = newAvailableBalance;
  });

// toggling features
document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("cash-out-form").style.display = "none";
  document.getElementById("add-money-form").style.display = "block";
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  document.getElementById("cash-out-form").style.display = "block";
  document.getElementById("add-money-form").style.display = "none";
});
