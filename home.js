const pin = 1234;
const transactionData = [];
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
// toggle function form
function toggleForm(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// handle toggle buttons
function toggleButton(id) {
  const formBtn = document.getElementsByClassName("form-btn");
  for (const btn of formBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
  }
  document.getElementById(id).classList.remove("border-gray-200");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money
document.getElementById("add-money-btn").addEventListener("click", function () {
  const bank = getInputValue("bank");
  const accountNumber = getInputValue("ac-number");
  const addAmount = getInputValueNumber("add-amount");
  if (addAmount <= 0) {
    alert("please enter valid amount!");
    return;
  }
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

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
});

// withdraw money
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValueNumber("Withdraw-amount");
    const agentNumber = getInputValue("agent-number");
    const pinNumber = getInputValueNumber("withdraw-pin-number");
    const balance = getInnerText("balance");

    if (withdrawAmount <= 0) {
      alert("please enter valid amount");
      return;
    }
    if (withdrawAmount >= balance) {
      alert("insuficient balance");
      return;
    }

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

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    console.log(transactionData);
  });

// transaction
document.getElementById("transc-btn").addEventListener("click", function () {
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerText = "";
  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div
            class="bg-white rounded-xl p-3 flex justify-between items-center px-5 mt-3"
          >
            <div class="flex items-center gap-4">
              <div class="rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" class="mx-auto" alt="" />
              </div>
              <div>
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
          </div>
    `;
    transactionContainer.appendChild(div);
  }
});

// toggling features
// add money
document.getElementById("add-btn").addEventListener("click", function () {
  toggleForm("add-money-form");

  toggleButton("add-btn");
});
// cash out
document.getElementById("cashout-btn").addEventListener("click", function () {
  toggleForm("cash-out-form");

  toggleButton("cashout-btn");
});
// money transfer
document.getElementById("transfer-btn").addEventListener("click", function () {
  toggleForm("transfer-money-form");

  toggleButton("transfer-btn");
});
// get bonus
document.getElementById("bonus-btn").addEventListener("click", function () {
  toggleForm("bonus-form");

  toggleButton("bonus-btn");
});
// pay bill
document.getElementById("paybill-btn").addEventListener("click", function () {
  toggleForm("pay-bill-form");

  toggleButton("paybill-btn");
});
// transactions
document.getElementById("transc-btn").addEventListener("click", function () {
  toggleForm("transaction-form");

  toggleButton("transc-btn");
});
