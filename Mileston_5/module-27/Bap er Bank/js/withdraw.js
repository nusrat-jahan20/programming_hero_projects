document.getElementById('withdraw-btn').addEventListener('click', function() {
    // step-1: get the input field value and convert it to float type
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueString = withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldValueString);
    
    // step-2: clear input field
    withdrawField.value = '';

     // extra step: error handling
    if(isNaN(withdrawFieldValue)) {
        alert('please provide a valid number');
        return;
    }

    // step-3: get the value of deposite amount and convert it to float type
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValueString = withdrawAmount.innerText;
    const withdrawAmountValue = parseFloat(withdrawAmountValueString);

    // step-4: get the value of balance amount and convert it to float type
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountValueString = balanceAmount.innerText;
    const balanceAmountValue = parseFloat(balanceAmountValueString);

    // extra step: error handling
    if(withdrawFieldValue > balanceAmountValue) {
        alert('Bap er bank e eto taka nai');
        return;
    }

    // step-5: add input field value and deposite amount
    const totalwithdrawAmount = withdrawFieldValue + withdrawAmountValue;

    // step-6: update current deposite amount
    withdrawAmount.innerText = totalwithdrawAmount;

    // step-7: add input field value and balance amount
    const totalBalanceAmount = balanceAmountValue - withdrawFieldValue;

    // step-8: update current balance amount
    balanceAmount.innerText = totalBalanceAmount;
})



