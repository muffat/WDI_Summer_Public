var checkingBalance = 0;
var savingsBalance = 0;

$(function() {
  $("#checking-deposit").click(getCheckingDeposit);
  $("#savings-deposit").click(getSavingsDeposit);
  $("#checking-withdraw").click(getCheckingWithdraw);
  $("#getSavingsWithdraw").click(getSavingsWithdraw);
  updateDisplay();
});

// window.onload = function(){

  function getCheckingDeposit(){
    // var amount = document.getElementById('checking-amount').value;
    var amount = $("#checking-amount").val();
    amount = parseInt(amount);
    checkingBalance = amount + checkingBalance;
    updateDisplay();
  };

  function getSavingsDeposit(){
    // var amount = document.getElementById('savings-amount').value;
    var amount = $("#savings-amount").val();
    amount = parseInt(amount);
    savingsBalance = amount + savingsBalance;
    updateDisplay();
  };

  function getCheckingWithdraw(){
    // var amount = document.getElementById('checking-amount').value;
    var amount = $("#checking-amount").val();
    amount = parseInt(amount);
    balances = withdrawFunds(amount, checkingBalance, savingsBalance);
    checkingBalance = balances[0];
    savingsBalance = balances[1];
    updateDisplay();
  };

  function getSavingsWithdraw(){
    // var amount = document.getElementById('savings-amount').value;
    var amount = $("#savings-amount").val();
    amount = parseInt(amount);
    balances = withdrawFunds(amount, savingsBalance, checkingBalance);
    savingsBalance = balances[0];
    checkingBalance = balances[1];
    updateDisplay();
  };

  // updateDisplay();

// };

function withdrawFunds(amount, primary, secondary) {
  if (amount <= primary) {
    primary = primary - amount;
  } else if ((amount > primary) && (amount <= (secondary + primary))) {
    secondary = (primary + secondary) - amount;
    primary = 0;
  }
  return [primary, secondary];
}

function updateDisplay() {

  // var element = document.getElementById('checking-balance');
  var element = $("#checking-balance");
  // element = parseInt(element);

  if (checkingBalance <= 0) {
    // element.classList.add('zero');
    element.addClass("zero");
  } else {
    // element.classList.remove('zero');
    element.removeClass("zero");
  }

  // var element2 = document.getElementById('savings-balance');
  var element2 = $("#savings-balance");

  if (savingsBalance <= 0) {
    // element2.classList.add('zero');
    element2.addClass("zero");
  } else {
    // element2.classList.remove('zero');
    element2.removeClass("zero");
  }
  // document.getElementById('checking-balance').innerHTML = '$' + checkingBalance;
  $("#checking-balance").text('$' + checkingBalance);
  // document.getElementById('savings-balance').innerHTML = '$' + savingsBalance;
  $("#savings-balance").text('$' + savingsBalance);
  // document.getElementById('checking-amount').value = '';
  $("#checking-amount").val('');
  // document.getElementById('savings-amount').value = '';
  $("#savings-amount").val('');
}