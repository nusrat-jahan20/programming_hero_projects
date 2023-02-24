// step-1
document.getElementById('submit-btn').addEventListener('click', function() {
    // use .value to get text from any input field
    // step-2: get email address
    // 2.a: set id on the html element
    // 2.b: get the element
    // 2.c: get the value from the element
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
  
    // step-3: get password
    // follow same steps of email field
    const passwordField = document.getElementById('user-password');
    passwordValue = passwordField.value;

    // DANGER: DO NOT VERIFY email / password on the client side
    // step-4: verify email and password
    if(emailValue === 'nusrat.jahan99@gmail.com' && passwordValue === 'secret2000') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please type valid email and password!');
    }
})