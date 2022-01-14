window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
 const principle = document.getElementById("loan-amount").defaultValue=10000;
 const loanLength = document.getElementById("loan-years").defaultValue=2;
 const percent = document.getElementById("loan-rate").defaultValue=5;
 
 
 calculateMonthlyPayment(getCurrentUIValues());
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let interest = ((values.rate/100))/12
  let amount = values.amount;
  let totalPayments = (12*values.years)*-1;

  let numerator = amount*interest;
  let den = 1-Math.pow((1+interest), totalPayments)

  let monthPayment= numerator/den;
  let payments = monthPayment.toFixed(2);
  console.log(payments)
  return payments
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText=monthly;
}
