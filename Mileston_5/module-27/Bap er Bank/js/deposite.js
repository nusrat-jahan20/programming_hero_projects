document.getElementById('deposite-btn').addEventListener('click', function() {
    // step-1: get the input field value and convert it to float type
    const depositeField = document.getElementById('deposite-field');
    const depositeFieldValueString = depositeField.value;
    const depositeFieldValue = parseFloat(depositeFieldValueString);

    // step-2: clear input field
    depositeField.value = ''

     // extra step: error handling
    if(isNaN(depositeFieldValue)) {
        alert('please provide a valid number');
        return;
    }
    
    // step-3: get the value of deposite amount and convert it to float type
    const depositeAmount = document.getElementById('deposite-amount');
    const depositeAmountValueString = depositeAmount.innerText;
    const depositeAmountValue = parseFloat(depositeAmountValueString);

    // step-4: get the value of balance amount and convert it to float type
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountValueString = balanceAmount.innerText;
    const balanceAmountValue = parseFloat(balanceAmountValueString);

    // step-5: add input field value and deposite amount
    const totalDepositeAmount = depositeFieldValue + depositeAmountValue;

    // step-6: update current deposite amount
    depositeAmount.innerText = totalDepositeAmount;

    // step-7: add input field value and balance amount
    const totalBalanceAmount = depositeFieldValue + balanceAmountValue;

    // step-8: update current balance amount
    balanceAmount.innerText = totalBalanceAmount;
})