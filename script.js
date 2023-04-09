let btnRent = document.querySelectorAll(".btn-rent");
let userInput = document.querySelectorAll(".days");
let confirmation = document.querySelector(".overlay");
let confirmationContent = document.querySelector(".content");

let totalRent = function calculateRent(carType, days) {
  switch (carType) {
    case "Economy":
      return 4000 * days;
      break;
    case "Midsize":
      return 10000 * days;
      break;
    case "Luxury":
      return 20000 * days;
      break;
  }
};

btnRent.forEach(function (btn, i) {
  btn.addEventListener("click", (event) => {
    let days = userInput[i].value;
    let carType = event.target.dataset.type;
    let rent = totalRent(carType, days);
    console.log(rent);
    confirmation.style.display = "block";
    confirmationContent.innerHTML =
      `<h4>Car Type: ` +
      carType +
      `</h4>
    <h4>No. of days: ` +
      days +
      ` day(s)</h4>
      <h3> Total to be paid: Rs.` +
      rent +
      `</h3>`;
  });
});
