console.log("connected");

// login DOM
document.getElementById("login-btn").addEventListener("click", function (e) {
  console.log("login clicked");
  const mobileNumber = 1234567890;
  const pinNumber = 1234;

  const getNumber = document.getElementById("mobile").value;
  const convertMoblieInt = parseInt(getNumber);

  const getPin = document.getElementById("pin").value;
  const convertPinInt = parseInt(getPin);

  if (convertMoblieInt === mobileNumber && convertPinInt === pinNumber) {
    console.log("number and pin match");
  } else {
    console.log("Invalid pin or number");
  }
});
