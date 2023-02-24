document.getElementById('withdraw-btn').addEventListener('click', function() {
    // step-1: get the input field value and convert it to float type
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueString = withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldValueString);
    
    // step-2: get the value of deposite amount and convert it to float type
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValueString = withdrawAmount.innerText;
    const withdrawAmountValue = parseFloat(withdrawAmountValueString);

    // step-3: add input field value and deposite amount
    const totalwithdrawAmount = withdrawFieldValue + withdrawAmountValue;

    // step-4: update current deposite amount
    withdrawAmount.innerText = totalwithdrawAmount;

    // step-5: get the value of balance amount and convert it to float type
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountValueString = balanceAmount.innerText;
    const balanceAmountValue = parseFloat(balanceAmountValueString);

    // step-6: add input field value and balance amount
    const totalBalanceAmount = balanceAmountValue - withdrawFieldValue;

    // step-7: update current balance amount
    balanceAmount.innerText = totalBalanceAmount;

    // step-8: clear input field
    withdrawField.value = ''
})